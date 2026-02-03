const SOURCES = [
  // Ciencia y Tecnología
  {
    id: "minciencias",
    url: "https://minciencias.gov.co/convocatorias",
    name: "Minciencias",
    category: "Ciencia y Tecnología",
  },
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

  // // Cooperación y Emprendimiento
  {
    id: "apc",
    url: "https://www.apccolombia.gov.co/modalidades-de-cooperacion/convocatorias",
    name: "APC Colombia",
    category: "Cooperación y Emprendimiento",
  },
  {
    id: "innpulsa",
    url: "https://www.innpulsacolombia.com/convocatorias",
    name: "INNpulsa",
    category: "Cooperación y Emprendimiento",
  },
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
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias",
    name: "MinIgualdad",
    category: "Vivienda y Social",
  },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow_cur=2",
    name: "MinIgualdad",
    category: "Vivienda y Social",
  },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow_cur=3",
    name: "MinIgualdad",
    category: "Vivienda y Social",
  },

  // // Gobiernos Locales
  // {
  //   id: "bogota",
  //   url: "https://bogota.gov.co/mi-ciudad/desarrollo-economico",
  //   name: "Bogotá",
  //   category: "Gobiernos Locales",
  // },
  // {
  //   id: "medellin",
  //   url: "https://www.medellin.gov.co",
  //   name: "Medellín",
  //   category: "Gobiernos Locales",
  // },
  // {
  //   id: "cali",
  //   url: "https://intranet.cali.gov.co/convocatorias-internas-2025/",
  //   name: "Cali",
  //   category: "Gobiernos Locales",
  // },
  // {
  //   id: "cartagena",
  //   url: "https://www.cartagena.gov.co/Transparencia/Convocatorias",
  //   name: "Cartagena",
  //   category: "Gobiernos Locales",
  // },
  // {
  //   id: "antioquia",
  //   url: "https://www.antioquiatic.edu.co",
  //   name: "Antioquia",
  //   category: "Gobiernos Locales",
  // },
  // {
  //   id: "magdalena",
  //   url: "https://www.gobernaciondelmagdalena.gov.co/convocatorias/",
  //   name: "Magdalena",
  //   category: "Gobiernos Locales",
  // },

  // // Universidades
  // {
  //   id: "ude-medellin",
  //   url: "https://investigacion.udemedellin.edu.co/apoyo-al-investigador/convocatorias/",
  //   name: "U. de Medellín",
  //   category: "Universidades",
  // },
  // {
  //   id: "u-caldas",
  //   url: "https://www.ucaldas.edu.co/portal/convocatorias/",
  //   name: "U. de Caldas",
  //   category: "Universidades",
  // },
  // {
  //   id: "sector-universitario",
  //   url: "https://www.universidad.edu.co/bolsa-de-empleo-en-el-sector-universitario/",
  //   name: "Sector Universitario",
  //   category: "Universidades",
  // },
];

// Unified data source for convocatorias
let allConvocatorias = [];
let currentConvocatorias = []; // Active data source (mock or real)

