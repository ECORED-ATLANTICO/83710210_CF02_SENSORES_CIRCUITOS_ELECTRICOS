<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Integración de sensores y sistemas electrónicos de control

    .bg-full-width.bg-fondo-1
      .bloque-texto-g.bg-color-02.p-3.p-sm-3.p-md-3.p-lg-4.mb-4.mb-lg-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La integración de sensores, circuitos de acondicionamiento y sistemas electrónicos de control permite establecer una relación entre las variables físicas de un proceso y las acciones que se ejecutan sobre este. En una aplicación industrial, la información no se limita a ser medida; debe ser captada, adaptada, procesada e interpretada para determinar una respuesta.

      separador

      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 De la captación a la acción de control

      p.mb-4 El funcionamiento de un sistema básico puede comprenderse mediante una secuencia de etapas:

      .row.mb-4.align-items-center
        .container
          .bg-color-02.p-4.br-15.mb-0.max-cont-md
            .row.align-items-center
              .col-lg-auto.d-none.d-lg-block
                img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0.text-bold Variable física → sensor → acondicionamiento → procesamiento → control → actuación

      p.mb-4 Cada etapa cumple una función específica.

      .row.mb-4.justify-content-center.align-items-center
        .col-lg-8.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
          SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
              img(src="@/assets/curso/tema5/img03.svg", style="width: 70px; height: 50px").mx-auto.mb-4.mb-lg-4.mt-3
              p.mb-0 La variable física corresponde a la condición del proceso que se desea conocer o controlar.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
              img(src="@/assets/curso/tema5/img04.svg", style="width: 70px; height: 50px").mx-auto.mb-4.mb-lg-4.mt-3
              p.mb-0 El sensor permite captar dicha variable y generar una señal relacionada con ella.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
              img(src="@/assets/curso/tema5/img05.svg", style="width: 70px; height: 50px").mx-auto.mb-4.mb-lg-4.mt-3
              p.mb-0 El acondicionamiento adapta la señal para facilitar su adquisición y procesamiento.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
              img(src="@/assets/curso/tema5/img06.svg", style="width: 70px; height: 50px").mx-auto.mb-4.mb-lg-4.mt-3
              p.mb-0 El procesamiento permite interpretar la información recibida y establecer una condición lógica o una decisión.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
              img(src="@/assets/curso/tema5/img07.svg", style="width: 70px; height: 50px").mx-auto.mb-4.mb-lg-4.mt-3
              p.mb-0 El control determina la respuesta que debe generarse.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
              img(src="@/assets/curso/tema5/img08.svg", style="width: 70px; height: 50px").mx-auto.mb-4.mb-lg-4.mt-3
              p.mb-0 Finalmente, la actuación permite modificar o intervenir sobre el proceso.

        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in").mx-auto

      p.mb-4.mb-lg-5 Esta secuencia integra los conocimientos abordados durante el componente formativo.

      
    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-02.br-15.mb-0.p-4.justify-content-center
          .col-lg-9.ml-11
            h5.fw-bold.mb-2 Ejemplo aplicado
            p.mb-1 Considérese un sistema encargado de controlar el nivel de un tanque.
            p.mb-1 La variable de interés corresponde al <b>nivel del líquido</b>.
            p.mb-0 El sistema puede desarrollarse conceptualmente de la siguiente manera:

    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 9.
          span Sistema
        img.d-none.d-lg-block.mb-3(src="@/assets/curso/tema5/img09.png", alt="Diagrama de flujo vertical que representa un sistema de medición y control del nivel de un tanque. El proceso inicia con Nivel del tanque, que pasa a un Sensor. Luego, la señal continúa hacia un Acondicionador de señal, seguido de Procesamiento electrónico y Circuito de control. Finalmente, el circuito activa una Bomba / válvula. Las etapas están representadas en recuadros y conectadas mediante flechas descendentes.", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none.mb-3(src="@/assets/curso/tema5/img10.png", alt="Diagrama de flujo vertical que representa un sistema de medición y control del nivel de un tanque. El proceso inicia con Nivel del tanque, que pasa a un Sensor. Luego, la señal continúa hacia un Acondicionador de señal, seguido de Procesamiento electrónico y Circuito de control. Finalmente, el circuito activa una Bomba / válvula. Las etapas están representadas en recuadros y conectadas mediante flechas descendentes.", data-aos="zoom-in").mx-auto
        figcaption.mb-0 Nota. SENA, (2026).

    p.mb-2 En este ejemplo, el sensor proporciona información sobre el nivel. La señal puede requerir acondicionamiento y posteriormente ser procesada para determinar si el sistema debe activar o desactivar un elemento de actuación.
    p.mb-4 De esta manera, una condición física del proceso puede convertirse en una acción de control.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Aplicación de sensores y control en procesos industriales

    p.mb-3 La utilización de sensores en procesos industriales permite obtener información sobre diferentes variables y condiciones de funcionamiento. Dependiendo de la aplicación, pueden utilizarse sensores de temperatura, presión, nivel, posición, proximidad, desplazamiento u otras magnitudes.
    p.mb-3 La selección del sensor debe responder a las características de la variable que se desea captar y a las condiciones del proceso.
    p.mb-3 Una vez obtenida la señal, esta puede requerir acondicionamiento antes de ser procesada. En este punto adquieren importancia los circuitos estudiados anteriormente, como el divisor de tensión y el puente de Wheatstone, así como los procesos de conversión de señales.
    p.mb-4 La información procesada puede utilizarse posteriormente para establecer una condición de control.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Ejemplo: detección de presencia

    .row.mb-4.justify-content-center.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        p.mb-3 En una banda transportadora puede utilizarse un sensor para detectar la presencia de una pieza.
        p.mb-4 El funcionamiento básico puede establecerse así:

        .row.g-3.justify-content-center.mb-0
          .col-sm-6
            .bg-color-08.p-3.br-15.text-center
              p.mb-0.fw-bold Pieza ausente → sensor = 0
          .col-sm-6
            .bg-color-08.p-3.br-15.text-center
              p.mb-0.fw-bold Pieza presente → sensor = 1

      .col-lg-6.mb-0.mb-lg-0
        .bg-color-01.p-4.br-15.h-100
          p.mb-1 La señal puede ser procesada mediante una condición lógica para determinar la respuesta del sistema.
          p.mb-2 Por ejemplo:

          .row.align-items-center.justify-content-center.mb-0
            .col-sm-auto
              .bg-color-02.p-2.py-3.br-15.text-center
                p.mb-0.fw-bold Sensor = 1 → activar indicador
            .col-sm-auto.text-center
              span.fw-bold o
            .col-sm-auto
              .bg-color-02.p-2.py-3.br-15.text-center
                p.mb-0.fw-bold Sensor = 1 → detener la banda

    p.mb-4 La acción dependerá de las condiciones establecidas para el proceso. Este ejemplo permite integrar:

    .row.mb-5.align-items-center
      .container
        .bg-color-02.p-4.br-15.mb-0.max-cont-md
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Sensor → señal binaria → lógica de control → salida

    
    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Ejemplo: condición de seguridad

    .container
      .row.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.mb-4.mb-lg-0.col-md-12.order-1.order-lg-2.p-0.p-lg-2.p-xl-0
          figure
            img(src="@/assets/curso/tema5/img11.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-lg-3.p-xl-4.p-4
          p.mb-0 En una máquina pueden utilizarse dos sensores para garantizar que determinadas condiciones de seguridad se encuentren activas antes de permitir su funcionamiento.

    .row.mb-4.mb-lg-5.justify-content-center.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        .bg-color-01.p-4.br-15.mb-4
          p.mb-1.fw-bold Por ejemplo:
          p.mb-1 <b>Sensor A:</b> protección cerrada.
          p.mb-3 <b>Sensor B:</b> condición de operación habilitada.
          
          .row.align-items-center
            .col-lg-7.mb-2.mb-lg-0
              p.mb-0 La máquina puede funcionar únicamente cuando:
            .col-lg-5.text-center
              .px-3.py-2.br-10.d-inline-block.border.border-2.border-success
                p.mb-0.fw-bold A = 1 AND B = 1

        p.mb-3 La salida del circuito lógico puede utilizarse para habilitar un relé que permita la operación del equipo.
        p.mb-0 La representación sería:

      .col-lg-6.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 10.
          span Salida de circuito
        img.d-none.d-lg-block.mb-3(src="@/assets/curso/tema5/img12.png", alt="Diagrama de un sistema de control lógico. Sensor A y Sensor B proporcionan señales de entrada a un bloque lógico AND. La salida del bloque AND se dirige mediante una flecha hacia un Relé, que a su vez envía la señal hacia una Máquina. El diagrama representa una condición en la que las señales de ambos sensores deben estar activas para accionar la máquina.", data-aos="zoom-in").mx-auto
        img.d-block.d-lg-none.mb-3(src="@/assets/curso/tema5/img13.png", alt="Diagrama de un sistema de control lógico. Sensor A y Sensor B proporcionan señales de entrada a un bloque lógico AND. La salida del bloque AND se dirige mediante una flecha hacia un Relé, que a su vez envía la señal hacia una Máquina. El diagrama representa una condición en la que las señales de ambos sensores deben estar activas para accionar la máquina.", data-aos="zoom-in").mx-auto
        figcaption.mb-3 Nota. SENA, (2026).

        p.mb-0 Este tipo de aplicación permite observar cómo las señales obtenidas mediante sensores pueden utilizarse para establecer condiciones de control.

    .bg-full-width.bg-fondo-2
      separador

      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Relación entre electrónica, sensores y automatización

      .row.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/img14.png", data-aos="zoom-in").mx-auto

        .col-lg-8.col-md-12.mb-0.mb-lg-0
          p.mb-4 La automatización industrial requiere la integración de diferentes elementos para obtener información, procesarla y actuar sobre el proceso.

          .row.mb-4.align-items-center
            .col-lg-8.mb-3.mb-lg-0
              .bg-color-12.p-4.br-15.h-100
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Los sensores proporcionan la información.
                  li.d-flex.mb-2
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Los transductores permiten transformar o adaptar las señales.
                  li.d-flex.mb-2
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Los circuitos de acondicionamiento preparan la información.
                  li.d-flex.mb-2
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Los sistemas electrónicos procesan las señales.
                  li.d-flex.mb-2
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Los circuitos de control determinan las condiciones de respuesta.
                  li.d-flex.mb-0
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Los elementos de actuación ejecutan las acciones sobre el proceso.

            .col-lg-4.align-self-center
              p.mb-0 Esta relación puede sintetizarse de la siguiente manera:

          .bg-color-02.p-4.br-15.mb-0.max-cont-md
            .row.align-items-center
              .col-lg-auto.d-none.d-lg-block
                img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0.text-bold Captar → acondicionar → convertir → procesar → decidir → actuar

      separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Análisis de una solución básica de control

    p.mb-2 Para plantear una solución básica de control es necesario partir de la situación que se desea resolver.
    p.mb-4 Un procedimiento general puede considerar las siguientes preguntas:

    .row.align-items-center.mb-2.mb-lg-4(data-aos="fade-right")
      .col-lg-12.col-xl-10.mx-auto
        .bg-fondo-07.br-15.mb-4
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.col-xl-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema2/img14.png").mx-auto
            .col-lg-9.col-xl-9.order-1.order-lg-1.p-5.p-lg-4
              .row.align-items-center
                .col-lg-6.mb-3.mb-lg-0
                  p.mb-1.fw-bold ¿Qué variable debe ser controlada?
                  p.mb-2 Permite identificar la condición física que debe ser medida o detectada.
                  p.mb-1.fw-bold ¿Qué sensor permite obtener la información?
                  p.mb-2 Permite seleccionar el dispositivo de captación de acuerdo con la variable y las condiciones del proceso.
                  p.mb-1.fw-bold ¿Qué características tiene la señal obtenida?
                  p.mb-0 Permite determinar si la señal puede ser procesada directamente o requiere acondicionamiento.

                .col-lg-6.mb-0.mb-lg-0
                  p.mb-1.fw-bold ¿Qué circuito puede utilizarse para acondicionarla?
                  p.mb-2 Permite seleccionar una configuración adecuada según las características de la señal.
                  p.mb-1.fw-bold ¿Cómo será procesada la información?
                  p.mb-2 Permite determinar si se requiere una señal binaria, una conversión análogo-digital o una condición lógica.
                  p.mb-1.fw-bold ¿Qué respuesta debe generar el sistema?
                  p.mb-0 Permite establecer la acción que deberá realizar el elemento de salida.
        
        p.mb-0 Este análisis permite pasar de una situación del proceso a una propuesta básica de solución.


    separador

    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Integración del proceso

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img15.png", data-aos="zoom-in").mx-auto

      .col-lg-9.col-md-12.mb-0.mb-lg-0
        p.mb-2 A partir de los contenidos desarrollados, un sistema básico de control puede visualizarse como una cadena en la que cada etapa cumple una función.
        p.mb-3 La cadena permite comprender que el sistema funciona mediante un flujo de información y no mediante elementos independientes.

        .bg-color-08.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg
              p.mb-0 Por ejemplo, si un sensor detecta una condición determinada, la señal obtenida debe llegar al circuito de procesamiento con las características apropiadas. El sistema interpreta dicha información y genera una respuesta. Esta respuesta puede modificar nuevamente las condiciones del proceso.
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img04.svg", style="max-width: 80px").mx-auto

        p.mb-0 De esta manera se establece una relación entre medición, adquisición de señales y control.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-02_2.br-15.mb-0.p-4.justify-content-center
          .col-lg-9
            h5.fw-bold.mb-2 Situación integradora
            p.mb-3 Una aplicación industrial requiere controlar el funcionamiento de una bomba de acuerdo con una condición determinada del proceso.
            p.mb-0 Para plantear una solución básica pueden identificarse las siguientes etapas:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 4.
          span Etapas
        .tabla-a.color-acento-contenido.tb-custom.mb-3
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Etapa
                th Elemento
                th Función
            tbody
              tr
                td.fw-bold.text-center Variable
                td.text-center Condición del proceso
                td.text-center Determinar qué se desea controlar
              tr
                td.fw-bold.text-center Captación
                td.text-center Sensor
                td.text-center Detectar la variable
              tr
                td.fw-bold.text-center Acondicionamiento
                td.text-center Circuito electrónico
                td.text-center Adaptar la señal
              tr
                td.fw-bold.text-center Procesamiento
                td.text-center Circuito lógico
                td.text-center Interpretar la condición
              tr
                td.fw-bold.text-center Control
                td.text-center Relé
                td.text-center Establecer la acción
              tr
                td.fw-bold.text-center Actuación
                td.text-center Bomba
                td.text-center Intervenir sobre el proceso

        p.mb-0 La solución permite observar cómo los conocimientos desarrollados se relacionan en una aplicación concreta.
    
    .bg-full-width.bg-fondo-2

      separador

      #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.6 Consideraciones para la implementación

      img(src="@/assets/curso/tema5/img16.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La implementación de un sistema electrónico básico de control requiere analizar las características de cada elemento antes de establecer las conexiones.

      p.mb-4 Se deben considerar, entre otros aspectos:

      .row.mb-4.mb-lg-5.justify-content-center.align-items-stretch
        .col-lg-8.mb-4.mb-lg-0
          .bg-color-12.p-4.br-15.h-100
            .row
              .col-sm-6
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span La variable que se desea detectar.
                  li.d-flex.mb-1
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span El tipo de sensor requerido.
                  li.d-flex.mb-1
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Las características de la señal de salida.
                  li.d-flex.mb-1
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Las condiciones de alimentación eléctrica.
                  li.d-flex.mb-0
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span La necesidad de acondicionamiento.
              .col-sm-6
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span El tipo de procesamiento requerido.
                  li.d-flex.mb-1
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Las condiciones lógicas de funcionamiento.
                  li.d-flex.mb-1
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span El elemento de salida.
                  li.d-flex.mb-0
                    i.fas.fa-square.me-2(style="color: #74A2F2;")
                    span Las características del proceso que será controlado.

        .col-lg-4.col-md-12.mb-0.mb-lg-0
          p.mb-2 El análisis previo permite reducir errores en la selección de los dispositivos y facilita la construcción de una solución coherente con las necesidades del proceso.
          p.mb-0 Escuche el siguiente pódcast para integrar los conceptos estudiados y reconocer cómo una señal puede ser procesada hasta generar una acción dentro de un sistema automático de control.

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
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
