// Predefined categories for convocatorias filter
const CATEGORIES = [
  "Call for proposals",
  "Grants / Subvenciones",
  "Donaciones",
  "Technical assistance",
  "Request for Application (RFA)",
  "Portafolio de estímulos",
  "Subvenciones",
  "Cofinanciación",
  "Capital semilla",
  "Banco de proyectos",
  "Fomento",
  "Investigación",
  "Sistema General de Regalías",
  "Licitación pública",
  "Mínima cuantía",
  "Selección abreviada",
  "Concurso de méritos",
  "Términos de referencia (TDR)",
  "Pliego de condiciones",
  "Gestión del conocimiento",
  "Ambiente",
  "Energía",
  "Paz",
  "Sociedad",
  "Salud",
  "Minería",
  "Suelos",
];

// keep the main one as the last for script to show the main website
const SOURCES = [
  // // Notes:secop2 doesn't have access to paging
  // {
  //   id: "secop2",
  //   url: "https://community.secop.gov.co/Public/App/AnnualPurchasingPlanManagementPublic/Index?currentLanguage=es-CO&Page=login&Country=CO&SkinName=CCE",
  //   name: "SECOP II",
  // },
  // // Notes: needs the page with convocatorias
  // {
  //   id: "colombiacompra",
  //   url: "https://www.colombiacompra.gov.co/",
  //   name: "Colombia Compra Eficiente",
  // },

  // // Ministerios y entidades nacionales
  // // Notes: needs the page with convocatorias
  // {
  //   id: "vicepresidencia",
  //   url: "https://www.vicepresidencia.gov.co/prensa/Paginas/convocatorias.aspx",
  //   name: "Vicepresidencia - Convocatorias",
  // },
  // // Notes: needs the page with convocatorias
  // {
  //   id: "minjusticia",
  //   url: "https://www.minjusticia.gov.co/programas-co",
  //   name: "Ministerio de Justicia",
  // },
  // {
  //   id: "mindefensa",
  //   url: "https://www.mindefensa.gov.co/transparencia/contratacion",
  //   name: "Ministerio de Defensa",
  // },
  // {
  //   id: "mininterior",
  //   url: "https://www.mininterior.gov.co/banco-de-iniciativas-para-las-comunidades/",
  //   name: "Ministerio del Interior - Banco de Iniciativas",
  // },
  // {
  //   id: "cancilleria",
  //   url: "https://www.cancilleria.gov.co/academia-diplomatica",
  //   name: "Cancillería - Academia Diplomática",
  // },
  // {
  //   id: "minhacienda",
  //   url: "https://www.minhacienda.gov.co/entidad/oferta-de-empleo-2022",
  //   name: "Ministerio de Hacienda",
  // },
  // {
  //   id: "minenergia",
  //   url: "https://fenoge.gov.co/convocatorias/",
  //   name: "Ministerio de Minas y Energía - FENOGE",
  // },
  // {
  //   id: "mincit",
  //   url: "https://www.innpulsacolombia.com/convocatorias",
  //   name: "MinCIT - iNNpulsa Colombia",
  // },
  // {
  //   id: "mintic",
  //   url: "https://mintic.gov.co/micrositios/convocatorias/",
  //   name: "MinTIC - Convocatorias",
  // },
  // {
  //   id: "mincultura",
  //   url: "https://cultured.gov.co/",
  //   name: "MinCultura - CultuRed",
  // },
  // {
  //   id: "minagricultura",
  //   url: "https://www.minagricultura.gov.co/tramites-servicios/Paginas/default.aspx",
  //   name: "Ministerio de Agricultura",
  // },
  // {
  //   id: "minambiente",
  //   url: "https://www.minambiente.gov.co/convocatorias/",
  //   name: "Ministerio de Ambiente",
  // },
  // {
  //   id: "mintransporte",
  //   url: "https://mintransporte.gov.co/galeria/1149/convocatorias/",
  //   name: "Ministerio de Transporte",
  // },
  // {
  //   id: "minvivienda",
  //   url: "https://minvivienda.gov.co/convocatorias",
  //   name: "Ministerio de Vivienda",
  // },
  // {
  //   id: "mineducacion",
  //   url: "https://www.mineducacion.gov.co/portal/seccion/Convocatorias/",
  //   name: "Ministerio de Educación",
  // },
  // {
  //   id: "mintrabajo",
  //   url: "https://www.mintrabajo.gov.co/empleo-y-pensiones/empleo",
  //   name: "Ministerio de Trabajo",
  // },
  // {
  //   id: "minsalud",
  //   url: "https://www.minsalud.gov.co/Paginas/Convocatorias-y-avisos.aspx",
  //   name: "Ministerio de Salud",
  // },
  // pages 1–120
  // ...Array.from({ length: 120 }, (_, i) => ({
  ...Array.from({ length: 9 }, (_, i) => ({
    id: "minciencias",
    url: `https://minciencias.gov.co/convocatorias/todas?page=${i + 1}`,
    name: "Minciencias",
  })),
  // // Notes: working fine
  {
    id: "minciencias",
    url: "https://minciencias.gov.co/convocatorias/todas",
    name: "Minciencias",
  },
  // {
  //   id: "prosperidadsocial",
  //   url: "https://prosperidadsocial.gov.co/convocatorias/",
  //   name: "Prosperidad Social",
  // },
  // {
  //   id: "sgr",
  //   url: "https://www.sgr.gov.co/",
  //   name: "Sistema General de Regalías",
  // },

  // // Cooperación internacional y ONGs
  // {
  //   id: "apc",
  //   url: "https://www.apccolombia.gov.co/index.php/modalidades-de-cooperacion/convocatorias",
  //   name: "APC Colombia",
  // },
  // {
  //   id: "usaid",
  //   url: "https://www.grants.gov/",
  //   name: "USAID / Grants.gov",
  // },
  // {
  //   id: "ue_colombia",
  //   url: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home",
  //   name: "Unión Europea - Funding & Tenders",
  // },
  // {
  //   id: "onu_colombia",
  //   url: "https://colombia.un.org/es/jobs",
  //   name: "ONU Colombia - Empleos y convocatorias",
  // },

  // // Entidades privadas y cámaras de comercio
  // {
  //   id: "fundacion_bolivar_davivienda",
  //   url: "https://www.fundacionbolivardavivienda.org/",
  //   name: "Fundación Bolívar Davivienda",
  // },
  // {
  //   id: "fundacion_corona",
  //   url: "https://www.fundacioncorona.org/",
  //   name: "Fundación Corona",
  // },
  // {
  //   id: "ccb_bogota",
  //   url: "https://www.ccb.org.co/camara-comercio-bogota/nosotros/convocatorias",
  //   name: "Cámara de Comercio de Bogotá",
  // },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow_cur=2",
    name: "Ministerio de Igualdad y Equidad",
  },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_ufow_cur=3",
    name: "Ministerio de Igualdad y Equidad",
  },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias",
    name: "Ministerio de Igualdad y Equidad",
  },
  // {
  //   id: "cc_bucaramanga",
  //   url: "https://www.camaradirecta.com/convocatorias-basicas",
  //   name: "Cámara de Comercio de Bucaramanga",
  // },
  // {
  //   id: "cc_medellin",
  //   url: "https://ccmpc.org.co/category/trabaja-con-nosotros/",
  //   name: "Cámara de Comercio de Medellín",
  // },
  // {
  //   id: "cc_cali",
  //   url: "https://www.ccc.org.co/programas-y-servicios-empresariales/",
  //   name: "Cámara de Comercio de Cali",
  // },
  // {
  //   id: "cc_barranquilla",
  //   url: "https://www.camarabaq.org.co/pv/nosotros/proveedores",
  //   name: "Cámara de Comercio de Barranquilla",
  // },
  // {
  //   id: "cc_ibague",
  //   url: "https://ccibague.org/convocatorias/",
  //   name: "Cámara de Comercio de Ibagué",
  // },
  // {
  //   id: "cc_cucuta",
  //   url: "https://www.cccucuta.org.co/convocatorias",
  //   name: "Cámara de Comercio de Cúcuta",
  // },
  // {
  //   id: "cc_cartagena",
  //   url: "https://www.cccartagena.org.co/",
  //   name: "Cámara de Comercio de Cartagena",
  // },
  // {
  //   id: "cc_santamarta",
  //   url: "https://www.ccsm.org.co/es/contratacion-CPG760",
  //   name: "Cámara de Comercio de Santa Marta",
  // },
  // {
  //   id: "cc_villavicencio",
  //   url: "https://www.ccv.org.co/es/contratacion-PG146",
  //   name: "Cámara de Comercio de Villavicencio",
  // },
  // {
  //   id: "cc_pereira",
  //   url: "https://www.camarapereira.org.co/es/vacantes-empresa-PG766",
  //   name: "Cámara de Comercio de Pereira",
  // },
  // {
  //   id: "bancoldex",
  //   url: "https://www.bancoldex.com/es/convocatorias",
  //   name: "Bancóldex - Convocatorias",
  // },
  {
    id: "innpulsa",
    url: "https://convocatorias.innpulsacolombia.com/",
    name: "iNNpulsa Colombia",
  },
  // {
  //   id: "confecamaras",
  //   url: "https://confecamaras.org.co/conozca-la-red-de-camaras-de-comercio/",
  //   name: "Confecámaras",
  // },

  //   // Cooperación y Emprendimiento
  //   // // {
  //   // //   id: "apc",
  //   // //   url: "https://www.apccolombia.gov.co/modalidades-de-cooperacion/convocatorias",
  //   // //   name: "APC Colombia",
  //   // //   category: "Cooperación y Emprendimiento",
  //   // // },
  //   // // pages 1–40
  //   // ...Array.from({ length: 40 }, (_, i) => ({
  //   //   id: "apc",
  //   //   url: `https://portalservicios-apccolombia.gov.co/externo/Convocatoria?page=${i + 1}`,
  //   //   name: "APC Colombia",
  //   //   category: "Cooperación y Emprendimiento",
  //   // })),
  //   // // // // // {
  //   // // // // //   id: "apc",
  //   // // // // //   url: "https://portalservicios-apccolombia.gov.co/Externo/Convocatoria",
  //   // // // // //   name: "APC Colombia",
  //   // // // // //   category: "Cooperación y Emprendimiento",
  //   // // // // // },
];