// Mock convocatorias array to display until button is pressed
const mockConvocatorias = [
  {
    titulo: "Sabiduría que transforma territorio",
    entidad: "MinIgualdad",
    descripcion:
      "Convocatoria dirigida a hombres y mujeres mayores de 60 años que tengan en marcha proyectos culturales, artísticos, deportivos, ambientales o productivos. Ofrece apoyo en elementos e insumos por un valor de hasta 20 millones de pesos para iniciativas que generen impacto positivo en sus comunidades.",
    fechaCierre: "2026-01-23",
    enlace:
      "https://fupad.org/aviso-de-manifestacion-de-interes-no-028-de-2026/",
    monto: "20000000",
    requisitos:
      "Ser mayor de 60 años, tener proyecto cultural, artístico, deportivo, ambiental o productivo en marcha",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo:
      "Convocatoria de organizaciones comunitarias para cuidado de personas mayores",
    entidad: "MinIgualdad",
    descripcion:
      "Dirigida a organizaciones sociales sin ánimo de lucro que trabajen en el fortalecimiento de acciones de cuidado y atención a personas mayores. Se entregarán materiales e insumos por valor de hasta 55 millones de pesos a 53 organizaciones del país.",
    fechaCierre: "2026-01-23",
    enlace: "https://fupad.org/manifestacion-de-interes/",
    monto: "55000000",
    requisitos:
      "Ser organización social sin ánimo de lucro, trabajar en cuidado y atención a personas mayores",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo: "Capacidad que emprende",
    entidad: "MinIgualdad",
    descripcion:
      "Apoyará 160 iniciativas productivas de personas con discapacidad o sus familias. Ofrece acompañamiento técnico especializado, capitalización en activos productivos por hasta 5 millones de pesos y formación integral durante ocho meses en áreas de gestión operativa, comercial, financiera y de liderazgo.",
    fechaCierre: "2025-11-24",
    enlace: "https://n9.cl/1bl05",
    monto: "5000000",
    requisitos:
      "Unidad productiva con personas con discapacidad o familias, mínimo 1 año de funcionamiento, estar registrada en RLCPD",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo:
      'Primer Encuentro Nacional de Sindicalistas LGBTIQ+ "León Zuleta y Diana Navarro"',
    entidad: "MinIgualdad",
    descripcion:
      "Encuentro para fortalecer liderazgo y visibilizar el posicionamiento y necesidades de sindicalistas de sectores LGBTIQ+ en las organizaciones sindicales. Se realizará los días 13 y 14 de noviembre en Bogotá.",
    fechaCierre: "2025-10-31",
    enlace: "https://forms.office.com/r/NCe8XxkQuS",
    monto: null,
    requisitos: "Ser sindicalista, hacer parte de sectores sociales LGBTIQ+",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo: "Convención Nacional Transfemenina",
    entidad: "MinIgualdad",
    descripcion:
      "Espacio de construcción colectiva de agenda social para personas transfemeninas que refleje sus realidades, necesidades y propuestas, fortaleciendo sus voces y avanzando en reivindicación de derechos.",
    fechaCierre: "2025-10-30",
    enlace: "https://acortar.link/eJRygy",
    monto: null,
    requisitos: "Ser persona transfemenina, mayor de 18 años",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo: "Pre-Encuentros Regionales hacia la II Convención Nacional LGBTIQ+",
    entidad: "MinIgualdad",
    descripcion:
      "Serie de convenciones regionales orientadas a la construcción de una agenda del movimiento social LGBTIQ+. Se realizarán en cinco regiones (Amazonas, Orinoquia, Pacífica, Andina y Caribe) con fechas entre noviembre de 2025.",
    fechaCierre: null,
    enlace:
      "https://forms.office.com/pages/responsepage.aspx?id=yA96gELLr0CgDBnP1DankDgzQ8P7uyJDofX2pvCQLDZUQk9UWTVTMk1VTUMxOEpBMzc2MzRSRVNJOC4u&origin=lprLink&route=shorturl",
    monto: null,
    requisitos:
      "Ser mayor de 18 años, reconocerse como LGBTIQ+, tener aval de organización social o ser representante de espacio LGBTIQ+, residir en el departamento de la región",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo: "Estímulos para el Cambio 2025",
    entidad: "MinIgualdad",
    descripcion:
      "Apoyo en especie otorgado a Barras Tradicionales, filiales barristas, organizaciones y colectivos futboleros. Incluye consolidación organizacional, fortalecimiento de miembros y acompañamiento técnico en actividades de Barrismo Social.",
    fechaCierre: null,
    enlace:
      "https://www.minigualdadyequidad.gov.co/convocatorias/-/asset_publisher/ufow/content/est%C3%ADmulos-para-el-cambio-2025",
    monto: null,
    requisitos:
      "Ser barra tradicional, filial barrista, organización o colectivo futbolero, tener mínimo 2 años de experiencia en Barrismo Social, contar con mínimo 15 integrantes (50% jóvenes 14-28 años)",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo:
      "Promoviendo Paz en los Territorios - Fortalecimiento a las Economías Populares de la Población Afrodescendiente en el Oriente de Cali",
    entidad: "MinIgualdad",
    descripcion:
      "Proyecto para fortalecer las economías populares afrodescendientes, promover la paz territorial y construir condiciones de bienestar para comunidades del oriente de Cali.",
    fechaCierre: null,
    enlace: "https://ee2.minigualdadyequidad.gov.co/x/zWEhKy1a",
    monto: null,
    requisitos:
      "Ser emprendedor/a afrodescendiente del oriente de Cali, estar interesado en fortalecer economía popular",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo:
      "Convocatoria de Selección de Representantes de la Sociedad Civil al Consejo Nacional de Discapacidad",
    entidad: "MinIgualdad",
    descripcion:
      "Convocatoria pública para seleccionar representantes de la sociedad civil ante el Consejo Nacional de Discapacidad. Busca que personas con discapacidad participen directamente en decisiones que afecten sus derechos.",
    fechaCierre: "2025-10-23",
    enlace: "https://acortar.link/UOcBL4",
    monto: null,
    requisitos:
      "Ser organización con personas con discapacidad, cumplir Decreto 1350 de 2018, candidatos con certificado de discapacidad vigente, mayores de edad, nacionalidad colombiana",
    estado: "cerrada",
    categoria: "Vivienda y Social",
    fuente: "MinIgualdad",
  },
  {
    titulo:
      "CONVOCATORIA PARA EL FORTALECIMIENTO DE CAPACIDADES DE CIENCIA, TECNOLOGÍA E INNOVACIÓN EN EL DEPARTAMENTO DE CÓRDOBA (Convocatoria 51)",
    entidad: "Minciencias",
    descripcion:
      "Fortalecer las capacidades de CTeI en Córdoba mediante proyectos de convergencia regional que impulsen productividad y competitividad según vocaciones territoriales.",
    fechaCierre: "2026-02-27",
    enlace:
      "https://minciencias.gov.co/convocatorias/plan-convocatorias-asctei-2025-2026/convocatoria-para-el-fortalecimiento-capacidades",
    monto: "17154450476",
    requisitos:
      "Entidades del SNCTI, universidades, centros de investigación, centros de desarrollo tecnológico",
    estado: "abierta",
    categoria: "Ciencia y Tecnología",
    fuente: "Minciencias",
  },
  {
    titulo:
      "FORTALECIMIENTO Y CREACIÓN DE NUEVOS CENTROS E INSTITUTOS DE INVESTIGACIÓN, CENTROS DE DESARROLLO TECNOLÓGICO Y CENTROS DE CIENCIA (Convocatoria 45)",
    entidad: "Minciencias",
    descripcion:
      "Aumentar la capacidad de investigación de centros existentes y crear nuevos centros de investigación, desarrollo tecnológico y ciencia. Se financiarán 4 proyectos: 1 de creación de centros hasta 140 mil millones y 3 de fortalecimiento hasta 20 mil millones cada uno.",
    fechaCierre: "2026-02-20",
    enlace:
      "https://minciencias.gov.co/convocatorias/plan-convocatorias-asctei-2025-2026/fortalecimiento-y-creacion-nuevos-centros-e",
    monto: "200000000000",
    requisitos:
      "Instituciones de Educación Superior, centros de investigación, centros de desarrollo tecnológico, entidades territoriales, pueden participar individual o en alianza",
    estado: "abierta",
    categoria: "Ciencia y Tecnología",
    fuente: "Minciencias",
  },
  {
    titulo:
      "Convocatoria para la formación de capital humano de alto nivel para las regiones - docentes de establecimientos educativos oficiales de Cundinamarca (Convocatoria 973)",
    entidad: "Minciencias",
    descripcion:
      "Incrementar disponibilidad de capital humano con capacidades de investigación en prácticas pedagógicas en establecimientos educativos oficiales del Departamento de Cundinamarca.",
    fechaCierre: "2026-02-13",
    enlace:
      "https://minciencias.gov.co/convocatorias/formacion-y-vinculacion-capital-humano-alto-nivel/convocatoria-para-la-formacion-3",
    monto: "877800000",
    requisitos:
      "Docentes de establecimientos educativos oficiales de Cundinamarca",
    estado: "abierta",
    categoria: "Ciencia y Tecnología",
    fuente: "Minciencias",
  },
  {
    titulo: "CONVOCATORIA EN INVESTIGACIÓN BÁSICA (Convocatoria 50)",
    entidad: "Minciencias",
    descripcion:
      "Generar nuevo conocimiento en líneas temáticas de ciencias naturales, ciencias sociales y humanidades a través de investigación básica orientada para aportar a comprensión de fenómenos complejos.",
    fechaCierre: "2025-12-16",
    enlace:
      "https://minciencias.gov.co/convocatorias/plan-convocatorias-asctei-2025-2026/convocatoria-investigacion-basica",
    monto: "237398000000",
    requisitos:
      "Instituciones de Educación Superior, Centros/Institutos de Investigación, Centros de Ciencia",
    estado: "cerrada",
    categoria: "Ciencia y Tecnología",
    fuente: "Minciencias",
  },
  {
    titulo:
      "CONVOCATORIA COLOMBIA INTELIGENTE: INFRAESTRUCTURA PARA EL DESARROLLO DE LA INTELIGENCIA ARTIFICIAL (Convocatoria 46)",
    entidad: "Minciencias",
    descripcion:
      "Impulsar infraestructura, desarrollo científico y tecnológico en IA mediante creación y consolidación de capacidades nacionales avanzadas para fortalecer soberanía tecnológica.",
    fechaCierre: "2025-12-16",
    enlace:
      "https://minciencias.gov.co/convocatorias/plan-convocatorias-asctei-2025-2026/convocatoria-colombia-inteligente-infraestructura",
    monto: "630000000000",
    requisitos:
      "Alianzas con mínimo: 1 IES acreditada de alta calidad, 1 actor SNCTI reconocido, 2 entidades territoriales (1 gobernación y 1 alcaldía), 1 empresa nacional constituida legalmente",
    estado: "cerrada",
    categoria: "Ciencia y Tecnología",
    fuente: "Minciencias",
  },
];
// Enhanced error logging system (console-only)
const errorLogger = {
  logs: [],
  addLog: function (source, level, message, details = null) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      source: source,
      level: level, // 'success', 'warning', 'error', 'info'
      message: message,
      details: details,
      category: this.getSourceCategory(source),
    };

    this.logs.push(logEntry);

    // Log to console only (no UI display)
    if (level === "error") {
      console.error(`[ERROR] ${source}: ${message}`, details);
    } else if (level === "warning") {
      console.warn(`[WARNING] ${source}: ${message}`, details);
    } else if (level === "success") {
      console.log(`[SUCCESS] ${source}: ${message}`);
    } else {
      console.log(`[${level.toUpperCase()}] ${source}: ${message}`, details);
    }
  },

  getSourceCategory: function (sourceName) {
    const source = SOURCES.find((s) => s.name === sourceName);
    return source ? source.category : "Unknown";
  },

  getSummary: function () {
    const summary = {
      totalLogs: this.logs.length,
      byLevel: {},
      byCategory: {},
      bySource: {},
    };

    this.logs.forEach((log) => {
      // Count by level
      summary.byLevel[log.level] = (summary.byLevel[log.level] || 0) + 1;

      // Count by category
      summary.byCategory[log.category] =
        (summary.byCategory[log.category] || 0) + 1;

      // Count by source
      summary.bySource[log.source] = (summary.bySource[log.source] || 0) + 1;
    });

    return summary;
  },

  clear: function () {
    this.logs = [];
  },
};

