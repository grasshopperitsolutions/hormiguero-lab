// keep the main one as the last for script to show the main website
const SOURCES = [
  // // pages 1–120
  // ...Array.from({ length: 120 }, (_, i) => ({
  //   id: "minciencias",
  //   url: `https://minciencias.gov.co/convocatorias/todas?page=${i + 1}`,
  //   name: "Minciencias",
  //   category: "Ciencia y Tecnología",
  // })),
  // {
  //   id: "minciencias",
  //   url: "https://minciencias.gov.co/convocatorias/todas",
  //   name: "Minciencias",
  //   category: "Ciencia y Tecnología",
  // },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow_cur=2",
    name: "Ministerio de Igualdad y Equidad",
    category: "Vivienda y Social",
  },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow_cur=3",
    name: "Ministerio de Igualdad y Equidad",
    category: "Vivienda y Social",
  },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias",
    name: "Ministerio de Igualdad y Equidad",
    category: "Vivienda y Social",
  },
  // Cooperación y Emprendimiento
  // // {
  // //   id: "apc",
  // //   url: "https://www.apccolombia.gov.co/modalidades-de-cooperacion/convocatorias",
  // //   name: "APC Colombia",
  // //   category: "Cooperación y Emprendimiento",
  // // },

  // {
  //   id: "atenea",
  //   url: "https://agenciaatenea.gov.co/convocatorias",
  //   name: "ATENEA Bogotá",
  //   category: "Ciencia y Tecnología",
  // },
  // {
  //   id: "parques-nacionales",
  //   url: "https://www.parquesnacionales.gov.co/programa-de-estimulo-al-conocimiento/convocatorias-abiertas-categoria-investigacion/",
  //   name: "Parques Nacionales",
  //   category: "Ciencia y Tecnología",
  // },

  // // Educación y Becas
  // {
  //   id: "icetex",
  //   url: "https://web.icetex.gov.co/becas",
  //   name: "ICETEX",
  //   category: "Educación y Becas",
  // },
  // {
  //   id: "sena",
  //   url: "https://www.sena.edu.co/es-co/formacion/Paginas/Estudie-en-el-SENA.aspx",
  //   name: "SENA",
  //   category: "Educación y Becas",
  // },
  // {
  //   id: "fundacion-sura",
  //   url: "https://www.fundacionsura.com/iniciativas/beca-nicanor-restrepo-santamaria/",
  //   name: "Fundación SURA",
  //   category: "Educación y Becas",
  // },
  // {
  //   id: "mineducacion",
  //   url: "https://www.mineducacion.gov.co/portal/micrositios-institucionales/Cooperacion-Internacional/",
  //   name: "MinEducación",
  //   category: "Educación y Becas",
  // },

  // {
  //   id: "cidei",
  //   url: "https://cidei.net/convocatorias-para-proyectos-idi/",
  //   name: "CIDEI",
  //   category: "Cooperación y Emprendimiento",
  // },

  // // Empleo Público
  // {
  //   id: "cnsC",
  //   url: "https://www.cnsc.gov.co",
  //   name: "CNSC",
  //   category: "Empleo Público",
  // },
  // {
  //   id: "dnp",
  //   url: "https://www.dnp.gov.co",
  //   name: "DNP",
  //   category: "Empleo Público",
  // },
  // {
  //   id: "sena-empleo",
  //   url: "https://ape.sena.edu.co/spe-web/spe/cartelera",
  //   name: "SENA Empleo",
  //   category: "Empleo Público",
  // },

  // // Vivienda y Social
  // {
  //   id: "minvivienda",
  //   url: "https://www.minvivienda.gov.co/sala-de-prensa",
  //   name: "MinVivienda",
  //   category: "Vivienda y Social",
  // },
];

// Unified data source for convocatorias
let allConvocatorias = [];
let currentConvocatorias = []; // Active data source (mock or real)

