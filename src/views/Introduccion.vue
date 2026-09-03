<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-4(data-aos="fade-right") En los procesos industriales, los sensores permiten captar variables físicas y generar señales relacionadas con su comportamiento. Estas señales pueden requerir acondicionamiento para que sean adecuadas para su adquisición y procesamiento electrónico.
        .container
          .row.align-items-center.bg-color-0.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block.order-2
              img(src="@/assets/curso/intro/img02.svg", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-0 El acondicionamiento permite adaptar las señales mediante diferentes dispositivos y circuitos, facilitando su conversión y representación digital. En este proceso intervienen conceptos como sensores, transductores, señales análogas y digitales y conversores análogo-digitales.

    p.mb-0(data-aos="fade-right") A partir de estos fundamentos, el componente aborda los principios básicos de los sistemas automáticos de control y la integración de sensores, señales y circuitos electrónicos para generar respuestas de control en procesos industriales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
