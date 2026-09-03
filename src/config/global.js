export default {
  global: {
    Name: 'Acondicionamiento y control',
    Description:
      'Este componente aborda el acondicionamiento de señales provenientes de sensores, su conversión y representación digital, así como los principios básicos de los sistemas automáticos de control. Se estudian circuitos de acondicionamiento, señales análogas y digitales, conversores análogo-digitales y elementos de control, relacionándolos con aplicaciones básicas de instrumentación y automatización industrial.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Acondicionamiento de señales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conversión y representación de señales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Circuitos básicos para el acondicionamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Principios básicos de sistemas automáticos de control',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Integración de sensores y sistemas electrónicos de control',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/83710210_CF02_DU.pdf',
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
  glosario: [
    {
      termino: 'Acondicionamiento de señales',
      significado:
        'Proceso mediante el cual una señal proveniente de un sensor se adapta para facilitar su adquisición y procesamiento.',
    },
    {
      termino: 'Automatización industrial',
      significado:
        'Aplicación de sistemas tecnológicos para controlar procesos industriales mediante dispositivos electrónicos y sistemas de control.',
    },
    {
      termino: 'Circuito combinatorio',
      significado:
        'Circuito digital cuya salida depende de los estados presentes en sus entradas.',
    },
    {
      termino: 'Compuerta lógica',
      significado:
        'Elemento que procesa señales binarias de acuerdo con una operación lógica determinada.',
    },
    {
      termino: 'Conversor análogo-digital',
      significado:
        'Dispositivo que convierte una señal analógica en una representación digital mediante códigos binarios.',
    },
    {
      termino: 'Divisor de tensión',
      significado:
        'Circuito formado por resistencias que permite obtener una tensión de salida a partir de una tensión de entrada.',
    },
    {
      termino: 'Puente de Wheatstone',
      significado:
        'Circuito utilizado para medir o acondicionar señales asociadas con variaciones de resistencia.',
    },
    {
      termino: 'Sensor',
      significado:
        'Elemento que permite detectar o medir una variable física y generar una señal relacionada con ella.',
    },
  ],
  referencias: [
    {
      referencia:
        'Creus Solé, A. (2011). <em>Instrumentación industrial</em> (8.ª ed.). Marcombo.',
    },
    {
      referencia:
        'Fluke Corporation. (s. f.). <em>Guide to signal conditioning</em>.',
      link: 'https://www.fluke.com/en-us/learn/blog/calibration/signal-conditioning-ensures-measurement-accuracy',
    },
    {
      referencia:
        'National Instruments. (s. f.). <em>Signal conditioning</em>.',
      link: 'https://education.ni.com/teach/resources/953/signal-conditioning',
    },
    {
      referencia:
        'National Instruments. (s. f.). <em>Student projects for measurements and instrumentation</em>.',
      link: 'https://education.ni.com/teach/resources/1014/student-projects-for-measurements-and-instrumentation',
    },
    {
      referencia:
        'National Instruments. (s. f.). <em>Engineer’s guide to the digitization of analog signals</em>.',
      link: 'https://download.ni.com/evaluation/daq/NI_Engineers_Guide_to_Digitization.pdf',
    },
    {
      referencia:
        'National Instruments. (2026). <em>Cómo escoger el hardware DAQ adecuado para su sistema de medidas</em>.',
      link: 'https://www.ni.com/es/shop/data-acquisition/how-to-choose-the-right-daq-hardware-for-your-measurement-system.html',
    },
    {
      referencia:
        'National Instruments. (2026). <em>Ventajas de la conversión analógica a digital Delta-Sigma</em>.',
      link: 'https://www.ni.com/es/shop/data-acquisition/benefits-of-delta-sigma-analog-to-digital-conversion.html',
    },
    {
      referencia:
        'Pallàs Areny, R. (2005). <em>Sensores y acondicionadores de señal</em> (4.ª ed.). Marcombo.',
    },
    {
      referencia:
        'Seippel, R. G. (1977). <em>Fundamentos de electricidad: Principios de electricidad, electrónica, control y ordenadores</em>. Reverté.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2026). <em>Componente formativo CF02: Acondicionamiento de señales y sistemas básicos de control</em>. SENA.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2026). <em>Material de formación: Acondicionamiento de señales</em>. SENA.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2026). <em>Material de formación: Sistemas electrónicos básicos de control</em>. SENA.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