// Mock convocatorias array to display until button is pressed
const mockConvocatorias = [
  {
    titulo:
      "Gobierno del Cambio abre convocatorias para potenciar el cuidado de las personas mayores",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Convocatoria para potenciar el cuidado de las personas mayores a través de diversas iniciativas del Gobierno del Cambio. Publicada el 2026-01-21.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/gobierno-del-cambio-abre-convocatorias-para-potenciar-el-cuidado-de-las-personas-mayores?p_r_p_assetEntryId=165938",
    monto: null,
    requisitos: "No especificados en la fuente",
    estado: "abierta",
    categoria: "Cuidado personas mayores",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "SABIDURÍAS QUE TRANSFORMAN",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Convocatoria para fortalecer y reconocer iniciativas lideradas por personas mayores que promuevan la inclusión y dignificación de la vejez. Publicada el 2026-01-14.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/sabidur%C3%ADas-que-transforman?p_r_p_assetEntryId=162683",
    monto: null,
    requisitos: "Iniciativas lideradas por personas mayores",
    estado: "abierta",
    categoria: "Personas mayores",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Estímulos para el Cambio 2025",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Apoyo en especie otorgado a Barras Tradicionales, filiales barristas, organizaciones y/o colectivos/as futboleros/as. Inicio 12 noviembre, cierre 19 noviembre 2025. Publicada 2025-11-12.",
    fechaCierre: "2025-11-19",
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/est%C3%ADmulos-para-el-cambio-2025?p_r_p_assetEntryId=149564",
    monto: null,
    requisitos:
      "Barras tradicionales, filiales barristas, organizaciones futboleras",
    estado: "cerrada",
    categoria: "Estímulos culturales",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Capacidad que emprende",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Apoyaremos 160 iniciativas productivas de personas con discapacidad o sus familias. Publicada 2025-10-30.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/capacidad-que-emprende?p_r_p_assetEntryId=146645",
    monto: null,
    requisitos: "Personas con discapacidad o sus familias",
    estado: "cerrada",
    categoria: "Emprendimiento discapacidad",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo:
      "Primer Encuentro Nacional de Sindicalistas LGBTIQ+ León Zuleta y Diana Navarro",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "El encuentro busca fortalecer tu liderazgo y visibilizar el posicionamiento y visibilidad de tus necesidades en las organizaciones sindicales. Publicada 2025-10-29.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/primer-encuentro-nacional-de-sindicalistas-%C2%A0lgbtiq-le%C3%B3n-zuleta-y-diana-navarro?p_r_p_assetEntryId=146388",
    monto: null,
    requisitos: "Sindicalistas LGBTIQ+",
    estado: "cerrada",
    categoria: "Encuentros sindicales LGBTIQ+",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Convención Nacional Transfemenina",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Tu participación es clave para fortalecer nuestras voces y avanzar en la reivindicación de derechos. Publicada 2025-10-28.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/convenci%C3%B3n-nacional-transfemenina?p_r_p_assetEntryId=146358",
    monto: null,
    requisitos: "Población transfemenina",
    estado: "cerrada",
    categoria: "Convenciones LGBTIQ+",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Promoviendo Paz en los Territorios",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Emprendedoras y Emprendedores Afrodescendientes del oriente de Cali. Publicada 2025-10-28.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/promoviendo-paz-en-los-territorios?p_r_p_assetEntryId=146023",
    monto: null,
    requisitos: "Emprendedores afrodescendientes del oriente de Cali",
    estado: "cerrada",
    categoria: "Emprendimiento afro",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Pre-Encuentros Regionales hacia la II Convención Nacional LGBTIQ+",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Cronograma para las inscripciones a los pre-encuentros regionales hacia la II Convención Nacional LGBTIQ+. Publicada 2025-10-28.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/pre-encuentros-regionales-hacia-la-ii-convenci%C3%B3n-nacional-lgbtiq-?p_r_p_assetEntryId=145879",
    monto: null,
    requisitos: "Población LGBTIQ+",
    estado: "cerrada",
    categoria: "Encuentros LGBTIQ+",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo:
      "Convocatoria abierta para la autonomía económica de las mujeres en todas sus diversidades",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Convocatoria dirigida a mujeres en todas sus diversidades que lideran o desean fortalecer sus iniciativas económicas para conformar base de datos. Publicada 2025-10-12.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/convocatoria-abierta-para-la-autonom%C3%ADa-econ%C3%B3mica-de-las-mujeres-en-todas-sus-diversidades-1?p_r_p_assetEntryId=143534",
    monto: null,
    requisitos: "Mujeres en todas sus diversidades con iniciativas económicas",
    estado: "cerrada",
    categoria: "Autonomía económica mujeres",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo:
      "Convocatoria de Selección de Representantes de la Sociedad Civil al Consejo Nacional de Discapacidad",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Proceso para que personas con discapacidad participen directamente en decisiones que afectan su vida y derechos. Publicada 2025-10-16.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/convocatoria-de-selecci%C3%B3n-de-representantes-de-la-sociedad-civil-al-consejo-nacional-de-discapacidad?p_r_p_assetEntryId=143309",
    monto: null,
    requisitos: "Personas con discapacidad",
    estado: "cerrada",
    categoria: "Representación discapacidad",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo:
      "CRÉDITOS EDUCATIVOS PARA PERSONAS CON DISCAPACIDAD Y POBLACIÓN LGBTIQ+",
    entidad: "Ministerio de Igualdad y Equidad - ICETEX - FONIGUALDAD",
    descripcion:
      "Créditos condonables de educación superior para personas con discapacidad y población LGBTIQ+. Cierre de inscripciones: 15 de octubre de 2025. Publicada 2025-10-13.",
    fechaCierre: "2025-10-15",
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/recursos-para-estudiantes-con-discapacidad-y-poblaci%C3%B3n-lgbtiq-?p_r_p_assetEntryId=142708",
    monto: null,
    requisitos: "Estudiantes con discapacidad o LGBTIQ+",
    estado: "cerrada",
    categoria: "Créditos educativos",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo:
      "Elección de mujeres representantes al Comité Nacional de Seguimiento a la Ley 1257 de 2008",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Mujeres de todas las regiones podrán postularse como candidatas o inscribirse como votantes. Publicada 2025-10-01.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/elecci%C3%B3n-de-mujeres-representantes-al-comit%C3%A9-nacional-de-seguimiento-a-la-ley-1257-de-2008?p_r_p_assetEntryId=139930",
    monto: null,
    requisitos: "Mujeres de todas las regiones",
    estado: "cerrada",
    categoria: "Representación mujeres",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Estamos buscando 13 formadora/es territoriales",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Escuela Sociedades del Cuidado del Sistema Nacional de Cuidado. Publicada 2025-09-12.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/estamos-buscando-13-formadora-es-territoriales?p_r_p_assetEntryId=137832",
    monto: null,
    requisitos: "Formadoras/es territoriales",
    estado: "cerrada",
    categoria: "Formación cuidado",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Buscamos Formadoras/es Territoriales",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Escuela Redes del Cuidado del Sistema Nacional de Cuidado. Publicada 2025-09-18.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/buscamos-formadores-territoriales?p_r_p_assetEntryId=137796",
    monto: null,
    requisitos: "Formadoras/es territoriales",
    estado: "cerrada",
    categoria: "Formación cuidado",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "CONPES del Derecho Humano a la Alimentación",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Talleres de participación para la construcción de la Política para la garantía progresiva del Derecho Humano a la Alimentación. Publicada 2025-08-14.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/conpes-del-derecho-humano-a-la-alimentaci%C3%B3n?p_r_p_assetEntryId=124579",
    monto: null,
    requisitos: "Participantes en talleres",
    estado: "cerrada",
    categoria: "Participación política pública",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "Mochila Atrapasueños 2025",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Impulsamos proyectos comunitarios, culturales y educativos que transforman la vida de niñas, niños y adolescentes en todo el país. Publicada 2025-07-01.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/mochila-atrapasue%C3%B1os?p_r_p_assetEntryId=111717",
    monto: null,
    requisitos: "Proyectos para niños y adolescentes",
    estado: "cerrada",
    categoria: "Proyectos infantiles",
    fuente: "Ministerio de Igualdad y Equidad",
  },
  {
    titulo: "RED NACIONAL DE CASAS REFUGIO PARA MUJERES VÍCTIMAS DE VIOLENCIA",
    entidad: "Ministerio de Igualdad y Equidad",
    descripcion:
      "Convocatoria para impulsar la puesta en marcha de la Red Nacional de Casas Refugio. Persona profesional con formación en ciencias sociales, humanas o de la salud. Publicada 2025-04-10.",
    fechaCierre: null,
    enlace: "https://www.minigualdadyequidad.gov.co/-/convocatoria-de-prueba",
    monto: null,
    requisitos: "Profesionales en ciencias sociales, humanas o salud",
    estado: "cerrada",
    categoria: "Casas refugio",
    fuente: "Ministerio de Igualdad y Equidad",
  },
];