// Función para inicializar las listas de fuentes de forma segura
function initializeSources() {
  const list = document.getElementById("sourceList");
  const footerList = document.getElementById("footerSourceList");

  // Limpiar listas antes de poblar para evitar duplicados en re-render
  if (list) list.innerHTML = "";
  if (footerList) footerList.innerHTML = "";

  // Agrupar fuentes por categoría
  const categories = {};
  SOURCES.forEach((s) => {
    if (!categories[s.category]) {
      categories[s.category] = [];
    }
    categories[s.category].push(s);
  });

  // Mostrar fuentes en el sidebar con categorías
  if (list) {
    Object.keys(categories).forEach((category) => {
      const categoryHeader = document.createElement("div");
      categoryHeader.className =
        "text-[8px] font-bold text-stone-400 uppercase tracking-wider mt-4 mb-2 border-t border-stone-200 pt-4";
      categoryHeader.innerText = category;
      list.appendChild(categoryHeader);

      categories[category].forEach((s) => {
        const tag = document.createElement("span");
        tag.className =
          "bg-stone-100 border border-stone-200 px-3 py-1.5 rounded-lg text-[10px] font-bold text-stone-500 uppercase tracking-tighter hover:bg-stone-200 transition-colors cursor-pointer";
        tag.innerText = s.name;
        tag.title = `${s.name} - ${s.category}`;
        list.appendChild(tag);
      });
    });
  }

  // Mostrar fuentes en el footer con categorías
  if (footerList) {
    Object.keys(categories).forEach((category) => {
      const categoryHeader = document.createElement("li");
      categoryHeader.className =
        "text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-4 mb-2 border-t border-stone-800 pt-4";
      categoryHeader.innerText = category;
      footerList.appendChild(categoryHeader);

      categories[category].forEach((s) => {
        const footerItem = document.createElement("li");
        footerItem.innerHTML = `<a href="${s.url}" target="_blank" class="hover:text-white transition-colors text-sm block py-1">${s.name}</a>`;
        footerList.appendChild(footerItem);
      });
    });
  }
}

