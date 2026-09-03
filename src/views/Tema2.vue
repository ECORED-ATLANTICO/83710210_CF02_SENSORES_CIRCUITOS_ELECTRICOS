<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Conversión y representación de señales
    
    .bloque-texto-g.bg-color-04.p-3.p-sm-3.p-md-3.p-lg-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las señales permiten representar mediante información eléctrica el comportamiento de una variable física. En un sistema de instrumentación, la señal obtenida por un sensor puede presentar diferentes características dependiendo del principio de funcionamiento del dispositivo y de la variable que se desea captar.

    p.mb-3 En términos generales, las señales pueden clasificarse como análogas o digitales. Esta diferenciación es fundamental para comprender la forma en que la información puede ser procesada por los sistemas electrónicos.

    p.mb-4 Una señal análoga puede variar de manera continua dentro de un intervalo, mientras que una señal digital utiliza valores discretos para representar información. En los sistemas electrónicos digitales adquieren especial importancia los estados binarios, representados generalmente mediante los valores 0 y 1.

    .row.align-items-center.mb-3
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema2/img02.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Se incorpora dentro de los conocimientos asociados al componente conceptos como señal análoga, señal binaria, nivel lógico, sistema decimal, conversor análogo-digital y representación de medidas análogas en códigos binarios.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Señales análogas y digitales

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        p.mb-3 Una señal análoga presenta variaciones continuas. Esto significa que puede asumir diferentes valores dentro de un determinado intervalo.

        .bg-fondo-03.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg-7.mb-3.mb-lg-0
              p.mb-0 Por ejemplo, cuando un sensor mide una variable cuya magnitud cambia progresivamente, la señal generada puede representar esas variaciones mediante cambios en tensión, corriente u otra magnitud eléctrica.
            .col-lg-5.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img04.png", data-aos="zoom-in").mx-auto.w-md-50
        
        p.mb-0 Una representación conceptual puede observarse así:

      .col-lg-7.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 1.
          span Señal generada
        img.d-none.d-lg-block.mb-3(src="@/assets/curso/tema2/img05.png", alt="Gráfica de línea escalonada que representa una relación entre valor y tiempo. El eje vertical está etiquetado como “Valor” y el eje horizontal como “Tiempo”. La línea inicia cerca de cero, aumenta progresivamente mediante varios escalones hasta alcanzar un nivel máximo, se mantiene constante durante un breve periodo y luego desciende gradualmente hasta aproximarse nuevamente al nivel inicial.", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none(src="@/assets/curso/tema2/img06.png", alt="Gráfica de línea escalonada que representa una relación entre valor y tiempo. El eje vertical está etiquetado como “Valor” y el eje horizontal como “Tiempo”. La línea inicia cerca de cero, aumenta progresivamente mediante varios escalones hasta alcanzar un nivel máximo, se mantiene constante durante un breve periodo y luego desciende gradualmente hasta aproximarse nuevamente al nivel inicial.", data-aos="zoom-in").mx-auto
        figcaption.mb-0 Nota. SENA, (2026).

    p.mb-4 La curva representa una señal cuyo valor cambia progresivamente con el tiempo.<br>En una señal digital, la información se representa mediante valores discretos. En el caso de una señal binaria, se utilizan dos estados:

    .row.mb-4.justify-content-stretch.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.text-center
          p.mb-0.text-bold 0 → nivel lógico bajo

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.text-center
          p.mb-0.text-bold 1 → nivel lógico alto

    p.mb-4 Una representación simplificada sería:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in").mx-auto

      .col-lg-7.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 2.
          span Representación simplificada
        img.d-none.d-lg-block.mb-3(src="@/assets/curso/tema2/img08.png", alt="Gráfica de nivel en función del tiempo. El eje vertical está etiquetado como “Nivel” y presenta los valores 0 y 1. El eje horizontal está etiquetado como “Tiempo”. La línea comienza en el nivel 1, desciende al nivel 0 durante un intervalo de tiempo y posteriormente vuelve al nivel 1, donde permanece constante.", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none.mb-3(src="@/assets/curso/tema2/img09.png", alt="Gráfica de nivel en función del tiempo. El eje vertical está etiquetado como “Nivel” y presenta los valores 0 y 1. El eje horizontal está etiquetado como “Tiempo”. La línea comienza en el nivel 1, desciende al nivel 0 durante un intervalo de tiempo y posteriormente vuelve al nivel 1, donde permanece constante.", data-aos="zoom-in").mx-auto
        figcaption.mb-0 Nota. SENA, (2026).

    p.mb-4 Esta diferencia entre señales análogas y digitales es fundamental porque determina la forma en que la información puede ser procesada.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 1.
          span Diferencia entre señales
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Característica
                th Señal análoga
                th Señal digital
            tbody
              tr
                td.fw-bold Representación
                td Continua
                td Discreta
              tr
                td.fw-bold Valores
                td Puede asumir diferentes valores dentro de un intervalo
                td Utiliza valores definidos
              tr
                td.fw-bold Ejemplo
                td Variación de tensión proporcional a una variable
                td 0 y 1
              tr
                td.fw-bold Aplicación
                td Captación y representación de variables
                td Procesamiento lógico y digital

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Señal binaria y nivel lógico

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        p.mb-0 La señal binaria constituye una forma de representación digital basada en dos estados. Estos estados pueden asociarse con condiciones específicas de funcionamiento. Por ejemplo, en un sistema de detección:

      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.text-center
          p.mb-0.text-bold 0 → nivel lógico bajo

      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.text-center
          p.mb-0.text-bold 1 → nivel lógico alto

    
    .container
      .row.mb-5.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.mb-4.mb-lg-0.col-md-12.order-1.order-lg-2.p-0.p-lg-2.p-xl-0
          figure
            img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-lg-3.p-xl-4.p-4
          p.mb-0 Sin embargo, los valores 0 y 1 no deben interpretarse únicamente como números. En los sistemas electrónicos representan estados lógicos que permiten establecer condiciones de funcionamiento. El concepto de nivel lógico permite relacionar los estados de una señal con determinados niveles eléctricos utilizados por los circuitos digitales.

    p.mb-4 Una secuencia sencilla puede representarse así:

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-7.mb-3.mb-lg-0
        .bg-color-02.p-4.br-15.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Variable física → sensor → señal eléctrica → nivel lógico → decisión

      .col-lg-5.mb-3.mb-lg-0
        p.mb-0 Por ejemplo, un sensor puede detectar la presencia de un objeto y generar una señal que el sistema interpreta como un estado lógico. A partir de esta información, un circuito puede determinar si debe producir o no una respuesta.

    
    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-02.br-15.mb-0.p-4.justify-content-center
          .col-lg-9.ml-11
            p.mb-1.fw-bold Ejemplo aplicado:
            p.mb-0 Supóngase un sistema encargado de detectar la presencia de una pieza en una banda transportadora.
            p.mb-0 Cuando la pieza no está presente: <b>Sensor = 0</b>
            p.mb-0 Cuando la pieza está presente: <b>Sensor = 1</b>
            p.mb-0 La señal puede utilizarse posteriormente para activar una determinada acción del sistema.
            p.mb-0.text-bold La señal binaria permite representar condiciones del proceso mediante estados que pueden ser interpretados por los circuitos electrónicos.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Sistema decimal y sistema binario


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p.mb-2 Para comprender la representación digital de las medidas es necesario reconocer la diferencia entre el sistema decimal y el sistema binario.
        .bg-color-05-degrade.p-4.br-15.mb-0.h-100
          p.mb-1 El sistema decimal utiliza diez símbolos:
          p.mb-0.fw-bold 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9.

      .col-lg-6.mb-0.mb-lg-0
        .bg-color-08.p-4.br-15.mb-0.h-100
          .row.align-items-center
            .col-lg-9
              p.mb-2 Es el sistema utilizado habitualmente para expresar valores de medición.
              p.mb-0 El sistema binario, en cambio, utiliza únicamente dos símbolos:
            .col-lg-3.text-center.mt-3.mt-lg-0
              .px-3.py-2.br-10.d-inline-block.border.border-2.border-success
                p.mb-0.fw-bold.fs-5 0 y 1.

    p.mb-1 Los sistemas electrónicos digitales utilizan esta representación porque sus circuitos pueden trabajar con dos estados lógicos.
    p.mb-4 Por ejemplo:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 2.
          span Sistema binario y decimal
        .tabla-a.color-acento-contenido.tb-custom.mb-4
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Decimal
                th Binario
                th Decimal
                th Binario
                th Decimal
                th Binario
            tbody
              tr
                td.fw-bold.text-center 0
                td.text-center 0000
                td.fw-bold.text-center 4
                td.text-center 0100
                td.fw-bold.text-center 8
                td.text-center 1000
              tr
                td.fw-bold.text-center 1
                td.text-center 0001
                td.fw-bold.text-center 5
                td.text-center 0101
                td.fw-bold.text-center 9
                td.text-center 1001
              tr
                td.fw-bold.text-center 2
                td.text-center 0010
                td.fw-bold.text-center 6
                td.text-center 0110
                td
                td
              tr
                td.fw-bold.text-center 3
                td.text-center 0011
                td.fw-bold.text-center 7
                td.text-center 0111
                td
                td

        p.mb-0 Esta relación permite representar un valor numérico mediante una combinación de estados binarios.

    .row.align-items-center(data-aos="fade-right")
      .col-lg-12.col-xl-10.mx-auto
        .bg-fondo-07.br-15.mb-4
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.col-xl-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema2/img14.png").mx-auto
            .col-lg-8.col-xl-9.order-1.order-lg-1.p-5.p-lg-4
              p.mb-0.fw-bold ¿Por qué es importante esta representación?
              p.mb-0 Cuando una medida análoga debe ser procesada digitalmente, el sistema necesita representar el valor mediante una estructura que pueda ser interpretada por los circuitos digitales.
              p.mb-0 Por esta razón, la conversión de una medida análoga en un código binario constituye una etapa fundamental en los sistemas de adquisición y procesamiento de señales.
    
    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Conversor análogo-digital

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-7.mb-3.mb-lg-0
        p.mb-0 El conversor análogo-digital, identificado como ADC, es el dispositivo encargado de transformar una señal análoga en una representación digital.

      .col-lg-5.mb-0.mb-lg-0
        .bg-color-02.p-4.br-15.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Señal análoga → ADC → código binario

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-12.mb-4.mb-lg-0
        .bg-color-08.p-4.br-15.h-100
          img(src='@/assets/curso/tema2/img15.svg' alt='', style="max-width: 90px").mb-3.d-none.d-lg-block
          p.mb-0 La señal que proviene del sensor puede presentar diferentes valores dentro de un intervalo. El conversor asigna estos valores a representaciones digitales que pueden ser procesadas posteriormente.

      .col-lg-7.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 3.
          span Transición señal análoga
        img.d-none.d-lg-block(src="@/assets/curso/tema2/img16.png", alt="Diagrama de un convertidor analógico-digital (ADC). A la izquierda se muestra una señal de entrada analógica representada por una onda sinusoidal. La señal ingresa al bloque central identificado como “ADC”, que la convierte en una salida digital. A la derecha se muestra la salida binaria mediante una secuencia de valores 0 y 1. El diagrama ilustra el proceso de conversión de una señal analógica a una representación digital.", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none(src="@/assets/curso/tema2/img17.png", alt="Diagrama de un convertidor analógico-digital (ADC). A la izquierda se muestra una señal de entrada analógica representada por una onda sinusoidal. La señal ingresa al bloque central identificado como “ADC”, que la convierte en una salida digital. A la derecha se muestra la salida binaria mediante una secuencia de valores 0 y 1. El diagrama ilustra el proceso de conversión de una señal analógica a una representación digital.", data-aos="zoom-in").mx-auto
        figcaption.mb-0 Nota. SENA, (2026).

    p.mb-4 El proceso general puede comprenderse mediante cuatro etapas:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .bg-color-02.p-4.br-15.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Captación → acondicionamiento → conversión → procesamiento

      .col-lg-6.mb-0.mb-lg-0
        p.mb-0 La captación obtiene la información de la variable.
        p.mb-0 El acondicionamiento prepara la señal.
        p.mb-0 La conversión transforma la información análoga en una representación digital.
        p.mb-0 El procesamiento utiliza el resultado de la conversión.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-03.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg-9.mb-3.mb-lg-0
              p.mb-0.fw-bold Ejemplo:
              p.mb-0 Si un sensor entrega una señal de tensión que cambia de acuerdo con una variable física, el ADC puede recibir dicha señal y generar un código binario asociado con el valor medido.
              p.mb-0 De esta manera:
              p.mb-0.fw-bold Variable física → Sensor → Señal análoga → Acondicionamiento → ADC → Código binario → Procesamiento digital

            .col-lg-3
              img(src="@/assets/curso/tema2/img04.png", data-aos="zoom-in", style="max-width: 170px").mx-auto

        p.mb-0 Esta secuencia conecta directamente los contenidos desarrollados en el numeral anterior con los sistemas electrónicos de control.

    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Representación de medidas análogas en códigos binarios

    img(src="@/assets/curso/tema2/img19.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-right")
        p.banner-text La representación de medidas análogas en códigos binarios permite que un valor proveniente de una variable física pueda ser interpretado por un sistema digital.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-12.mb-4.mb-lg-0
        p.mb-3 Para comprender este proceso, debe considerarse que una señal análoga puede presentar numerosos valores dentro de un intervalo, mientras que un sistema digital trabaja con representaciones discretas.
        p.mb-2 El conversor análogo-digital establece una correspondencia entre ambos tipos de información.
        p.mb-0 Por ejemplo, de manera conceptual:

      .col-lg-7.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 2.
          span Representación simplificada
        img.d-none.d-lg-block.mb-3(src="@/assets/curso/tema2/img20.png", alt="Diagrama que representa el proceso de conversión de una señal analógica a digital. En la parte superior aparece “medida análoga”, seguida del valor “2,35 v”. una flecha apunta hacia un bloque denominado “adc”. debajo, otra flecha conduce a “código digital”, representado por la secuencia binaria “00101101”. finalmente, una flecha apunta hacia “procesamiento”.", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none.mb-3(src="@/assets/curso/tema2/img21.png", alt="Diagrama que representa el proceso de conversión de una señal analógica a digital. En la parte superior aparece “medida análoga”, seguida del valor “2,35 v”. una flecha apunta hacia un bloque denominado “adc”. debajo, otra flecha conduce a “código digital”, representado por la secuencia binaria “00101101”. finalmente, una flecha apunta hacia “procesamiento”.", data-aos="zoom-in").mx-auto
        figcaption.mb-0 Nota. SENA, (2026).


    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-10.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-0.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block.order-2
              img(src="@/assets/curso/intro/img02.svg", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-0 El código binario mostrado constituye únicamente un ejemplo ilustrativo. En una aplicación real, el código generado depende de las características del conversor, su resolución y el rango de entrada establecido.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Resolución de la conversión

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        p.mb-1 La resolución determina la capacidad del conversor para diferenciar distintos niveles de la señal de entrada.
        p.mb-2 Un conversor con mayor cantidad de bits puede representar una mayor cantidad de niveles.
        p.mb-3 Por ejemplo:

        .px-4.py-3.br-15.border.border-2.br-15.br-color-05.col-9
          .row.fw-bold.mb-2.pb-1
            .col-4 Resolución
            .col-8.text-center Cantidad de niveles posibles
          .row.mb-0
            .col-4 2 bits
            .col-8.text-center 4
          .row.mb-0
            .col-4 3 bits
            .col-8.text-center 8
          .row.mb-0
            .col-4 4 bits
            .col-8.text-center 16
          .row.mb-0
            .col-4 8 bits
            .col-8.text-center 256

      .col-lg-7.mb-0.mb-lg-0
        .bg-color-12.p-4.br-15.h-100
          p.mb-3 La relación puede expresarse mediante:

          .px-3.py-2.br-10.d-inline-block.border.border-2.border-success.mb-3
            p.mb-0.fw-bold Número de niveles = 2<sup>n</sup>

          p.mb-3 Donde n corresponde al número de bits utilizados por el conversor.<br>Así, un conversor de 8 bits puede representar:

          .px-3.py-2.br-10.d-inline-block.border.border-2.border-success.mb-3
            p.mb-0.fw-bold 2<sup>8</sup> = 256 niveles

          p.mb-0 Esto permite comprender por qué la resolución constituye una característica importante al momento de representar digitalmente una señal análoga.

    separador

    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Relación entre conversión y sistemas de control

    p.mb-3 La conversión análogo-digital adquiere especial importancia cuando la información captada por un sensor debe ser utilizada por un sistema electrónico digital.
    p.mb-4 La secuencia puede representarse así:

    .bg-color-02.p-4.br-15.mb-5
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0.text-bold Variable física → Sensor → Señal análoga → Acondicionamiento → Conversor análogo-digital → Código binario → Sistema de procesamiento → Decisión o acción de control

    .bloque-texto-g.bg-color-04.p-3.p-sm-3.p-md-3.p-lg-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De esta manera, la conversión no constituye el objetivo final del proceso. Su función es permitir que la información procedente del mundo físico pueda ser representada de una forma adecuada para el procesamiento digital.

    p.mb-4 Esto permite establecer una conexión directa con el segundo resultado de aprendizaje del componente, relacionado con los principios básicos de los sistemas automáticos de control y con la implementación de sistemas electrónicos básicos basados en la adquisición de señales mediante sensores.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-01.br-15.mb-4.p-4
          p.mb-2.fw-bold Para tener presente
          p.mb-0 Una señal análoga representa una variable de manera continua; el conversor análogo-digital permite transformarla en una representación digital que puede ser procesada por un sistema electrónico.










  //-             p.mb-3 El fototransistor presenta un funcionamiento similar al de un transistor, pero la corriente asociada a la base es suministrada por la acción de la luz.
  //-             p.mb-0 Estos dispositivos permiten incorporar la detección de luz dentro de sistemas electrónicos.
            
  //-           .tarjeta.color-acento-botones--borde.p-4(titulo="Selección del sensor o transductor")
  //-             p.mb-0 La selección del dispositivo debe responder a la variable que se desea captar y a las características de la aplicación.

  //-   p.mb-3 La relación puede organizarse mediante las siguientes preguntas:

  //-   .row.mb-4.justify-content-center.align-items-stretch
  //-     .col-lg-6.mb-4.mb-lg-0
  //-       .bg-color-08.p-4.br-15.h-100
  //-         .row.align-items-center.h-100
  //-           .col-lg-auto
  //-             img.d-none.d-lg-flex(src="@/assets/curso/tema2/img23.png", style="max-width: 90px").mx-auto
  //-           .col-lg
  //-             p.mb-0.text-bold ¿Qué variable se desea detectar o medir? 
  //-             p.mb-2 Determina el tipo de dispositivo requerido.
  //-             p.mb-0.text-bold ¿La detección requiere contacto físico? 
  //-             p.mb-2 Permite establecer si resulta apropiado un dispositivo como un final de carrera o un detector de proximidad.
  //-             p.mb-0.text-bold ¿Qué distancia debe medirse? 
  //-             p.mb-0 Permite considerar diferentes principios de desplazamiento.

  //-     .col-lg-6.mb-0.mb-lg-0
  //-       .bg-color-02.p-4.br-15.h-100
  //-         .row.align-items-center.h-100
  //-           .col-lg-auto.order-lg-2
  //-             img.d-none.d-lg-flex(src="@/assets/curso/tema2/img24.png", style="max-width: 90px").mx-auto
  //-           .col-lg.order-lg-1
  //-             p.mb-0.text-bold ¿Qué tipo de señal necesita el sistema electrónico?
  //-             p.mb-2 Permite establecer las características requeridas para la salida del dispositivo.
  //-             p.mb-0.text-bold ¿Qué condiciones presenta el proceso?
  //-             p.mb-0 Permite considerar las características de operación del sensor o transductor.

  //-   separador
    
  //-   #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
  //-     h2 2.4 Relación entre variable y dispositivo


  //-   .row.mb-4.justify-content-center.align-items-center
  //-     .col-md-8.col-lg-3.mb-4.mb-lg-0.order-lg-1
  //-       figure
  //-         img(src="@/assets/curso/tema2/img25.png", data-aos="zoom-in")
  //-     .col-lg-9.order-lg-2
  //-       p.mb-2 La clasificación estudiada puede resumirse de la siguiente manera:
  //-       .titulo-sexto.color-acento-contenido.mb-3
  //-         h5 
  //-           b Tabla 3.
  //-         span Relación variable y dispositivo
  //-       .tabla-a.color-acento-contenido.tb-custom.mb-0
  //-         table(style="min-width:440px")
  //-           caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
  //-           thead
  //-             tr
  //-               th(width="40%") Variable o condición
  //-               th(width="60%") Ejemplos presentados
  //-           tbody
  //-             tr
  //-               td Posición
  //-               td Final de carrera
  //-             tr
  //-               td Proximidad
  //-               td Detector de proximidad
  //-             tr
  //-               td Desplazamiento
  //-               td Radar, resistivo, inductivo, capacitivo, encoder
  //-             tr
  //-               td Velocidad
  //-               td Tacómetro
  //-             tr
  //-               td Presión
  //-               td Tubo en U, Bourdon, diafragma, fuelle, electromecánico
    
  //-   p.mb-4 Esta clasificación permite relacionar una necesidad de medición o captación con los dispositivos disponibles para obtener información de la variable.

  //-   separador
    
  //-   #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
  //-     h2 2.5 Integración del sensor, transductor y sistema electrónico
    
  //-   p.mb-4 Un sistema de adquisición puede comprenderse como una cadena en la que cada elemento cumple una función determinada:

  //-   .bg-color-02.p-4.mb-5.br-15.max-cont-md
  //-     p.mb-0.text-bold Variable física → Sensor → Transductor → Señal de salida → Sistema electrónico → Procesamiento
    
  //-   .bg-full-width.bg-fondo-2

  //-     .row.justify-content-center.mb-5
  //-       .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-right")
  //-         .tarjeta-numerada.color-primario.p-4.h-100.align-content-center
  //-           .tarjeta-numerada__numero
  //-             .h2 1
  //-           p.mb-0.ms-3.text-center El sensor permite captar la variable.

  //-       .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-up")
  //-         .tarjeta-numerada.color-secundario.p-4.h-100.align-content-center
  //-           .tarjeta-numerada__numero
  //-             .h2 2
  //-           p.mb-0.ms-3.text-center El transductor recibe y transforma o adapta la señal.

  //-       .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-down")
  //-         .tarjeta-numerada.color-acento-contenido.p-4.h-100.align-content-center
  //-           .tarjeta-numerada__numero
  //-             .h2 3
  //-           p.mb-0.ms-3.text-center El sistema electrónico recibe la señal para realizar el procesamiento correspondiente.

  //-       .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-left")
  //-         .tarjeta-numerada.color-acento-botones.p-4.h-100.align-content-center
  //-           .tarjeta-numerada__numero
  //-             .h2 4
  //-           p.mb-0.ms-3.text-center Esta estructura constituye la base para el estudio posterior de las variables y señales y de los sistemas de adquisición de señales.



  //-     .container
  //-       .titulo-con-imagen.mb-5(data-aos="fade-right")
  //-         .titulo-con-imagen__fondo
  //-           img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