function initializeSources() {
  const footerList = document.getElementById("footerSourceList");

  if (footerList) footerList.innerHTML = "";

  // Filtrar entidades únicas basándose en el nombre
  const uniqueEntities = Array.from(
    new Map(SOURCES.map((s) => [s.name, s])).values(),
  );

  // Agrupar por categoría
  const categories = {};
  uniqueEntities.forEach((s) => {
    if (!categories[s.category]) categories[s.category] = [];
    categories[s.category].push(s);
  });

  // Renderizar en Footer (Simple & Elegante)
  if (footerList) {
    Object.keys(categories).forEach((cat) => {
      const col = document.createElement("div");
      col.className = "space-y-4";

      // Título de Categoría
      const title = document.createElement("h5");
      title.className =
        "text-[9px] font-black text-white uppercase tracking-wider border-l-2 border-earth-clay pl-3 mb-4";
      title.innerText = cat;
      col.appendChild(title);

      // Lista de enlaces
      const ul = document.createElement("ul");
      ul.className = "space-y-2 pl-3";

      categories[cat].forEach((s) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = s.url;
        a.target = "_blank";
        a.className =
          "text-[10px] text-stone-500 hover:text-white transition-colors block leading-tight py-1";
        a.innerText = s.name;
        li.appendChild(a);
        ul.appendChild(li);
      });

      col.appendChild(ul);
      footerList.appendChild(col);
    });
  }
}

