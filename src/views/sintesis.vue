<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    
    img(src="@/assets/curso/intro/img04.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-right")
        p.banner-text En el desarrollo del componente se estudian los principios eléctricos relacionados con tensión, corriente y resistencia, así como la aplicación de la Ley de Ohm en circuitos básicos utilizados para el acondicionamiento de señales. Se profundiza en configuraciones como el divisor de tensión y el puente de Wheatstone, comprendiendo su utilidad para adaptar señales provenientes de sensores y obtener respuestas eléctricas relacionadas con las variables físicas del proceso.
      
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/intro/img03.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3 Asimismo, se abordan las características de las señales análogas y digitales, los estados binarios, los niveles lógicos y la relación entre los sistemas decimal y binario. Estos conocimientos permiten comprender el proceso de conversión de una señal análoga a una representación digital mediante los conversores análogo-digitales (ADC), así como la importancia de la resolución para representar diferentes niveles de una señal.
      
        .bg-color-02.p-3.br-15.mb-0
         p.mb-0 Posteriormente, el componente introduce los principios básicos de los sistemas automáticos de control, identificando sus principales elementos, las señales de entrada y salida, los niveles lógicos, las compuertas lógicas y los circuitos combinatorios. También se incorpora el relé como elemento de interfaz entre el circuito de control y el circuito controlado, relacionando estos conceptos con aplicaciones básicas de automatización industrial.
    
    p.mb-4 Finalmente, los conocimientos se integran mediante situaciones aplicadas en las que intervienen sensores, circuitos de acondicionamiento, procesamiento lógico, elementos de control y dispositivos de actuación. De esta manera, el aprendiz comprende la relación existente entre captar, acondicionar, convertir, procesar, decidir y actuar, fortaleciendo su capacidad para analizar variables de un proceso y plantear soluciones básicas de control acordes con las características de la señal y las necesidades del sistema.

    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Gráfico de síntesis del componente formativo acondicionamiento y control donde se describe: el acondicionamiento de señales, conversión y representación de señales, circuitos básicos para el acondicionamiento, principios básicos de sistemas automáticos de control e integración y sistemas electrónicos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
