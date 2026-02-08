const SOURCES = [
  // Ciencia y Tecnología
  // // // // {
  // // // //   id: "minciencias",
  // // // //   url: "https://minciencias.gov.co/convocatorias/todas",
  // // // //   name: "Minciencias",
  // // // //   category: "Ciencia y Tecnología",
  // // // // },
  // // // // // pages 1–120
  // // // // ...Array.from({ length: 120 }, (_, i) => ({
  // // // //   id: "minciencias",
  // // // //   url: `https://minciencias.gov.co/convocatorias/todas?page=${i + 1}`,
  // // // //   name: "Minciencias",
  // // // //   category: "Ciencia y Tecnología",
  // // // // })),
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
  // // // {
  // // //   id: "apc",
  // // //   url: "https://www.apccolombia.gov.co/modalidades-de-cooperacion/convocatorias",
  // // //   name: "APC Colombia",
  // // //   category: "Cooperación y Emprendimiento",
  // // // },
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
    name: "Ministerio de Igualdad y Equidad",
    category: "Vivienda y Social",
  },
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

window.onload = () => {
  initializeSources();
  // Set up unified data source with mock data initially
  currentConvocatorias = mockConvocatorias;
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
    const BATCH_SIZE = 4; // keep low values to avoid timeouts (max 5)
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

      // Small delay between batches
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Now send all results to Perplexity
    const markdownBatch = allResults
      .filter((r) => r.success && r.markdown)
      .map((r) => ({ url: r.url, markdown: r.markdown }));

    if (markdownBatch.length === 0) {
      console.warn("No markdown content to send to AI");
      emptyState.classList.remove("hidden");
      return;
    }

    const AI_BATCH_SIZE = 5; // Process 5 markdowns per AI call

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

      // Small delay between AI calls
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    if (allConvocatorias.length > 0) {
      currentConvocatorias = allConvocatorias;
    } else {
      currentConvocatorias = [];
    }

    renderResults(currentConvocatorias);
    initializeFilters();
  } catch (error) {
    console.error("Error in startHarvest:", error);
    emptyState.classList.remove("hidden");
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

// Cerrar modal al hacer clic fuera
window.onclick = function (event) {
  const modal = document.getElementById("serviceModal");
  if (event.target == modal) closeModal();
};

window.addEventListener("DOMContentLoaded", () => {
  if (typeof initializeSources === "function") initializeSources();
});

function clearFilters() {
  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  const categoryFilter = document.getElementById("categoryFilter");

  if (searchInput) searchInput.value = "";
  if (statusFilter) statusFilter.value = "todos";
  if (categoryFilter) categoryFilter.value = "todas";

  // Ejecutar la lógica de filtrado de script.js para actualizar la UI
  if (typeof applyFilters === "function") {
    applyFilters();
  }
}

// Toast notification function
function showToast(title, message, duration = 7000) {
  // Create toast element
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fas fa-envelope-open-text toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <i class="fas fa-times toast-close"></i>
  `;

  document.body.appendChild(toast);

  // Show toast with animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Close button functionality
  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.onclick = () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  };

  // Auto-remove after duration
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, duration);
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
  );
}
