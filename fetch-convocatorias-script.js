// Using native fetch API (no require needed)

// API endpoints
const CRAWL_API_URL =
  "https://hormiguero-lab-api-proxy.vercel.app/api/crawl-single-url";
const ASK_AI_API_URL = "https://hormiguero-lab-api-proxy.vercel.app/api/ask-ai";

/**
 * Fetches convocatorias by crawling multiple URLs in parallel
 * and then processing the results with AI in batches of 5.
 *
 * @param {string[]} urls - List of URLs to crawl
 * @returns {Promise<Array>} - Array of convocatorias from all URLs
 */
export async function fetchConvocatorias(urls) {
  if (!Array.isArray(urls) || urls.length === 0) {
    return [];
  }

  try {
    // Step 1: Crawl all URLs in parallel
    console.log(`Starting parallel crawl for ${urls.length} URLs...`);
    const crawlPromises = urls.map((url) => crawlSingleUrl(url));
    const crawlResults = await Promise.all(crawlPromises);
    console.log(`Crawl completed for ${crawlResults.length} URLs`);

    // Filter out failed crawls
    const successfulCrawls = crawlResults.filter(
      (result) => result.markdown && result.markdown.length > 0,
    );
    console.log(`${successfulCrawls.length} URLs crawled successfully`);

    // Step 2: Process results in batches of 5 with AI
    const batchSize = 5;
    const allConvocatorias = [];

    for (let i = 0; i < successfulCrawls.length; i += batchSize) {
      const batch = successfulCrawls.slice(i, i + batchSize);
      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1} (${batch.length} URLs)...`,
      );

      try {
        const batchConvocatorias = await askAiForBatchConvocatorias(batch);
        allConvocatorias.push(...batchConvocatorias);
        console.log(
          `Batch ${Math.floor(i / batchSize) + 1} completed. Total convocatorias so far: ${allConvocatorias.length}`,
        );
      } catch (error) {
        console.error(
          `Error processing batch ${Math.floor(i / batchSize) + 1}:`,
          error,
        );
        // Continue with next batch even if one fails
      }
    }

    console.log(
      `AI processing completed. Total convocatorias found: ${allConvocatorias.length}`,
    );
    return allConvocatorias;
  } catch (error) {
    console.error("Error fetching convocatorias:", error);
    throw error;
  }
}

/**
 * Crawls a single URL using the crawl-single-url API.
 *
 * @param {string} url - URL to crawl
 * @returns {Promise<Object>} - Crawl result with markdown content
 */
async function crawlSingleUrl(url) {
  try {
    const response = await fetch(CRAWL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        crawlerOptions: {
          maxDepth: 2,
          limit: 20,
          includePaths: ["convocatorias"],
          excludePaths: ["login", "admin", "usuario", "register"],
          allowExternalLinks: false,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Crawl API error: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    return {
      url: url,
      markdown: data.markdown || "",
      pagesScraped: data.pagesScraped || 0,
    };
  } catch (error) {
    console.error(`Error crawling ${url}:`, error);
    return {
      url: url,
      markdown: "",
      pagesScraped: 0,
      error: error.message,
    };
  }
}

/**
 * Asks AI to extract convocatorias from a batch of markdown contents.
 * Sends up to 5 URLs worth of markdown in a single API call.
 *
 * @param {Array<Object>} batch - Array of crawl results (up to 5)
 * @returns {Promise<Array>} - Array of convocatorias extracted
 */
async function askAiForBatchConvocatorias(batch) {
  try {
    // Construct the batch context with clear URL separators
    const batchContext = batch
      .map((item, index) => {
        return `
=== FUENTE ${index + 1}: ${item.url} ===

${item.markdown} 

=== FIN FUENTE ${index + 1} ===
`;
      })
      .join("\n\n");

    const systemPrompt = `Eres un experto en análisis de convocatorias públicas en Colombia. Tu tarea es extraer información estructurada sobre convocatorias (calls for proposals, becas, empleos, financiamiento, etc.) de contenido web en markdown.

IMPORTANTE: Responde ÚNICAMENTE con un array JSON válido. No incluyas texto explicativo antes o después del JSON.

Cada convocatoria debe tener esta estructura exacta:
{
  "titulo": "Título completo de la convocatoria",
  "entidad": "Nombre de la entidad que convoca",
  "descripcion": "Descripción detallada",
  "fechaCierre": "YYYY-MM-DD o null si no hay fecha",
  "enlace": "URL completa de la convocatoria si está disponible",
  "monto": "Monto en COP como string o null",
  "requisitos": "Requisitos principales resumidos",
  "estado": "abierta, cerrada o vigente",
  "categoria": "Categoría de la convocatoria",
  "fuente": "Nombre de la entidad fuente"
}`;

    const userPrompt = `Analiza el siguiente contenido de ${batch.length} sitios web y extrae TODAS las convocatorias que encuentres.

${batchContext}

INSTRUCCIONES:
1. Extrae TODAS las convocatorias encontradas en las ${batch.length} fuentes
2. Para cada convocatoria, completa todos los campos posibles
3. Si no encuentras un dato, usa null
4. Determina el estado basándote en fechas de cierre (si la fecha ya pasó, estado="cerrada")
5. Responde SOLO con el array JSON, sin texto adicional

Formato de respuesta (ejemplo):
[
  {
    "titulo": "Convocatoria Nacional de CTeI 2026",
    "entidad": "Minciencias",
    "descripcion": "Convocatoria para proyectos de investigación en ciencia, tecnología e innovación...",
    "fechaCierre": "2026-03-15",
    "enlace": "https://....",
    "monto": "500000000",
    "requisitos": "Grupos de investigación categoría A o B, experiencia mínima 3 años",
    "estado": "abierta",
    "categoria": "Ciencia y Tecnología",
    "fuente": "Minciencias"
  }
]`;

    const response = await fetch(ASK_AI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        model: "llama-3.1-sonar-large-128k-online", // Perplexity Sonar model
        temperature: 0.2, // Low temperature for consistent extraction
        max_tokens: 12000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `AI API error: ${response.status} - ${response.statusText} - ${errorText}`,
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "[]";

    // Parse the JSON response
    let convocatorias = [];
    try {
      // Try to extract JSON from response (in case there's extra text)
      convocatorias = JSON.parse(aiResponse);

      // Validate and ensure each convocatoria has required fields
      convocatorias = convocatorias.filter((conv) => {
        return conv.titulo && conv.entidad && conv.descripcion;
      });

      console.log(`Extracted ${convocatorias.length} convocatorias from batch`);
    } catch (parseError) {
      console.error("Error parsing AI response as JSON:", parseError);
      console.log("AI Response:", aiResponse);
      return [];
    }

    return convocatorias;
  } catch (error) {
    console.error(`Error processing AI batch:`, error);
    return [];
  }
}