// Función para inicializar filtros dinámicos
function initializeFilters() {
  const categoryFilter = document.getElementById("categoryFilter");
  const fuenteFilter = document.getElementById("fuenteFilter");

  if (!categoryFilter || !fuenteFilter) return;

  // Limpiar filtros
  categoryFilter.innerHTML =
    '<option value="todas">Todas las categorías</option>';
  fuenteFilter.innerHTML = '<option value="todas">Todas las fuentes</option>';

  // Obtener categorías y fuentes únicas de los datos actuales
  const dataToUse =
    currentConvocatorias.length > 0 ? currentConvocatorias : mockConvocatorias;

  const uniqueCategories = [
    ...new Set(
      dataToUse.map((c) => c.categoria || c.category || "Sin categoría"),
    ),
  ].sort();
  const uniqueFuentes = [
    ...new Set(dataToUse.map((c) => c.fuente || c.entidad)),
  ].sort();

  // Agregar categorías al filtro
  uniqueCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Agregar fuentes al filtro
  uniqueFuentes.forEach((fuente) => {
    const option = document.createElement("option");
    option.value = fuente;
    option.textContent = fuente;
    fuenteFilter.appendChild(option);
  });
}

window.onload = async () => {
  initializeSources();

  // Try to load from Firebase first
  const storedData = await loadStoredConvocatorias();

  if (storedData.length > 0) {
    console.log(`✅ Loaded ${storedData.length} convocatorias from Firebase`);
    currentConvocatorias = storedData;
  } else {
    console.log("📦 No stored data, showing mock convocatorias");
    currentConvocatorias = mockConvocatorias;
  }

  // Initialize dynamic filters first
  initializeFilters();

  // Then render results
  renderResults(currentConvocatorias);
};

function showSection(id) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.add("hidden-section"));
  const activeSection = document.getElementById(id);
  if (activeSection) activeSection.classList.remove("hidden-section");

  document.querySelectorAll(".nav-link").forEach((l) => {
    l.classList.remove("active");
    if (l.innerText.toLowerCase() === (id === "nosotros" ? "nosotros" : id)) {
      l.classList.add("active");
    }
  });

  // Re-inicializar fuentes si entramos a convocatorias por si el DOM se alteró
  if (id === "convocatorias") {
    initializeSources();
  }

  window.scrollTo(0, 0);
}

const API_BASE = "https://hormiguero-lab-api-proxy.vercel.app";

