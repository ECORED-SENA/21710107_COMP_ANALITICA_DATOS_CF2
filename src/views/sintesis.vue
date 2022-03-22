<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row
      .col-1.col-md-1.col-lg-1.mb-lg-0
        figure.mb-4.pt-0
          img.img10(src='@/assets/curso/tema3/img12.svg')
      .col-10.col-md-10.col-lg-10
        .contenedor--texto-left-pink5
          p.mb-5 La administración del registro de datos se centra en los principios clave y las buenas prácticas para presentar conjuntos de datos pequeños y medianos con el objetivo de comparar los resultados de diferentes grupos experimentales. Como regla general, se deben mostrar la mayor cantidad posible de datos reales en lugar de resumir los conjuntos de datos mediante la estadística descriptiva, teniendo en cuenta instrumentos de validación, confidencialidad de la información, técnicas de análisis de datos y el proceso administrativo de la organización. 
      .col-1.col-md-1.col-lg-1.mb-lg-0
        figure.mb-4.pt-0.justify-content-center.align-items-center
          img.img10(src='@/assets/curso/tema3/img12.svg')

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/Sintesis.svg", alt="alt")
      .col-auto
        //a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
