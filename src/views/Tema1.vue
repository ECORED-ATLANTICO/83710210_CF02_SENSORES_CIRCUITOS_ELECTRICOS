<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Acondicionamiento de señales

    .bg-full-width.bg-fondo-1
      img(src="@/assets/curso/tema1/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text En los sistemas de instrumentación, las señales provenientes de los sensores contienen información relacionada con las variables del proceso. Sin embargo, estas señales no siempre presentan las condiciones necesarias para ser procesadas directamente por un sistema electrónico. Por esta razón, se requiere realizar un proceso de acondicionamiento que permita adaptar sus características de acuerdo con las necesidades del sistema.

      .row.mb-4.mb-lg-5.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in")
        .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-3(data-aos="fade-right") El acondicionamiento de señales constituye una etapa de enlace entre la captación de una variable y el procesamiento electrónico de la información. En esta etapa pueden intervenir sensores, transductores y diferentes circuitos eléctricos y electrónicos. El propósito es disponer de una señal que pueda ser adquirida, interpretada y utilizada posteriormente en un sistema de control.
          .container
            .row.align-items-center.bg-color-0.p-4.mb-0.br-15
              .col-lg-auto.d-none.d-lg-block.order-2
                img(src="@/assets/curso/tema1/img04.svg", style="max-width: 90px").mx-auto
              .col-lg.order-1
                p.mb-0 El Diseño Curricular establece como conocimiento de proceso “diseñar circuitos básicos para el acondicionamiento de señales provenientes de sensores”, relacionando este proceso con conocimientos como electrónica, sensor, transductor, señal análoga, señal binaria, potencia y conversor análogo-digital. 

      separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Sensor, transductor y acondicionador de señal
 
    .row.mb-4.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img05.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p.mb-3 Para comprender el acondicionamiento de señales es necesario diferenciar los elementos que participan en la obtención y tratamiento de la información.
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="El sensor")
            p.mb-0 Permite captar el valor de una variable del proceso y generar una señal de salida. De acuerdo con el material de formación, el sensor recibe la magnitud física y proporciona la información al transductor.
          .tarjeta.color-acento-botones--borde.p-4(titulo="El transductor")
            p.mb-0 Recibe una señal de entrada relacionada con una o más cantidades físicas y la convierte en una señal de salida, modificada o no. Dentro de los ejemplos mencionados en el material de formación se encuentran el relé, el elemento primario, el transmisor y diferentes convertidores.
          .tarjeta.color-acento-botones--borde.p-4(titulo="El acondicionador")
            p.mb-0 De señal interviene cuando la señal generada requiere una adaptación para cumplir las condiciones necesarias para su posterior procesamiento.


    .row.mb-4
      .col-lg-12.col-xl-11
        .row.align-items-center.bg-color-02.p-4.br-15.mb-0
          .col-lg-4.mb-2
            span La relación entre estos elementos puede representarse de la siguiente manera:
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.fw-bold Variable física → sensor → transductor → acondicionador → sistema electrónico

    p.mb-4 Cada elemento cumple una función dentro de la cadena de adquisición de información. El sensor realiza la captación; el transductor realiza una transformación o adaptación de la señal; y el acondicionamiento prepara la señal para su utilización en la siguiente etapa.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Necesidad del acondicionamiento

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p.mb-2 Las señales provenientes de los sensores pueden presentar características que dificultan su procesamiento directo. El material de formación señala que estas señales pueden ser demasiado pequeñas, demasiado grandes o no cumplir con los requerimientos eléctricos del procesador. 
        p.mb-0 En estas condiciones, el acondicionamiento permite adaptar la señal antes de que sea recibida por el sistema electrónico.

      .col-lg-6.mb-4.mb-lg-0
        .bg-color-05-degrade.p-3.br-15.mb-0
          p.mb-1 Entre las situaciones que pueden requerir acondicionamiento se encuentran:

          ul.lista-ul--color.mb-0
            li.d-flex.mb-1 
              i.fas.fa-solid.fa-square.me-2
              span Señales con niveles eléctricos que requieren adaptación.
            li.d-flex.mb-1 
              i.fas.fa-solid.fa-square.me-2
              span Señales que necesitan ser preparadas para su adquisición.
            li.d-flex.mb-1 
              i.fas.fa-solid.fa-square.me-2
              span Señales que requieren conversión para ser procesadas.
            li.d-flex.mb-0 
              i.fas.fa-solid.fa-square.me-2
              span Señales que deben adecuarse a las características del sistema electrónico.

    .row.mb-4.mb-lg-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        .container.mb-3
          .row.align-items-center.bg-color-0.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block.order-2
              img(src="@/assets/curso/tema1/img04.svg", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-2 El acondicionamiento, por tanto, permite conservar la información relacionada con la variable medida y modificar las condiciones de la señal para facilitar su utilización.

              p.mb-0 Una forma sencilla de comprender este proceso es:


        .container
          .row.align-items-center.bg-color-02.p-4.mb-0.br-15.max-cont-md
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Variable física → captación → señal → acondicionamiento → procesamiento


    p.mb-4 El acondicionamiento constituye así una etapa intermedia que permite establecer una conexión entre el fenómeno físico y el sistema electrónico.


    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Acondicionamiento mediante circuitos eléctricos

    .bg-full-width.bg-fondo-1
      .row.mb-4.justify-content-center.align-items-center
        .col-lg-5.mb-4.mb-lg-0
          p.mb-2 Los circuitos eléctricos constituyen una base para el desarrollo de diferentes configuraciones de acondicionamiento. Para comprender su funcionamiento es necesario reconocer la relación existente entre tensión, corriente y resistencia.

          .bg-color-05-degrade.p-4.br-15.mb-0
            .row.align-items-center.mb-3.mb-lg-1
              .col-lg-auto.mb-2.mb-lg-0
                p.mb-2 La Ley de Ohm establece la relación:
                p.mb-0 Donde: 
              .col-lg
                .px-3.py-2.br-10.d-inline-block.border.border-2.border-success
                  p.mb-0.fw-bold.fs-5 V = I × R

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

        .col-lg-7.mb-4.mb-lg-0
          .bg-color-01.p-4.br-15.mb-3
            p.mb-0 Esta relación permite determinar el comportamiento de diferentes elementos dentro de un circuito y comprender cómo una modificación en alguno de sus parámetros puede afectar las condiciones eléctricas de la señal.

          p.mb-3 El material de formación relacionado con el acondicionamiento inicia precisamente con los conceptos de corriente eléctrica y Ley de Ohm antes de abordar los circuitos utilizados para el tratamiento de señales. 

          p.mb-0 En el contexto de la instrumentación, estos principios permiten analizar circuitos empleados para adaptar señales provenientes de sensores.


      separador

      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Divisor de voltaje

      .bloque-texto-g.bg-color-04.p-3.p-sm-3.p-md-3.p-lg-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El divisor de voltaje es una configuración eléctrica que permite obtener una tensión de salida a partir de una tensión de entrada utilizando elementos resistivos.


    .row.mb-4.mb-lg-4.justify-content-center.align-items-center
      .col-lg-6.mb-0.mb-lg-0.order-2.order-lg-2
        p.mb-1 La tensión disponible en la salida depende de la relación existente entre los valores de las resistencias utilizadas.
        p.mb-0 Esta configuración puede emplearse para adaptar el nivel de una señal antes de enviarla a otra etapa del sistema electrónico. De esta manera, el circuito permite establecer una relación controlada entre la tensión de entrada y la tensión disponible en la salida.

      .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
        p.mb-3 Su funcionamiento puede representarse de manera general:

        .container
          .row.align-items-center.bg-color-02.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Tensión de entrada → resistencias → tensión de salida

    p.mb-2 En aplicaciones de instrumentación, el divisor de voltaje puede relacionarse con sensores cuya respuesta eléctrica varía de acuerdo con la variable física que se está midiendo.
    p.mb-4 Por ello, su comprensión permite establecer una relación entre:

    .container
      .row.align-items-center.bg-color-02.p-4.mb-0.br-15.max-cont-md
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0.text-bold Variación de la variable → variación eléctrica → adaptación de la señal → procesamiento

    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Puente de <i>Wheatstone</i>


    .container
      .row.mb-5.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.mb-4.mb-lg-0.col-md-12.order-1.order-lg-2.p-0.p-lg-2.p-xl-0
          figure
            img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-lg-3.p-xl-4.p-4
          p.mb-0 El puente de Wheatstone es una configuración utilizada para trabajar con variaciones de resistencia y obtener una respuesta eléctrica relacionada con dichas variaciones. Su aplicación resulta especialmente relevante cuando se emplean sensores cuya resistencia cambia como consecuencia de una modificación de la variable física. 

    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema1/img10.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-2 El material de formación señala su aplicación industrial con sensores cuya resistencia varía de acuerdo con diferentes variables y presenta el puente como una configuración que permite determinar el valor de una resistencia desconocida mediante el equilibrio del circuito.
        p.mb-0 De manera conceptual, el funcionamiento puede representarse así:

    .bg-full-width.bg-fondo-2
      .bg-color-02.p-4.br-15.mb-3
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-bold Variable física → Cambio en la resistencia del sensor → Desequilibrio del puente → Diferencia de potencial → Señal para procesamiento

      separador

      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.6. Relación entre acondicionamiento y procesamiento

      p.mb-3 El acondicionamiento no debe considerarse como una etapa aislada. Hace parte de una cadena en la que la información pasa desde la variable física hasta el sistema encargado de procesarla.
      p.mb-4 La secuencia general puede representarse así:

      .bg-color-02.p-4.br-15.mb-5.max-cont-md
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-bold Variable física → Sensor → Transductor → Acondicionamiento → Conversión o procesamiento → Sistema electrónico

      p.mb-4 En esta secuencia, cada elemento cumple una función específica.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img12.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              p.text-center.mb-0 La variable física corresponde a la condición del proceso que se desea conocer.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img13.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              p.text-center.mb-0 El sensor realiza la captación de dicha variable.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img14.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              p.text-center.mb-0 El transductor puede transformar o adaptar la señal.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img15.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              p.text-center.mb-0 El acondicionamiento prepara la señal para su utilización.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img16.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              p.text-center.mb-0 La conversión o procesamiento permite transformar o interpretar la información de acuerdo con las características del sistema.

    p.mb-1 Finalmente, el sistema electrónico utiliza la información obtenida para desarrollar la función correspondiente.
    p.mb-4 Esta integración permite comprender el sentido del resultado de aprendizaje relacionado con el diseño de dispositivos de acondicionamiento de señales basados en la interacción de la hidráulica, la electrónica y los sensores. 

    .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-10.mx-auto
          .bg-fondo-01.br-15.mb-4.p-4
            .col-lg-12
              p.mb-2.fw-bold Para tener presente
              p.mb-0 El acondicionamiento de señales permite adaptar la información proveniente de los sensores para que pueda ser adquirida y procesada adecuadamente por un sistema electrónico.
              p.mb-0 Este concepto será fundamental para abordar el siguiente tema.

    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10.order-lg-2.order-2
          .row.bg-fondo-08.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema1/img33.png", data-aos="fade-right").w-50.mx-auto
            .col-lg-7.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Podcast pendiente"
                tiempo
                :audio="require_src('@/assets/curso/audio/2.mp3')"
              )
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