window.onload = () => {
  initializeSources();
  // Set up unified data source with mock data initially
  currentConvocatorias = mockConvocatorias;
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

  errorLogger.clear();
  errorLogger.addLog(
    "Sistema",
    "info",
    "Iniciando proceso de cosecha de convocatorias",
    {
      totalSources: SOURCES.length,
      categories: [...new Set(SOURCES.map((s) => s.category))],
    },
  );

  try {
    const result = await fetchAllFromPerplexityBatch(SOURCES);

    if (result && result.length > 0) {
      allConvocatorias = result;
      currentConvocatorias = result; // Switch to real data
      errorLogger.addLog(
        "Sistema",
        "success",
        "Todas las fuentes procesadas exitosamente",
        {
          convocatoriasEncontradas: result.length,
        },
      );
    } else {
      allConvocatorias = [];
      currentConvocatorias = []; // Keep empty array
      errorLogger.addLog(
        "Sistema",
        "warning",
        "No se encontraron convocatorias",
        {
          convocatoriasEncontradas: 0,
        },
      );
    }

    renderResults(currentConvocatorias);
  } catch (error) {
    errorLogger.addLog(
      "Sistema",
      "error",
      "Error crítico en el proceso de cosecha",
      {
        errorType: error.constructor.name,
        errorMessage: error.message,
        stack: error.stack,
      },
    );
    // Ensure empty state is shown on error
    if (emptyState) {
      emptyState.classList.remove("hidden");
    }
  } finally {
    loading.classList.add("hidden");
    btn.disabled = false;
  }
}