async function startHarvest() {
  showSection("convocatorias");

  const btn = document.querySelector("nav .btn-harvest");
  const loading = document.getElementById("loading");
  const resultsGrid = document.getElementById("resultsGrid");
  const emptyState = document.getElementById("emptyState");

  if (!loading || !resultsGrid || !emptyState) return;

  btn.disabled = true;
  loading.classList.remove("hidden");
  resultsGrid.innerHTML = "";
  emptyState.classList.add("hidden");

  allConvocatorias = [];
  currentConvocatorias = [];

  try {
    const BATCH_SIZE = 4;
    const allResults = [];

    for (let i = 0; i < SOURCES.length; i += BATCH_SIZE) {
      const batch = SOURCES.slice(i, i + BATCH_SIZE);
      const urls = batch.map((s) => s.url);

      console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1}...`);

      const crawlRes = await fetch(`${API_BASE}/api/crawl-batch-urls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls }),
      });

      const crawlData = await crawlRes.json();

      if (crawlData.success && crawlData.results) {
        allResults.push(...crawlData.results);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    const markdownBatch = allResults
      .filter((r) => r.success && r.markdown)
      .map((r) => ({ url: r.url, markdown: r.markdown }));

    if (markdownBatch.length === 0) {
      console.warn("No markdown content to send to AI");
      emptyState.classList.remove("hidden");
      return;
    }

    const AI_BATCH_SIZE = 5;

    for (let i = 0; i < markdownBatch.length; i += AI_BATCH_SIZE) {
      const aiBatch = markdownBatch.slice(i, i + AI_BATCH_SIZE);

      console.log(
        `Processing AI batch ${Math.floor(i / AI_BATCH_SIZE) + 1}...`,
      );

      const aiRes = await fetch(`${API_BASE}/api/ask-ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markdownBatch: aiBatch }),
      });

      let aiData = await aiRes.json();

      if (aiData.convocatorias) {
        allConvocatorias.push(...aiData.convocatorias);
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    if (allConvocatorias.length > 0) {
      currentConvocatorias = allConvocatorias;
      showToast(
        "¡Sincronización exitosa!",
        `Se encontraron ${allConvocatorias.length} convocatorias actualizadas`,
        4000,
        "success",
      );
    } else {
      currentConvocatorias = [];
    }

    renderResults(currentConvocatorias);
    initializeFilters();
  } catch (error) {
    console.error("Error in startHarvest:", error);
    emptyState.classList.remove("hidden");

    showToast(
      "Error de sincronización",
      "No se pudo conectar con el servidor. Mostrando datos almacenados.",
      6000,
      "error",
    );
  } finally {
    loading.classList.add("hidden");
    btn.disabled = false;
  }
}

function renderResults(data) {
  const grid = document.getElementById("resultsGrid");
  const countEl = document.getElementById("totalCount");
  const emptyState = document.getElementById("emptyState");

  if (!grid || !countEl) return;

  grid.innerHTML = "";
  countEl.innerText = data.length < 10 ? `0${data.length}` : data.length;

  // Hide empty state if there are results, show it if no results
  if (emptyState) {
    if (data.length > 0) {
      emptyState.classList.add("hidden");
    } else {
      emptyState.classList.remove("hidden");

      showToast(
        "Sin resultados",
        "Intenta ajustar los filtros o limpiarlos para ver más opciones",
        5000,
      );
    }
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "nest-chamber p-10 flex flex-col md:flex-row gap-8 items-start";
    const statusClass = `status-${(item.estado || "abierta").toLowerCase()}`;

    // Buscar la categoría de la fuente
    const source = SOURCES.find((s) => s.name === item.fuente);
    const categoryBadge = source
      ? `<span class="inline-block bg-stone-100 text-[8px] px-2 py-1 rounded-full font-bold text-stone-500 uppercase tracking-tighter">${source.category}</span>`
      : "";

    card.innerHTML = `
                <div class="md:w-1/4 space-y-4 border-r border-stone-100 pr-6 w-full">
                    <div class="flex items-center gap-2">
                        <span class="status-pill ${statusClass}">${item.estado || "abierta"}</span>
                        ${categoryBadge}
                    </div>
                    <div class="space-y-1">
                        <span class="text-[10px] font-black uppercase text-stone-300 block">Fuente</span>
                        <span class="text-sm font-bold text-earth-clay">${item.fuente}</span>
                    </div>
                </div>
                <div class="flex-1 space-y-4">
                    <h3 class="serif text-3xl font-bold text-stone-900 leading-tight">${item.titulo}</h3>
                    <p class="text-stone-500 leading-relaxed text-sm">${item.descripcion || "Sin descripción detallada."}</p>
                    <div class="pt-6 flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-400 serif italic">${item.fechaCierre || "TBD"}</span>
                        <a href="${item.enlace || "#"}" target="_blank" class="text-earth-dark font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                            VER DETALLES <i class="fas fa-arrow-right text-xs"></i>
                        </a>
                    </div>
                </div>
            `;
    grid.appendChild(card);
  });
}

function applyFilters() {
  const queryEl = document.getElementById("searchInput");
  const statusEl = document.getElementById("statusFilter");
  const categoryEl = document.getElementById("categoryFilter");
  const fuenteEl = document.getElementById("fuenteFilter");

  if (!queryEl || !statusEl || !categoryEl || !fuenteEl) return;

  const query = queryEl.value.toLowerCase();
  const status = statusEl.value;
  const category = categoryEl.value;
  const fuente = fuenteEl.value;

  // Use currentConvocatorias (unified data source) for filtering
  const dataToFilter =
    currentConvocatorias.length > 0 ? currentConvocatorias : mockConvocatorias;

  const filtered = dataToFilter.filter((c) => {
    // Buscar la fuente en SOURCES para obtener la categoría
    const source = SOURCES.find((s) => s.name === c.fuente);
    const sourceCategory = source ? source.category : "";

    // Enhanced search functionality - search in title, description, source, and category
    const matchesQuery =
      query === "" ||
      (c.titulo || "").toLowerCase().includes(query) ||
      (c.descripcion || "").toLowerCase().includes(query) ||
      (c.fuente || "").toLowerCase().includes(query) ||
      (c.entidad || "").toLowerCase().includes(query) ||
      (sourceCategory || "").toLowerCase().includes(query) ||
      (c.categoria || "").toLowerCase().includes(query);

    const matchesStatus =
      status === "todos" || (c.estado || "").toLowerCase() === status;

    const matchesCategory =
      category === "todas" ||
      sourceCategory === category ||
      (c.categoria || "") === category;

    const matchesFuente =
      fuente === "todas" ||
      (c.fuente || "") === fuente ||
      (c.entidad || "") === fuente;

    return matchesQuery && matchesStatus && matchesCategory && matchesFuente;
  });
  renderResults(filtered);
}

function openModal() {
  document.getElementById("serviceModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("serviceModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

window.addEventListener("DOMContentLoaded", () => {
  if (typeof initializeSources === "function") initializeSources();
  checkSession();
});

function clearFilters() {
  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  const categoryFilter = document.getElementById("categoryFilter");
  const fuenteFilter = document.getElementById("fuenteFilter");

  if (searchInput) searchInput.value = "";
  if (statusFilter) statusFilter.value = "todos";
  if (categoryFilter) categoryFilter.value = "todas";
  if (fuenteFilter) fuenteFilter.value = "todas";

  if (typeof applyFilters === "function") applyFilters();

  // Add toast notification
  showToast(
    "Filtros limpiados",
    "Mostrando todas las convocatorias disponibles",
    3000,
  );
}

// Toast notification function
function showToast(title, message, duration = 7000, type = "info") {
  const icons = {
    success: "fa-check-circle",
    error: "fa-exclamation-circle",
    warning: "fa-exclamation-triangle",
    info: "fa-envelope-open-text",
  };

  const colors = {
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "var(--earth-accent)",
  };

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fas ${icons[type]} toast-icon" style="color: ${colors[type]}"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <i class="fas fa-times toast-close"></i>
  `;

  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);

  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.onclick = () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  };

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --- LOGICA DE COOKIES & SESION (48h) ---
function setCookie(name, value, hours) {
  const d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  // Properly encode the value to handle special characters
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
  console.log(`Cookie set: ${name}=${encodeURIComponent(value)}, expires in ${hours} hours`);
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      const value = c.substring(nameEQ.length, c.length);
      console.log(`Cookie retrieved: ${name}=${value}`);
      return decodeURIComponent(value);
    }
  }
  console.log(`Cookie not found: ${name}`);
  return null;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  console.log(`Cookie deleted: ${name}`);
}