// --- ESTADO GLOBAL ---
let currentUser = null;
let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let allConvocatorias = [];
let currentConvocatorias = [];
const API_BASE = "https://hormiguero-lab-api-proxy.vercel.app";

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

  // Usar la lista predefinida de categorías
  CATEGORIES.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Obtener fuentes únicas de los datos actuales
  const dataToUse =
    currentConvocatorias.length > 0 ? currentConvocatorias : mockConvocatorias;

  const uniqueFuentes = [
    ...new Set(dataToUse.map((c) => c.fuente || c.entidad)),
  ].sort();

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
  applyFilters();
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
  currentConvocatorias = [];

  console.log("🚀 Starting harvest process...");
  console.log(`📊 Processing ${SOURCES.length} sources`);

  try {
    const CRAWL_BATCH_SIZE = 2;
    const allResults = [];

    // STEP 1: Crawl URLs in batches
    for (let i = 0; i < SOURCES.length; i += CRAWL_BATCH_SIZE) {
      const batch = SOURCES.slice(i, i + CRAWL_BATCH_SIZE);
      const urls = batch.map((s) => s.url);

      console.log(
        `🕷️ Crawl Batch ${Math.floor(i / CRAWL_BATCH_SIZE) + 1}/${Math.ceil(SOURCES.length / CRAWL_BATCH_SIZE)}: ${urls.length} URLs`,
      );

      const crawlRes = await fetch(`${API_BASE}/api/crawl-batch-urls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls }),
      });

      const crawlData = await crawlRes.json();

      if (crawlData.success && crawlData.results) {
        const successCount = crawlData.results.filter((r) => r.success).length;
        console.log(
          `✅ Crawled ${successCount}/${crawlData.results.length} URLs successfully`,
        );
        allResults.push(...crawlData.results);
      } else {
        console.error("❌ Crawl batch failed:", crawlData);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    console.log(`📄 Total crawl results: ${allResults.length}`);

    // STEP 2: Filter successful markdown results
    const markdownBatch = allResults
      .filter((r) => r.success && r.markdown)
      .map((r) => ({ url: r.url, markdown: r.markdown }));

    console.log(
      `📝 Valid markdown content: ${markdownBatch.length}/${allResults.length}`,
    );

    if (markdownBatch.length === 0) {
      console.warn("⚠️ No markdown content to send to AI");
      emptyState.classList.remove("hidden");
      return;
    }

    // Group by source for logging
    const sourceBreakdown = {};
    markdownBatch.forEach((m) => {
      const source = SOURCES.find((s) => s.url === m.url);
      if (source) {
        sourceBreakdown[source.name] = (sourceBreakdown[source.name] || 0) + 1;
      }
    });
    console.log("📊 Sources breakdown:", sourceBreakdown);

    // STEP 3: Process AI in batches
    const AI_BATCH_SIZE = 1;
    const totalAIBatches = Math.ceil(markdownBatch.length / AI_BATCH_SIZE);

    console.log(`🤖 Will process ${totalAIBatches} AI batches`);

    for (let i = 0; i < markdownBatch.length; i += AI_BATCH_SIZE) {
      const aiBatch = markdownBatch.slice(i, i + AI_BATCH_SIZE);
      const batchNum = Math.floor(i / AI_BATCH_SIZE) + 1;

      console.log(
        `🤖 AI Batch ${batchNum}/${totalAIBatches}: Processing ${aiBatch.length} sources`,
      );
      console.log(
        `📄 URLs in this batch:`,
        aiBatch.map((a) => a.url),
      );

      const aiRes = await fetch(`${API_BASE}/api/ask-ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markdownBatch: aiBatch }),
      });

      if (!aiRes.ok) {
        console.error(
          `❌ AI Batch ${batchNum} failed with status ${aiRes.status}`,
        );
        continue;
      }

      let aiData = await aiRes.json();

      if (aiData.convocatorias && Array.isArray(aiData.convocatorias)) {
        console.log(
          `✅ AI Batch ${batchNum} extracted: ${aiData.convocatorias.length} convocatorias`,
        );

        // Log which sources returned results
        const batchSources = {};
        aiData.convocatorias.forEach((conv) => {
          batchSources[conv.fuente] = (batchSources[conv.fuente] || 0) + 1;
        });
        console.log(`📊 Batch ${batchNum} breakdown by source:`, batchSources);

        allConvocatorias.push(...aiData.convocatorias);
      } else {
        console.warn(`⚠️ AI Batch ${batchNum} returned no convocatorias`);
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log(`🎉 TOTAL EXTRACTED: ${allConvocatorias.length} convocatorias`);

    // Log final breakdown by source
    const finalBreakdown = {};
    allConvocatorias.forEach((conv) => {
      finalBreakdown[conv.fuente] = (finalBreakdown[conv.fuente] || 0) + 1;
    });
    console.log("📊 FINAL breakdown by source:", finalBreakdown);

    if (allConvocatorias.length > 0) {
      currentConvocatorias = allConvocatorias;
      showToast(
        "¡Sincronización exitosa!",
        `Se encontraron ${allConvocatorias.length} convocatorias. Revisa la consola para detalles.`,
        6000,
        "success",
      );
    } else {
      console.warn("⚠️ No convocatorias extracted from any source");
      currentConvocatorias = [];
    }

    renderResults(currentConvocatorias);
    initializeFilters();
  } catch (error) {
    console.error("❌ Error in startHarvest:", error);
    emptyState.classList.remove("hidden");

    showToast(
      "Error de sincronización",
      "No se pudo conectar con el servidor. Revisa la consola para más detalles.",
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
  const count = document.getElementById("totalCount");
  const ctaBlock = document.getElementById("register-cta");
  const paginationBlock = document.getElementById("pagination-controls");
  const emptyState = document.getElementById("emptyState");

  grid.innerHTML = "";
  count.innerText = data.length.toString().padStart(2, "0");

  if (data.length === 0) {
    emptyState.classList.remove("hidden");
    ctaBlock.classList.add("hidden");
    paginationBlock.classList.add("hidden");

    showToast(
      "Sin resultados",
      "Intenta ajustar los filtros o limpiarlos para ver más opciones",
      5000,
    );
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  let displayData = [];
  if (!currentUser) {
    displayData = data.slice(0, ITEMS_PER_PAGE);
    ctaBlock.classList.remove("hidden");
    paginationBlock.classList.add("hidden");
  } else {
    ctaBlock.classList.add("hidden");
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages) currentPage = 1;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    displayData = data.slice(start, start + ITEMS_PER_PAGE);

    paginationBlock.classList.toggle("hidden", totalPages <= 1);
    renderPaginationControls(totalPages);
  }

  displayData.forEach((item) => {
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
                    <div class="flex items-center gap-2 mb-2">
                        <span class="status-pill ${statusClass}">${item.estado || "abierta"}</span>
                        ${categoryBadge}
                    </div>
                    <div class="flex items-center gap-2 border-b border-stone-50 pb-2">
                        <span class="text-[10px] font-black uppercase text-stone-300">Fuente</span>
                        <span class="text-xs font-bold text-earth-clay text-right">${item.fuente}</span>
                    </div>
                    <div class="pt-1 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-black uppercase text-stone-300">Rec. Disponibles</span>
                            <span class="text-[11px] font-bold text-earth-accent text-right">${item.monto || "No espec."}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-black uppercase text-stone-300">Cierre</span>
                            <span class="text-[11px] font-semibold text-stone-600 text-right">${item.fechaCierre || "TBD"}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-black uppercase text-stone-300">Publicado</span>
                            <span class="text-[11px] font-semibold text-stone-600 text-right">${item.fechaPublicacion || "N/A"}</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 space-y-4">
                    <h3 class="serif text-3xl font-bold text-stone-900 leading-tight">${item.titulo}</h3>
                    <p class="text-stone-500 leading-relaxed text-sm">${item.descripcion || "Sin descripción detallada."}</p>
                    <div class="pt-6 flex items-center justify-end border-t border-stone-50">
                        <a href="${item.enlace || "#"}" target="_blank" class="text-earth-dark font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                            VER DETALLES <i class="fas fa-arrow-right text-xs"></i>
                        </a>
                    </div>
                </div>
            `;
    grid.appendChild(card);
  });
}

function renderPaginationControls(totalPages) {
  const container = document.getElementById("pagination-controls");
  container.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.className = "pagination-btn";
  prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    currentPage--;
    applyFilters();
  };
  container.appendChild(prevBtn);

  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, start + 2);
  if (end - start < 2) start = Math.max(1, end - 2);

  for (let i = start; i <= end; i++) {
    const btn = document.createElement("button");
    btn.className = `pagination-btn ${i === currentPage ? "active" : ""}`;
    btn.innerText = i;
    btn.onclick = () => {
      currentPage = i;
      applyFilters();
    };
    container.appendChild(btn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.className = "pagination-btn";
  nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    currentPage++;
    applyFilters();
  };
  container.appendChild(nextBtn);
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

// ===================================
// FIREBASE AUTHENTICATION LOGIC
// ===================================

// Check auth state on page load
window.addEventListener("DOMContentLoaded", () => {
  if (typeof initializeSources === "function") initializeSources();

  if (typeof window.firebaseAuthState === "function") {
    window.firebaseAuthState(window.firebaseAuth, async (user) => {
      if (user) {
        // User is signed in
        const token = await user.getIdToken();

        // Verify and get full user data from backend
        try {
          const response = await fetch(`${API_BASE}/api/auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "verify-token",
              token: token,
            }),
          });

          const data = await response.json();

          if (data.success) {
            currentUser = data.user;
            updateUIForLoggedInUser(currentUser);
            console.log("✅ Usuario autenticado:", currentUser.email);
          }
        } catch (error) {
          console.error("Error verificando token:", error);
        }
      } else {
        // User is signed out
        currentUser = null;
        updateUIForLoggedOutUser();
      }
    });
  }
});

