<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario 
      .titulo-principal__numero
        span 4
      h1 Técnicas de análisis de datos 

    .row.justify-content-center.mb-5
      .col-lg-5
        .contenedor-imagen.position-bottom-left.color-primario.mb-4.mb-lg-0
          figure.mb-4
            img(src="@/assets/curso/tema4/img01.svg")
          
      .col-lg-7
        .row.mb-4
          .col-9
          .col-3
            figure.mb-4.pt-5
              img.px-4(src='@/assets/curso/tema2/img02.svg')
        .contenedor.contenedor--texto-right
          p.mb-4 Los métodos y técnicas de análisis de datos son útiles para encontrar información en los datos, como métricas, hechos y cifras. Los dos métodos principales de análisis de datos son las técnicas de análisis de datos cualitativos y las técnicas de análisis de datos cuantitativos. 
        .contenedor.contenedor--texto-left
          p.mb-4 Estas técnicas de análisis de datos pueden utilizarse de forma independiente o en combinación con la otra para ayudar a los líderes empresariales y a los responsables de la toma de decisiones a adquirir conocimientos empresariales a partir de diferentes tipos de datos.
        .row.justify-content-center
          .col-8.col-md-4.col-lg-2
            figure.mb-4.mb-lg-0
              img(src="@/assets/curso/tema1/img09.svg")
          .col-md-9
          .col-8.col-md-3.col-lg-2
            figure.mb-4.mb-lg-0
          .col-md-9
            .row.mb-4
          .col-9
          .col-3.mb-4
            img.px-4(src='@/assets/curso/tema2/img02.svg')

    .row.mb-4
      .col-md-1
        figure.pt-4
         img(src="@/assets/curso/tema4/img02.svg") 
      .col-md-11   
        h4 Análisis de datos cuantitativos
        p.mb-4 El análisis de datos cuantitativos implica trabajar con variables numéricas, incluyendo estadísticas, porcentajes, cálculos, mediciones y otros datos, ya que la naturaleza de los datos cuantitativos es numérica. Las técnicas de análisis de datos cuantitativos suelen incluir el trabajo con algoritmos, herramientas de análisis matemático y programas informáticos para manipular los datos y descubrir ideas que revelen el valor empresarial.
        p.mb-4 Por ejemplo, un analista de datos financieros puede cambiar una o más variables en el balance de Excel de una empresa para proyectar los futuros resultados financieros de su empleador. El análisis de datos cuantitativos también puede utilizarse para evaluar los datos del mercado y ayudar a una empresa a fijar un precio competitivo para su nuevo producto.

    .linea--parrafo.mb-5
    .row
      .col-md-1
        figure.pt-4
         img(src="@/assets/curso/tema4/img03.svg") 
      .col-md-11   
        h4 Análisis de datos cualitativos
        p.mb-4 Los datos cualitativos describen información que no suele ser numérica. El enfoque del análisis de datos cualitativos implica trabajar con identificadores únicos, como etiquetas y propiedades, y variables categóricas, como estadísticas, porcentajes y medidas. En el análisis de datos cualitativos, un analista de datos puede utilizar enfoques de observación directa o participante, realizar entrevistas, organizar grupos de discusión o revisar documentos y artefactos.
        p.mb-4 Por ejemplo, las técnicas de análisis cualitativo de datos suelen formar parte del proceso de desarrollo de software. Los probadores de software registran los fallos que van desde errores funcionales hasta faltas de ortografía para determinar la gravedad de los mismos en una escala predeterminada: de crítico a bajo. Cuando se recogen, estos datos proporcionan información que puede ayudar a mejorar el producto final. 
    <br/>
    .linea--parrafo.mb-5

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img.img100(src='@/assets/curso/tema2/img16.svg')
          .col-md-8
            p Metodología datos masivos
        .contenedor-imagen.position-bottom-left.color-primario.mb-4.mb-lg-0
          figure.mb-4
            img(src="@/assets/curso/tema4/img04.svg")
          .row
        .col-9
        .col-3
          img(src='@/assets/curso/tema4/img07.svg')
        
      .col-lg-7
        .row.mb-4.pt-5
          .contenedor--texto-right-blue
            p.mb-4.pt-5 En términos de metodología, la analítica de Big Data difiere significativamente del enfoque estadístico tradicional del diseño experimental, así la analítica comienza con los datos que modelamos de forma que expliquen una respuesta para cumplir con el objetivo de este enfoque donde se busca predecir el comportamiento de la respuesta o entender cómo se relacionan las variables de entrada.
          .contenedor--texto-left-blue
            p.mb-4 Normalmente, en los diseños experimentales estadísticos, se desarrolla un experimento y se obtienen datos como resultado. Esto permite generar datos de forma que puedan ser utilizados por un modelo estadístico, donde se cumplen ciertos supuestos como la independencia, la normalidad y la aleatoriedad.
        .row.justify-content-center
          .col-8.col-md-3.col-lg-2
            figure.mb-4.mb-lg-0
          .col-md-9
            .row.mb-4
          .col-9
          .col-3.mb-4
            img.px-4(src='@/assets/curso/tema4/img05.svg')

    .bloque-texto-f.color-acento-botones-claro.pt-4.px-5.mb-5
      .bloque-texto-f__comillas
      p.text-center En el análisis de Big Data, se nos presentan los datos. No podemos diseñar un experimento que cumpla con nuestro modelo estadístico favorito. En las aplicaciones de analítica a gran escala, se necesita una gran cantidad de trabajo, normalmente el 80% del esfuerzo es solo para limpiar los datos, de modo que puedan ser utilizados por un modelo de aprendizaje automático.
      .bloque-texto-f__autor.mb-0
        .bloque-texto-f__avatar__img
          img(src='@/assets/curso/tema4/img06.svg', alt='Texto que describa la imagen')

    <br/>
    .row
      .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
        figure.p-4.pb-0.pt-0
          img.img10(src="@/assets/curso/tema4/img08.svg")
      .col-11.col-md-11.col-lg-11.contenedor--texto-right-pink2
        p.mb-4 No hay una metodología única a seguir en las aplicaciones reales a gran escala. Por lo general, una vez definido el problema de negocio, se necesita una etapa de investigación para diseñar la metodología a utilizar. Sin embargo, es relevante mencionar unas pautas generales que se aplican a casi todos los problemas.
    .contenedor--texto-left-pink2
      p.mb-4 Una de las tareas más importantes en el análisis de Big Data es el modelado estadístico; es decir, los problemas de clasificación o regresión supervisados y no supervisados. Una vez que los datos se han limpiado y pre-procesado, disponibles para el modelado, se debe tener cuidado en la evaluación de diferentes modelos con métricas de pérdida razonables y luego, una vez que el modelo se implementa, se debe informar de la evaluación y los resultados. Un error común en la modelización predictiva es limitarse a implementar el modelo y no medir nunca su rendimiento.

    <br/><br/>
    .row.mb-4
      .col-3.col-md-3.col-lg-1.mb-4.mb-lg-0
        figure
          img.img40(src="@/assets/curso/tema3/img06.svg")
      .col-9.col-md-9.col-Lg-11
          h4.pt-3 Conceptos de tecnologías y características para el manejo de datos masivos 
          p.small Los invitamos a consultar el siguiente video donde se definen conceptos de tecnologías y características para el manejo de datos masivos:
    .row
      .col-3.col-md-3.col-lg-1.mb-4.mb-lg-0
        
      .col-9.col-md-9.col-Lg-11  
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/watch?v=Xecxmof0zs0&ab_channel=EmmanuelGordilloEspinoza" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema4',
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