function checkSession() {
  const user = getCookie("hormiguero_user");
  const btn = document.getElementById("nav-auth-btn");
  if (user && btn) {
    // Sesión Activa
    btn.innerHTML = `<i class="fas fa-sign-out-alt"></i> Salir (${user})`;
    btn.onclick = handleLogout;
    btn.classList.add("bg-earth-clay");
  } else if (btn) {
    // Sesión Inactiva
    btn.innerHTML = `<i class="fas fa-user"></i> Acceder`;
    btn.onclick = () => openAuthModal("login");
    btn.classList.remove("bg-earth-clay");
  }
}

// Lógica de envío de formulario de contacto vía mailto
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("formName").value;
  const subject = document.getElementById("formSubject").value;
  const message = document.getElementById("formMessage").value;
  const emailTo = "pimodani10@gmail.com";
  const emailSubject = encodeURIComponent(
    `Hormiguero Lab Propuesta ${subject}`,
  );
  const emailBody = encodeURIComponent(
    `Hola Hormiguero Lab,\n\nMi nombre es ${name}.\n\nMensaje:\n${message}\n\nAtentamente,\n${name}`,
  );

  // Trigger mailto
  window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

  // Show toast notification as fallback
  showToast(
    "Cliente de correo abierto",
    `Si no se abrió su aplicación de correo, envíe un email manualmente a: <strong>${emailTo}</strong>`,
    7000,
    "warning",
  );
}

