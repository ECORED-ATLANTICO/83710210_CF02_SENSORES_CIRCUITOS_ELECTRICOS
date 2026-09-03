<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Circuitos básicos para el acondicionamiento

    .bg-full-width.bg-fondo-1
      .row.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img01.png", data-aos="zoom-in").mx-auto
        .col-lg-9.mb-0.mb-lg-0
          p.mb-3 Los circuitos eléctricos y electrónicos permiten modificar o adaptar las características de las señales obtenidas mediante sensores. Para comprender su utilización en el acondicionamiento, es necesario reconocer algunos principios relacionados con la corriente eléctrica, la tensión y la resistencia.

          .container
            .row.align-items-center.bg-color-0.p-4.mb-0.br-15
              .col-lg-auto.d-none.d-lg-block.order-2
                img(src="@/assets/curso/intro/img02.svg", style="max-width: 90px").mx-auto
              .col-lg.order-1
                p.mb-0 En los sistemas de instrumentación, estos principios permiten establecer configuraciones mediante las cuales una señal puede ser adaptada antes de ser enviada a una etapa de procesamiento. De esta manera, el comportamiento eléctrico del circuito se relaciona directamente con las características de la señal que se desea obtener.


      separador

      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Principios eléctricos aplicados al acondicionamiento

      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema3/img02.png", alt="La corriente eléctrica")
            .crd_hover_txt--body
              h4.mb-3.text-center La corriente eléctrica
              p.mb-0 Corresponde al movimiento ordenado de cargas eléctricas a través de un material conductor. Para que exista corriente debe establecerse una condición que permita el desplazamiento de las cargas dentro del circuito.

        .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema3/img03.png", alt="La tensión eléctrica")
            .crd_hover_txt--body
              h4.mb-3.text-center La tensión eléctrica
              p.mb-0 Es la diferencia de potencial eléctrico entre dos puntos. Permite impulsar el movimiento de las cargas a través de un conductor.

        .col-xl-4.col-lg-6.col-md-12.col-12.mb-0.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema3/img04.png", alt="La resistencia eléctrica")
            .crd_hover_txt--body
              h4.mb-3.text-center La resistencia eléctrica
              p.mb-0 Es la oposición que presenta un material al paso de la corriente eléctrica.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-8.col-md-12.mb-4.mb-lg-0
        .bg-color-12.p-4.br-15.mb-0.h-100
          .row
            .col-lg-6.col-md-12.mb-3.mb-lg-0
              .row.align-items-center
                .col-lg-7.mb-2.mb-lg-0
                  p.mb-0 Estos tres conceptos se encuentran relacionados mediante la Ley de Ohm
                .col-lg-5.text-center
                  .px-2.py-1.br-10.d-inline-block.border.border-2.border-success
                    p.mb-0.fw-bold.fs-5 Ley de Ohm

            .col-lg-6.col-md-12
              .row.align-items-center
                .col-lg-7.mb-2.mb-lg-0
                  p.mb-0 La Ley de Ohm establece la relación entre tensión, corriente y resistencia:
                .col-lg-5.text-center
                  .px-3.py-2.br-10.d-inline-block.border.border-2.border-success
                    p.mb-0.fw-bold.fs-5 V = I × R


      .col-lg-4.mb-3.mb-lg-0
        p.mb-2 Donde:
        ul.lista-ul--color.mb-0
          li.d-flex.mb-1
            i.fas.fa-solid.fa-square.me-2
            span <b>V</b> corresponde a la tensión eléctrica.
          li.d-flex.mb-1
            i.fas.fa-solid.fa-square.me-2
            span <b>I</b> corresponde a la corriente eléctrica.
          li.d-flex.mb-0
            i.fas.fa-solid.fa-square.me-2
            span <b>R</b> corresponde a la resistencia eléctrica.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12.col-xl-8.col-md-12
        .bg-color-02.p-4.br-15
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-3.mb-lg-0
              p.mb-2 A partir de esta relación también pueden obtenerse:
              .d-flex.gap-3.flex-wrap.justify-content-center
                .px-3.py-2.br-10.border.border-2.border-success
                  p.mb-0.fw-bold I = V / R
                .px-3.py-2.br-10.border.border-2.border-success
                  p.mb-0.fw-bold R = V / I
            .col-lg-6
              p.mb-0 Estas expresiones permiten determinar el comportamiento de un circuito cuando se conocen dos de sus variables.

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-02.br-15.mb-0.p-4.justify-content-center
          .col-lg-9.ml-11
            p.mb-1.fw-bold Ejemplo aplicado:
            p.mb-0 Si un circuito presenta una tensión de 12 V y una resistencia de 6 Ω, la corriente puede determinarse mediante:
            p.mb-0 <b>I = V / R</b>
            p.mb-0 <b>I = 12 V / 6 Ω</b>
            p.mb-0 <b>I = 2 A</b>
            p.mb-0 Por lo tanto, la corriente que circula por el circuito corresponde a 2 A.
            p.mb-0.fw-bold Este tipo de relación permite analizar circuitos básicos utilizados posteriormente en configuraciones de acondicionamiento.



    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Configuración de circuitos para acondicionar señales


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        p.mb-2 Los circuitos de acondicionamiento permiten establecer una relación entre la señal proveniente de un sensor y las condiciones requeridas por el sistema electrónico.
        p.mb-2 Una configuración sencilla puede utilizar elementos resistivos para modificar el nivel de tensión disponible en un punto determinado del circuito.

        p.mb-3 De manera general:
        .bg-color-02.p-4.br-15.mb-3.max-cont-md
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Señal de entrada → circuito de acondicionamiento → señal adaptada

      .col-lg-4.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in").mx-auto

    p.mb-5 La señal de entrada corresponde a la información generada por el sensor. El circuito realiza la adaptación y la señal de salida queda disponible para la siguiente etapa.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Divisor de tensión

    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center
        .col-lg-2.col-md-12.mb-4.mb-lg-0.align-content-center
          p.mb-3 El divisor de tensión es una configuración que permite obtener una tensión de salida a partir de una tensión de entrada y de dos o más resistencias.
          p.mb-0 Una representación conceptual es:

        .col-lg-4.col-md-12.mb-4.mb-lg-0
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-0 Figura 4.
            span División de tensión
          img(src="@/assets/curso/tema3/img08.png", alt="Diagrama de un divisor de tensión formado por dos resistencias R1 y R2 conectadas en serie entre Vin y GND, con Vout tomado entre ellas.", data-aos="zoom-in").mx-auto
          figcaption.mb-0 Nota. SENA, (2026).

        .col-lg-6.col-md-12.mb-0.mb-lg-0
          .bg-color-08.p-4.br-15.h-100.align-content-center
            p.mb-3 En esta configuración, la tensión de salida depende de la relación entre las resistencias.
            p.mb-2 La expresión general para dos resistencias es:
            p.mb-3.fw-bold Vout = Vin × R2 / (R1 + R2)
            p.mb-0 Esta relación permite determinar el nivel de tensión disponible en la salida.

      .row.align-items-center.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12.col-xl-10.mx-auto
          .bg-fondo-03.br-15.mb-0.p-4.p-lg-5
            .row.align-items-center
              .col-lg-8.mb-3.mb-lg-0
                .row.mb-3
                  .col-sm-3
                    p.mb-1.fw-bold Ejemplo:
                  .col-sm-4
                    p.mb-1.fw-bold Si:
                    p.mb-1 <b>Vin</b> = 10 V
                    p.mb-1 <b>R1</b> = 10 kΩ
                    p.mb-0 <b>R2</b> = 10 kΩ
                  .col-sm-5
                    p.mb-1.fw-bold Entonces:
                    p.mb-1 <b>Vout</b> = 10 × 10 / (10 + 10)
                    p.mb-0 <b>Vout</b> = 5 V
                p.mb-0 La salida corresponde a 5 V.
                p.mb-0 Este principio puede utilizarse para adaptar niveles de tensión de una señal antes de su ingreso a otra etapa del sistema.

              .col-lg-4.d-none.d-lg-block.text-center
                img(src="@/assets/curso/tema2/img04.png", style="max-width: 200px").mx-auto

      separador

      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.3 Aplicación del puente de <em>Wheatstone</em>

      img(src="@/assets/curso/tema3/img09.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text El puente de <em>Wheatstone</em> constituye otra configuración utilizada para el acondicionamiento de señales provenientes de sensores. Su aplicación resulta especialmente importante cuando el sensor presenta una variación de resistencia asociada con un cambio de la variable física.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0
        p.mb-3 El material de formación señala que el puente de <em>Wheatstone</em> puede utilizarse industrialmente con sensores cuya resistencia cambia de acuerdo con la variación de determinadas variables. También presenta su utilización para identificar el valor de una resistencia desconocida mediante el equilibrio del puente.
        p.mb-0 Una representación simplificada del circuito es:

      .col-lg-7.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 4.
          span Puente de <em>Wheatstone</em>
        img.d-none.d-lg-block(src="@/assets/curso/tema3/img10.png", alt="Esquema del puente de Wheatstone con resistencias R1, R2, R3 y R2 conectadas entre Vin y los nodos A y B.", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none(src="@/assets/curso/tema3/img11.png", alt="Esquema del puente de Wheatstone con resistencias R1, R2, R3 y R2 conectadas entre Vin y los nodos A y B.", data-aos="zoom-in").mx-auto
        figcaption.mb-0 Nota. SENA, (2026).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img12.png", data-aos="zoom-in").mx-auto

      .col-lg-9.mb-4.mb-lg-0.order-1.order-lg-2
        p.mb-3 En una configuración de este tipo, el circuito puede encontrarse en equilibrio cuando la diferencia de potencial entre determinados puntos es igual a cero.
        p.mb-3 El material de formación plantea que, cuando V<sub>AB</sub> = 0, es posible determinar el valor de una resistencia desconocida mediante la relación establecida entre los demás elementos del puente.
        p.mb-2.fw-bold El puente como elemento de acondicionamiento
        p.mb-0 Cuando uno de los elementos resistivos corresponde a un sensor, una variación de la variable física puede producir una variación de resistencia.

    p.mb-3 El proceso puede representarse así:

    .row.mb-2.align-items-center
      .col-lg-10.col-xl-11.col-md-12
        .bg-color-02.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Variable física → Variación de resistencia del sensor → Desequilibrio del puente → Variación de tensión → Señal de salida

    p.mb-3 De esta manera, el puente permite transformar una variación relacionada con una magnitud física en una señal eléctrica que puede continuar hacia otras etapas del sistema.

    .bg-full-width.bg-fondo-2
      separador

      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.4 Relación entre el circuito y la señal obtenida

      .row.mb-4.justify-content-center.align-items-stretch
        .col-lg-6.mb-4.mb-lg-0
          p.mb-3 La configuración del circuito determina las características de la señal disponible en su salida. Por esta razón, el diseño de un circuito de acondicionamiento debe considerar la relación entre la señal de entrada, los componentes utilizados y la señal que se requiere obtener.
          p.mb-3 La secuencia puede representarse de la siguiente manera:
          ul.lista-ul--color.mb-0
            li.d-flex.mb-1
              i.fas.fa-arrow-right.me-2(style="color: #0F8268;")
              span.fw-bold Circuito de acondicionamiento
            li.d-flex.mb-1
              i.fas.fa-arrow-right.me-2(style="color: #0F8268;")
              span.fw-bold Señal adaptada
            li.d-flex.mb-0
              i.fas.fa-arrow-right.me-2(style="color: #0F8268;")
              span.fw-bold Conversión o procesamiento

        .col-lg-6.mb-0.mb-lg-0
          .bg-color-08.p-4.br-15.h-100
            p.mb-2 La señal adaptada debe conservar la información necesaria sobre la variable que se está midiendo.
            p.mb-0 Por ejemplo, si un sensor modifica su resistencia cuando cambia una variable física, el circuito de acondicionamiento puede convertir esta variación en una modificación de tensión que pueda ser posteriormente procesada.
            p.mb-0 Esta relación permite comprender por qué los componentes eléctricos no se seleccionan únicamente por su disponibilidad, sino de acuerdo con la función que deben cumplir dentro del sistema.

      separador

      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.5 Del acondicionamiento al sistema electrónico

    .bloque-texto-g.bg-color-04.p-3.p-sm-3.p-md-3.p-lg-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez que la señal ha sido acondicionada, puede continuar hacia una etapa de procesamiento electrónico. En este punto comienza a establecerse la relación con los sistemas básicos de control que serán abordados en el siguiente numeral.

    p.mb-4 La secuencia general puede representarse así:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 6.
          span Secuencia general
        img.d-none.d-lg-block(src="@/assets/curso/tema3/img14.png", alt="Diagrama de secuencia general: Variable física → Sensor → Acondicionador → Procesamiento → Acción de control", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none(src="@/assets/curso/tema3/img15.png", alt="Diagrama de secuencia general: Variable física → Sensor → Acondicionador → Procesamiento → Acción de control", data-aos="zoom-in").mx-auto
        figcaption.mb-0 Nota. SENA, (2026).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-3 Esta representación permite observar que el circuito de acondicionamiento constituye un elemento de conexión entre la información obtenida del proceso y el sistema encargado de tomar una decisión o generar una respuesta.
        p.mb-0 El Material de Formación 4 parte precisamente de esta integración: las variables son capturadas mediante sensores, procesadas por transductores y escalizadas mediante circuitos de acondicionamiento, para posteriormente abordar circuitos básicos capaces de realizar pequeñas acciones de control.

      .col-lg-4.mb-0.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img16.png", data-aos="zoom-in").mx-auto

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-01.br-15.mb-0.p-4
          p.mb-2.fw-bold Para tener presente
          p.mb-0 Un circuito de acondicionamiento permite adaptar una señal proveniente de un sensor para facilitar su adquisición, conversión o procesamiento dentro de un sistema electrónico.

    h4.fw-bold.mb-3 Aplicación

    p.mb-3 En un proceso industrial puede existir una variable que produzca una modificación en el comportamiento de un sensor resistivo. Esta modificación puede ser llevada a un circuito de acondicionamiento, como un divisor de tensión o un puente de Wheatstone, para obtener una señal eléctrica relacionada con la variable. Posteriormente, esta señal puede ser convertida y procesada por un sistema electrónico para determinar una condición de funcionamiento.
    p.mb-4 Así, se establece una relación completa:

    .row.mb-4.align-items-center
      .col-lg-9.col-xl-9.col-md-12
        .bg-color-02.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Variable → sensor → variación eléctrica → acondicionamiento → señal → procesamiento → control

    p.mb-0 Esta integración prepara el desarrollo del siguiente tema, en el que se abordarán los principios básicos de los sistemas automáticos de control, incluyendo los elementos electrónicos que permiten interpretar señales y generar respuestas.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