async function fetchAllFromPerplexityBatch(sources) {
  try {
    const optionsForFirecrawl = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        urls: sources.map((s) => s.url),
        formats: ["markdown"],
        onlyMainContent: true,
      }),
    };

    const responseFromFirecrawl = await fetch(
      "https://hormiguero-lab-api-proxy.vercel.app/api/get-url-content",
      optionsForFirecrawl,
    );

    if (!responseFromFirecrawl.ok) {
      throw new Error(
        `API Error: ${responseFromFirecrawl.status} ${responseFromFirecrawl.statusText}`,
      );
    }

    const dataFromFirecrawl = await responseFromFirecrawl.json();

    // Feed markdown to Perplexity for JSON extraction
    const markdownContent = dataFromFirecrawl.data
      .map((page) => page.markdown)
      .join("\n\n---\n\n");

    // Prepare new prompt with crawled content
    const prompt = `
Analiza exhaustivamente el siguiente contenido markdown extraído de múltiples fuentes oficiales y extrae TODAS las convocatorias, becas, o oportunidades disponibles.

CONTENIDO A ANALIZAR:
${markdownContent}

Para cada convocatoria encontrada, proporciona un objeto JSON con esta estructura exacta:
{
  "titulo": "nombre completo de la convocatoria",
  "entidad": "nombre de la entidad que ofrece la convocatoria",
  "descripcion": "descripción detallada de qué es y qué ofrece",
  "fechaCierre": "fecha de cierre en formato YYYY-MM-DD o 'cerrada' o null si no está disponible",
  "enlace": "URL directa de la convocatoria si está disponible, sino null",
  "monto": "monto económico, número de vacantes, cupos o beneficios si aplica, sino null",
  "requisitos": "requisitos principales resumidos o null",
  "estado": "abierta/cerrada/finalizada/vigente"
}

INSTRUCCIONES CRÍTICAS:
- Extrae TODAS las convocatorias sin excepciones
- Incluye el enlace único de cada convocatoria siempre que sea posible
- Si hay múltiples convocatorias de la misma entidad, crea objetos separados para cada una
- Incluye convocatorias cerradas pero con información completa disponible
- Extrae cualquier información de fechas, montos o requisitos del markdown

VALIDACIÓN FINAL:
- Devuelve ÚNICAMENTE un array JSON válido y bien formado
- Sin explicaciones, comentarios, citaciones ni texto adicional
- El array debe empezar con [ y terminar con ]
- Cada objeto debe estar separado por coma
- Si el markdown no contiene convocatorias, devuelve un array vacío: []
`;

    const optionsForPerplexity = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "sonar-pro",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
      }),
    };

    const responseFromPerplexity = await fetch(
      "https://hormiguero-lab-api-proxy.vercel.app/api/ask-ai",
      optionsForPerplexity,
    );
    if (!responseFromPerplexity.ok) {
      throw new Error(
        `API Error: ${responseFromPerplexity.status} ${responseFromPerplexity.statusText}`,
      );
    }

    // continue
    const data = await responseFromPerplexity.json();
    const content = data.choices[0].message.content;

    // Extract JSON array from response
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.warn("No JSON array found in response");
      return [];
    }

    const convocatorias = JSON.parse(jsonMatch[0]);

    // Map results back to include category from SOURCES
    return convocatorias.map((conv) => {
      const source = sources.find((s) => s.name === conv.entidad);
      return {
        ...conv,
        categoria: source ? source.category : "Sin categoría",
        fuente: conv.entidad,
      };
    });
  } catch (error) {
    console.error("Error in batch fetch:", error);
    throw error;
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
                        <span class="text-xs font-bold text-stone-400 serif italic">${item.fecha_cierre || "TBD"}</span>
                        <a href="${item.url || "#"}" target="_blank" class="text-earth-dark font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
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

  if (!queryEl || !statusEl || !categoryEl) return;

  const query = queryEl.value.toLowerCase();
  const status = statusEl.value;
  const category = categoryEl.value;

  // Use currentConvocatorias (unified data source) for filtering
  const dataToFilter =
    currentConvocatorias.length > 0 ? currentConvocatorias : mockConvocatorias;

  const filtered = dataToFilter.filter((c) => {
    // Buscar la fuente en SOURCES para obtener la categoría
    const source = SOURCES.find((s) => s.name === c.fuente);
    const sourceCategory = source ? source.category : "";

    const matchesQuery =
      (c.titulo || "").toLowerCase().includes(query) ||
      (c.fuente || "").toLowerCase().includes(query);

    const matchesStatus =
      status === "todos" || (c.estado || "").toLowerCase() === status;

    const matchesCategory = category === "todas" || sourceCategory === category;

    return matchesQuery && matchesStatus && matchesCategory;
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

// Cerrar modal al hacer clic fuera
window.onclick = function (event) {
  const modal = document.getElementById("serviceModal");
  if (event.target == modal) closeModal();
};

window.addEventListener("DOMContentLoaded", () => {
  if (typeof initializeSources === "function") initializeSources();
});