function handleLogin(e) {
  e.preventDefault();
  // Aquí iría la lógica real de backend. Simulamos éxito:
  const email = e.target.querySelector('input[type="email"]').value;
  const name = email.split("@")[0]; // Mock user name

  // Guardar cookie por 48 horas
  setCookie("hormiguero_user", name, 48);

  alert("¡Bienvenido de nuevo!");
  closeAuthModal();
  checkSession();
}

function handleRegister(e) {
  e.preventDefault();
  // Recoger datos incluyendo WhatsApp
  const name = document.getElementById("regName").value;
  const phone = document.getElementById("regPhone").value;

  // Guardar cookie por 48 horas
  setCookie("hormiguero_user", name.split(" ")[0], 48);

  alert(`¡Cuenta creada para ${name}! (WhatsApp: ${phone})`);
  closeAuthModal();
  checkSession();
}

function handleForgot(e) {
  e.preventDefault();
  alert("Se ha enviado un enlace de recuperación a tu correo.");
  switchAuthView("login");
}

function handleLogout() {
  if (confirm("¿Deseas cerrar sesión?")) {
    deleteCookie("hormiguero_user");
    checkSession();
  }
}

// Lógica de Documentos Legales (Markdown)
function openLegal(docType, title) {
  const modal = document.getElementById("legalModal");
  const contentDiv = document.getElementById("legalContent");
  const titleDiv = document.getElementById("legalTitle");

  titleDiv.innerText = title;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  try {
    const markdown = LEGAL_CONTENT[docType];
    console.log(`Cargando documento legal: ${docType}`, markdown);
    if (!markdown) throw new Error("Documento no encontrado");
    contentDiv.innerHTML = marked.parse(markdown);
  } catch (error) {
    console.error("Error al cargar documento legal:", error);
    contentDiv.innerHTML = `<div class="text-center py-10">
      <i class="fas fa-exclamation-triangle text-amber-500 text-3xl"></i>
      <p class="text-stone-600">Error al cargar el documento.</p>
    </div>`;
  }
}

function closeLegalModal() {
  document.getElementById("legalModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Cerrar modal al hacer click fuera
window.onclick = function (event) {
  const legalModal = document.getElementById("legalModal");
  const authModal = document.getElementById("authModal");
  const serviceModal = document.getElementById("serviceModal");
  if (event.target == legalModal) closeLegalModal();
  if (event.target == authModal) closeAuthModal();
  if (event.target == serviceModal) closeModal();
};

// Funciones del Modal de Autenticación
function openAuthModal(view = "login") {
  document.getElementById("authModal").classList.remove("hidden");
  switchAuthView(view);
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  document.getElementById("authModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function switchAuthView(view) {
  // Ocultar todas las vistas
  document.getElementById("auth-login").classList.add("hidden");
  document.getElementById("auth-signup").classList.add("hidden");
  document.getElementById("auth-forgot").classList.add("hidden");

  // Mostrar la vista seleccionada
  document.getElementById("auth-" + view).classList.remove("hidden");
}

// Add this new function to fetch from Firebase
async function loadStoredConvocatorias() {
  try {
    const response = await fetch(`${API_BASE}/api/store-data?limit=25`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch stored data");
    }

    const result = await response.json();

    if (result.success && result.data && result.data.length > 0) {
      return result.data;
    }

    return [];
  } catch (error) {
    console.error("Error loading stored convocatorias:", error);
    return [];
  }
}
