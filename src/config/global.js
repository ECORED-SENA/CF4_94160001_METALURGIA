export default {
  global: {
    componenteFormativo: 'Metales ferrosos: acero y fundiciones',
    descripcionCurso:
      'El componente formativo aborda los metales ferrosos, en particular, los aceros y fundiciones, explicando sus tipos, características y aplicaciones. Describe la influencia de diversos elementos de aleación en las propiedades del acero y detalla los diferentes tipos de fundiciones, como la blanca, gris, nodular y maleable. Además, se examina el impacto ambiental de la industria siderúrgica y la importancia del reciclaje.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aceros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Influencia de los elementos de aleación en el acero',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aplicaciones de los aceros',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fundiciones',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Aceros',
      referencia:
        'JAES Company Español. (2022). ¿Qué es el acero? Cuando se descubrió, sus tipologías y dónde se utiliza. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=z4JGBx-85hk&ab_channel=JAESCompanyEspa%C3%B1ol',
    },
    {
      tema: 'Aceros',
      referencia:
        'Universidad Nacional de la Plata. (s.f.). Clase 8. Soldadura.',
      tipo: 'Documento',
      link:
        'https://unlp.edu.ar/wp-content/uploads/73/27873/03be3424af308bf57bee6ac2aa169171.pdf',
    },
    {
      tema: 'Influencia de los elementos de aleación en el acero',
      referencia:
        'Ingeniosos. (2023). Diagrama HIERRO CARBONO 😁 Microestructura de los ACEROS. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HB14cBeCVp8&ab_channel=Ingeniosos',
    },
    {
      tema: 'Aplicaciones de los aceros',
      referencia:
        'INITUBE. (2023). Tipos de perfiles de acero que existen y sus aplicaciones. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BgR_PY8gjWQ&ab_channel=INITUBE',
    },
    {
      tema: 'Fundiciones',
      referencia:
        'Metalcomer Ltda. (2016). Proceso de Fundición de Acero - Metalcomer Ltda. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=iEPX797NZZo&ab_channel=MetalcomerLtda.',
    },
  ],
  glosario: [
    {
      termino: 'Aceros inoxidables',
      significado:
        'aceros que contienen cromo y otros elementos que les confieren resistencia a la oxidación y la corrosión.',
    },
    {
      termino: 'Cementación',
      significado:
        'proceso para endurecer la superficie de una pieza de acero, mediante la adición de carbono.',
    },
    {
      termino: 'Colada',
      significado:
        'método de fabricación de piezas metálicas a partir de la fundición y vertido del material en un molde.',
    },
    {
      termino: 'Ductilidad',
      significado:
        'capacidad de un material para deformarse sin romperse, permitiendo que se estire en forma de hilos o alambres.',
    },
    {
      termino: 'Fundición',
      significado:
        'aleación de hierro y carbono que contiene entre 1.76 % y 6.67 % de carbono y se obtiene por colada.',
    },
    {
      termino: 'Influencia',
      significado:
        'es el grado en el cual un elemento de aleación afecta el comportamiento del acero o cambia significativamente sus propiedades.',
    },
    {
      termino: 'Maleabilidad',
      significado:
        'capacidad de un material para ser deformado en láminas delgadas sin romperse.',
    },
    {
      termino: 'Reciclaje',
      significado:
        'proceso mediante el cual se refunde la chatarra de acero en hornos para crear nuevos productos. el acero es infinitamente reciclable.',
    },
    {
      termino: 'Temple',
      significado:
        'proceso controlado de calentamiento, mantenimiento y enfriamiento aplicado a los aceros para obtener una estructura metalográfica más dura.',
    },
    {
      termino: 'Ultra resistente',
      significado:
        'se refiere a las aleaciones de hierro y carbono combinadas con elementos químicos que confieren al acero una resistencia mecánica o dureza superior a la normal.',
    },
  ],
  referencias: [
    {
      referencia: 'Aceros Arequipa. (2016). Procesos de laminación.',
      link: 'http://www.acerosarequipa.com/proceso-de-laminacion.html',
    },
    {
      referencia:
        'Askeland, D. R. (2004). Ciencia e ingeniería de los materiales (4.ª ed.). Thomson.',
      link: '',
    },
    {
      referencia: 'CAP S.A. (2000). InfoAcero.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
