<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Principios básicos de sistemas automáticos de control

    img(src="@/assets/curso/tema4/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-10(data-aos="fade-right")
        p.banner-text Un sistema automático de control permite utilizar la información obtenida de un proceso para generar una respuesta sin que todas las acciones deban realizarse directamente por una persona. Para ello, el sistema recibe información mediante sensores, procesa las señales y determina una respuesta de acuerdo con las condiciones establecidas.

    p.mb-4 En un sistema de este tipo, la información debe recorrer diferentes etapas antes de convertirse en una acción. La señal proveniente del sensor puede requerir acondicionamiento, conversión y procesamiento para que el sistema pueda interpretarla.

    .row.mb-3.mb-lg-5.align-items-center
      .col-lg-11
        .bg-color-02.p-4.br-15.mb-0
          .row.align-items-center
            .col-lg-4.mb-2.mb-lg-0
              span De manera general, el funcionamiento puede representarse así:
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Proceso → variable → sensor → señal → procesamiento → acción de control

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Elementos de un sistema automático de control

    p.mb-4 Un sistema básico de control puede estar conformado por diferentes elementos que cumplen funciones específicas.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in").mx-auto

      .col-lg-8.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-2")
          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            img(src="@/assets/curso/tema4/img03.svg", style="max-width: 70px").mx-auto.mb-3
            p.mb-1.fw-bold Variable del proceso:
            p.mb-0 corresponde a la magnitud o condición que se desea observar o controlar.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            img(src="@/assets/curso/tema4/img04.svg", style="max-width: 70px").mx-auto.mb-3
            p.mb-1.fw-bold Sensor:
            p.mb-0 permite detectar la variable y generar una señal relacionada con ella.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            img(src="@/assets/curso/tema4/img05.svg", style="max-width: 70px").mx-auto.mb-3
            p.mb-1.fw-bold Acondicionador:
            p.mb-0 adapta o modifica las características de la señal obtenida del sensor.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            img(src="@/assets/curso/tema4/img06.svg", style="max-width: 70px").mx-auto.mb-3
            p.mb-1.fw-bold Procesamiento:
            p.mb-0 evalúa la información recibida para determinar la respuesta del sistema.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            img(src="@/assets/curso/tema4/img07.svg", style="max-width: 70px").mx-auto.mb-3
            p.mb-1.fw-bold Acción de control:
            p.mb-0 corresponde a la respuesta o modificación ejecutada sobre el proceso.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Señales de entrada y salida

    p.mb-1 En un sistema electrónico de control se pueden identificar señales de entrada y señales de salida.
    p.mb-1 La señal de entrada corresponde a la información que recibe el sistema. Puede provenir directamente de un sensor o de una etapa previa de acondicionamiento.
    p.mb-4 La señal de salida corresponde a la respuesta generada por el sistema como consecuencia del procesamiento de las condiciones de entrada.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-0.mb-lg-0.order-2.order-lg-1
        .bg-color-02.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Entrada → procesamiento → salida

        p.mb-3 Por ejemplo, en un sistema encargado de detectar la presencia de un objeto:

        .bg-color-02.p-4.br-15.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Sensor detecta objeto → señal de entrada → procesamiento → activación de salida

      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img09.png", data-aos="zoom-in").mx-auto

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .container
          .row.align-items-center.bg-color-0.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block.order-2
              img(src="@/assets/curso/intro/img02.svg", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-2 La salida podría utilizarse para activar un indicador, un relé u otro elemento del sistema.
              p.mb-0 Esta relación permite comprender cómo una condición física puede convertirse en una acción electrónica.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Niveles lógicos

    .row.mb-4.justify-content-center.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        p.mb-3 Los sistemas digitales necesitan establecer estados que puedan ser interpretados por los circuitos electrónicos. Estos estados se representan mediante niveles lógicos.
        p.mb-3 De manera general:

        .row.mb-3.g-3
          .col-sm-6
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold Nivel lógico 0 → estado bajo
          .col-sm-6
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold Nivel lógico 1 → estado alto

        p.mb-0 Los niveles lógicos permiten representar condiciones del proceso mediante señales que pueden ser utilizadas por circuitos digitales.
        
      .col-lg-6.mb-0.mb-lg-0
        .bg-color-01.p-4.br-15.h-100.align-content-center
          .row.align-items-center
            .col-lg-5.p-2
              p.mb-3.fw-bold Por ejemplo:
              p.mb-0 De esta manera, una condición física puede convertirse en una condición lógica que posteriormente será procesada.
            
            .col-lg-7
              .px-3.py-2.br-15.border.border-2.br-15.br-color-05.col-12
                .row.fw-bold.mb-2.pb-1
                  .col-6   Condición
                  .col-6.text-center Estado lógico
                .row.mb-0
                  .col-7 Sensor desactivado
                  .col-5.text-center 0
                .row.mb-0
                  .col-7 Sensor activado
                  .col-5.text-center 1
    
    
    p.mb-4 La señal binaria adquiere así una función importante dentro de los sistemas de control, ya que permite representar estados que pueden ser interpretados por los circuitos electrónicos.

    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Compuertas lógicas

    .bloque-texto-g.bg-color-04.p-3.p-sm-3.p-md-3.p-lg-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las compuertas lógicas son elementos utilizados para procesar señales binarias. Su funcionamiento permite establecer una relación entre una o varias entradas y generar una salida de acuerdo con una determinada condición lógica.

    .container
      .row.mb-4.align-items-stretch
        .col-lg-7.mb-4.mb-lg-0.bg-color-12.p-4.br-15
          .row
            .col-lg-4.col-md-12
              p.mb-2 Entre las compuertas utilizadas en sistemas digitales se encuentran:
            .col-lg-2.col-md-6.mb-3.mb-lg-0
              ul.lista-ul--color.mb-0
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span AND.
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span OR.
                li.d-flex.mb-0
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span NOT.
            .col-lg-2.col-md-6.mb-3.mb-lg-0
              ul.lista-ul--color.mb-0
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span NAND.
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span NOR.
                li.d-flex.mb-0
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span XOR.
            .col-lg-4
              p.mb-0 Cada una presenta una lógica de funcionamiento particular.


    .row.mb-4.justify-content-center.align-items-center
      .col-md-8.col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema4/img11.png", data-aos="zoom-in")
      .col-lg-10.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="El sensor")
            p.mb-0 La salida de una compuerta AND se activa cuando todas las entradas se encuentran activas.
            p.mb-3 Para dos entradas:
            
            .px-3.py-2.br-15.border.border-2.br-15.br-color-05.col-6.mb-2
              .row.fw-bold.mb-2.pb-1
                .col-3 A
                .col-3.text-center B
                .col-6.text-center Salida
              .row.mb-0
                .col-3 0
                .col-3.text-center 0
                .col-6.text-center 0
              .row.mb-0
                .col-3 0
                .col-3.text-center 1
                .col-6.text-center 0
              .row.mb-0
                .col-3 1
                .col-3.text-center 0
                .col-6.text-center 0
              .row.mb-0
                .col-3 1
                .col-3.text-center 1
                .col-6.text-center 1

            p.mb-2 Su comportamiento puede expresarse como:
            p.mb-0 A AND B = 1 únicamente cuando A = 1 y B = 1.


          .tarjeta.color-acento-botones--borde.p-4(titulo="El transductor")
            p.mb-0 Recibe una señal de entrada relacionada con una o más cantidades físicas y la convierte en una señal de salida, modificada o no. Dentro de los ejemplos mencionados en el material de formación se encuentran el relé, el elemento primario, el transmisor y diferentes convertidores.
          .tarjeta.color-acento-botones--borde.p-4(titulo="El acondicionador")
            p.mb-0 De señal 

    separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Circuitos combinatorios

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        p.mb-3 Los circuitos combinatorios son sistemas digitales cuya salida depende de las condiciones presentes en sus entradas. Esto significa que una modificación en las entradas puede producir una modificación en la salida de acuerdo con la lógica definida.

        .bg-color-02.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Entradas → función lógica → salida

        p.mb-0 Por ejemplo:

      .col-lg-5.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5.text-bold.mb-0 Figura 7.
          span Circuitos combinados
        figure
          img(src="@/assets/curso/tema4/img12.png", data-aos="zoom-in").mx-auto
          figcaption Nota. SENA, (2026).

    p.mb-5 Si los sensores representan condiciones diferentes de un proceso, la lógica puede determinar cuándo debe activarse la salida.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-02.br-15.mb-0.p-4.justify-content-center
          .col-lg-9.ml-11
            p.mb-1.fw-bold Ejemplo aplicado:
            p.mb-0 En una máquina industrial pueden existir dos condiciones de seguridad:
            p.mb-0 Sensor A: protección cerrada.
            p.mb-0 Sensor B: operador autorizado.
            p.mb-0 La máquina podrá iniciar únicamente cuando ambas condiciones estén activas.
            p.mb-0.text-bold La lógica sería: Protección cerrada AND operador autorizado → habilitación de máquina


    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-2
          h5.text-bold.mb-0 Tabla 3.
          span Tabla de verdad
        .tabla-a.color-acento-contenido.tb-custom.mb-2
          table
            thead
              tr
                th Protección A
                th Autorización B
                th Habilitación
            tbody
              tr
                td.text-center 0
                td.text-center 0
                td.text-center 0
              tr
                td.text-center 0
                td.text-center 1
                td.text-center 0
              tr
                td.text-center 1
                td.text-center 0
                td.text-center 0
              tr
                td.text-center 1
                td.text-center 1
                td.text-center 1
        figcaption.mb-3 Nota. SENA, (2026).

        p.mb-0 Este ejemplo permite observar cómo una condición física puede convertirse en una señal lógica y posteriormente en una decisión de control.

    separador

    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Relé como elemento de control

    p.mb-2 El relé permite establecer una relación entre un circuito de control y otro circuito que requiere ser activado o desactivado.
    p.mb-4 Su funcionamiento se basa en la acción de una bobina que, al recibir corriente, genera un campo magnético capaz de modificar la posición de sus contactos.

    .row.mb-5.align-items-center
      .col-lg-11.col-md-12
        .bg-color-02.p-4.br-15
          .row.align-items-center
            .col-lg-3.mb-2.mb-lg-0
              span De manera simplificada:
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Señal de control → bobina → movimiento de contactos → activación o desactivación de una carga

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img14.png", data-aos="zoom-in").mx-auto

      .col-lg-9.mb-0.mb-lg-0
        p.mb-4 Esta característica permite utilizar el relé como elemento de interfaz entre una señal de control y un circuito de salida. Por ejemplo, una señal proveniente de un circuito electrónico puede utilizarse para activar un relé y, mediante sus contactos, controlar otro circuito.

        .row.align-items-center.justify-content-stretch.g-3
          .col-sm-auto
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold Circuito de control
          .col-sm-auto.text-center
            span.fw-bold de
          .col-sm-auto
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold Circuito controlado

    separador

    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.7 Diagrama eléctrico de un sistema de control

    .row.mb-4.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0
        p.mb-0 El diagrama eléctrico permite representar gráficamente las conexiones y relaciones entre los elementos que conforman un sistema.
      .col-lg-8
        .bg-color-02.p-4.br-15
          .row.align-items-center
            .col-lg-4.mb-2.mb-lg-0
              span En una aplicación básica pueden identificarse:
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Entrada → procesamiento → salida

    separador

    #t_4_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.8 Automatización industrial

    .row.mb-4.align-items-center.justify-content-center
      .col-lg-2.col-md-12.mb-4.mb-lg-0
        p.mb-0 La automatización industrial integra diferentes elementos tecnológicos para controlar procesos con una intervención humana reducida.

      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .bg-color-12.p-4.br-15.h-100
          p.mb-2 Dentro de estos sistemas pueden participar:
          .row
            .col-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span Sensores.
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span Transductores.
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span Circuitos de acondicionamiento.
                li.d-flex.mb-0
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span Sistemas de procesamiento.
            .col-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span Circuitos lógicos.
                li.d-flex.mb-1
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span Relés.
                li.d-flex.mb-0
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span Elementos de actuación.

      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img15.png", data-aos="zoom-in").mx-auto

    p.mb-3 La instrumentación industrial proporciona la información necesaria sobre las variables del proceso, mientras que los sistemas de control utilizan dicha información para establecer respuestas.

    p.mb-3 La relación puede representarse así:

    .row.mb-5.align-items-center
      .col-lg-12
        .bg-color-02.p-4.br-15.max-cont-md
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Instrumentación → información → procesamiento → control → actuación

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-03.p-4.br-15.mb-3
          .row.align-items-center
            .col-lg-9.mb-3.mb-lg-0
              h5.fw-bold.mb-2 Ejemplo:
              p.mb-2 Considérese una banda transportadora que debe detenerse cuando un sensor detecte una condición determinada.
              p.mb-1 El funcionamiento básico puede ser:
              p.mb-2.fw-bold Sensor detecta la condición → Generación de señal → Acondicionamiento → Procesamiento lógico → Activación del relé → Desactivación del motor
              p.mb-0 En este ejemplo se integran los conceptos desarrollados en los temas anteriores: captación, señal, acondicionamiento, procesamiento y acción de control.
            .col-lg-3
              img(src="@/assets/curso/tema2/img04.png", data-aos="zoom-in", style="max-width: 170px").mx-auto

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-01.br-15.mb-4.p-4
          p.mb-2.fw-bold Para tener presente
          p.mb-0 Un sistema automático de control utiliza información obtenida del proceso para establecer una respuesta de acuerdo con condiciones previamente definidas.


</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
