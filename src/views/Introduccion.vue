<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-3.col-md-3.col-lg-1.mb-4.mb-lg-0
        figure.px-3
        img(src="@/assets/curso/img_intro.png")
      .col-12.col-md-9.col-Lg-11  
        p.mb-5 Para dar comienzo a las temáticas abordadas en este componente, es importante observar el siguiente vídeo como introducción a los contenidos principales de este espacio formativo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    .row
      .col-3.col-md-3.col-lg-1.mb-4.mb-lg-0
        figure.px-3
        img(src="@/assets/curso/img_intro.png")
      .col-12.col-md-9.col-Lg-11      
        p.mb-5 Luego de observar el video introductorio, analiza la siguiente información que se presenta en el video Administración registros de la empresa, allí de manera detallada se ilustra los contenidos definidos para este componente. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PtUbgLEm5kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
       
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
