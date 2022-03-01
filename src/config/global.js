export default {
  global: {
    componenteFormativo:
      'Administración y normativa de registros de información',
    descripcionCurso:
      'Los sistemas de información logística sirven para unir datos involucrados con una o varias ocupaciones en la cadena de abastecimiento o procesos logísticos, en tiempo real. Se almacenan y entregan por medio de gráficos dinámicos, reportes o informes, cuando el departamento logístico lo necesita y este paralelamente lo comparte, cumpliendo con normativa de tratamiento de datos vigente, hasta llegar al cliente final.',
    imagenBannerPrincipal: require('@/assets/curso/banner_principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo_banner_principal.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estadística descriptiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Medidas de tendencia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos estadísticos ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instrumentos de validación ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Confidencialidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Normativa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Habeas Data',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de análisis de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Planeación estratégica',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Proyección de mercado ',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Dozo, D. & Martínez Quijano, P. (2013). Glosario Iberoamericano de Protección de Datos.',
      link: 'https://www.habeasdat.com/GLOSARIO.pdf',
    },
    {
      referencia:
        'Escuder, R. & Santiago, J. (1995). Estadística aplicada. Economía y Ciencias Sociales. Valencia: Tirant lo Blanch.',
    },
    {
      referencia:
        'Ley 1581 de 2012. Marco general de la protección de los datos personales en Colombia. Por el cual se reglamenta parcialmente la Ley 1581 de 2012.',
      link:
        'https://www.mintic.gov.co/arquitecturati/630/articles-9011_documento.pdf',
    },
    {
      referencia:
        'Secretaria del Senado. (2021). Artículo 15 y 79 de la Constitución Política Nacional.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html#15',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'Es el proceso de recopilación, modelización y análisis de datos para extraer información que sirva de apoyo a la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Un almacén de datos diseñado de forma organizada, que facilita la búsqueda de la información que se necesita.',
    },
    {
      termino: 'Campo',
      significado:
        'Elemento de un registro de base de datos en el que se almacena una información. Por ejemplo, "nombre" en una libreta de direcciones electrónica.',
    },
    {
      termino: 'Campo clave',
      significado:
        'Identificador único de un registro de la base de datos o de una entrada de la tabla.',
    },
    {
      termino: 'Hoja de cálculo',
      significado:
        'Espacio o área de trabajo que permite gestionar datos los cuales hacen parte de la información que se almacena en el libro.',
    },
    {
      termino: 'Instrumento de evaluación',
      significado:
        'Evalúa investigación ya sea preguntas, datos estadísticos o cualquier fuente para validar confiabilidad',
    },
    {
      termino: 'Transferencia de datos',
      significado:
        'Cuando el responsable del tratamiento de los datos con presencia en Colombia envía o transfiere los datos personales a un receptor que también tiene la connotación de ser responsable del manejo de datos a otro lugar al interior del país o al exterior.',
    },
  ],
  complementario: [
    {
      texto: 'Microsoft. (2021). Más información sobre la validación de datos.',
      tipo: 'Artículo',
      link:
        'https://support.microsoft.com/es-es/office/m%C3%A1s-informaci%C3%B3n-sobre-la-validaci%C3%B3n-de-datos-f38dee73-9900-4ca6-9301-8a5f6e1f0c4c ',
    },
    {
      texto:
        'Superintendencia de Industria y Comercio. (2021). Protección de Datos Personales.',
      tipo: 'Artículo',
      descarga:
        'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
    },
    {
      texto:
        'Carrillo, M. (2020). Introducción a la Hoja Electrónica de Calculo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xthhxRF7Epo',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