// Update UI for logged in user
function updateUIForLoggedInUser(user) {
  const btn = document.getElementById("nav-auth-btn");
  if (btn) {
    const firstName = user.name
      ? user.name.split(" ")[0]
      : user.email.split("@")[0];
    btn.innerHTML = `${firstName} <i class="fas fa-sign-out-alt"></i>`;
    btn.onclick = handleLogout;
    btn.classList.add("bg-earth-clay");
  }
  renderResults(currentConvocatorias);

  showToast(
    `¡Bienvenido, ${firstName}!`,
    "", // `Tier: ${user.tier.toUpperCase()} | Solicitudes: ${user.requestCount}/${user.maxRequests}`,
    4000,
    "success",
  );
}

// Update UI for logged out user
function updateUIForLoggedOutUser() {
  const btn = document.getElementById("nav-auth-btn");
  if (btn) {
    btn.innerHTML = '<i class="fas fa-user"></i> Acceder';
    btn.onclick = () => openAuthModal("login");
    btn.classList.remove("bg-earth-clay");
  }
}

// ===== REGISTER =====
async function handleRegister(e) {
  e.preventDefault();

  const name = document.getElementById("regName").value;
  const phone = document.getElementById("regPhone").value;
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  try {
    // Call backend to create user
    const response = await fetch(`${API_BASE}/api/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "register",
        email,
        password,
        name,
        phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al registrar usuario");
    }

    // Sign in with custom token
    await window.firebaseSignInCustom(window.firebaseAuth, data.token);

    closeAuthModal();

    showToast(
      "¡Cuenta creada exitosamente!",
      `Bienvenido a Hormiguero Lab, ${name}`,
      5000,
      "success",
    );

    // Reset form
    e.target.reset();
  } catch (error) {
    console.error("Error en registro:", error);
    showToast("Error al crear cuenta", error, 6000, "error");
  }
}

// ===== LOGIN =====
async function handleLogin(e) {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  try {
    // Sign in with Firebase
    await window.firebaseSignIn(window.firebaseAuth, email, password);

    closeAuthModal();

    // Auth state listener will handle UI update
  } catch (error) {
    console.error("Error en login:", error);

    let errorMessage = "Credenciales incorrectas";
    if (error.code === "auth/user-not-found") {
      errorMessage = "Usuario no encontrado";
    } else if (error.code === "auth/wrong-password") {
      errorMessage = "Contraseña incorrecta";
    } else if (error.code === "auth/too-many-requests") {
      errorMessage = "Demasiados intentos. Intenta más tarde.";
    }

    showToast("Error al iniciar sesión", errorMessage, 6000, "error");
  }
}

// ===== LOGOUT =====
async function handleLogout() {
  if (confirm("¿Deseas cerrar sesión?")) {
    try {
      await window.firebaseSignOut(window.firebaseAuth);

      showToast("Sesión cerrada", "Hasta pronto", 3000, "info");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      showToast("Error", "No se pudo cerrar sesión", 4000, "error");
    }
  }
}

// ===== FORGOT PASSWORD =====
async function handleForgot(e) {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value;

  try {
    // Call backend to generate reset link
    const response = await fetch(`${API_BASE}/api/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "send-password-reset",
        email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al enviar enlace");
    }

    showToast(
      "¡Enlace enviado!",
      "Revisa tu correo para restablecer tu contraseña",
      7000,
      "success",
    );

    switchAuthView("login");
    e.target.reset();
  } catch (error) {
    console.error("Error al recuperar contraseña:", error);
    showToast("Error", error.message, 6000, "error");
  }
}

function checkSession() {
  if (currentUser) {
    handleLogout(); // User is logged in
  } else {
    openAuthModal("login"); // User is logged out
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
  const limit = 25;
  const estado = "";
  try {
    const response = await fetch(
      `${API_BASE}/api/store-data?limit=${limit}&estado=${estado}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

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
