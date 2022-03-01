<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 2
      h1 Instrumentos de validación 

    .row.justify-content-center.mb-5
      .col-lg-5
        .contenedor-imagen.position-bottom-left.color-primario.mb-4.mb-lg-0
          figure.mb-4
            img(src="@/assets/curso/tema2/img01.svg")
          .row
        .col-9
        .col-3
          img(src='@/assets/curso/tema2/img04.svg')
        
      .col-lg-7
        .row
          .col-9
          .col-3
            figure.mb-4
              img.px-4(src='@/assets/curso/tema2/img02.svg')
        p.mb-4 La prueba de validación de datos es un proceso que permite al usuario comprobar que los datos proporcionados, con los que trata, son válidos o completos. La prueba de validación de datos se encarga de validar los datos y las bases de datos con éxito a través de las transformaciones necesarias sin pérdida. También verifica que la base de datos se mantiene con datos específicos e incorrectos correctamente. 
        p.mb-4 En palabras sencillas, la validación de datos es una parte de las pruebas de bases de datos, en la que se comprueba que los datos introducidos son válidos o no de acuerdo con las condiciones de negocio previstas.
        .row.justify-content-center
          .col-8.col-md-3.col-lg-2
            figure.mb-4.mb-lg-0
          .col-md-9
            .row.mb-4
          .col-9
          .col-3.mb-4
            img.px-4(src='@/assets/curso/tema2/img03.svg')
      
    <br/><br/>
      p.mb-4 El proceso de validación de datos consta de cuatro pasos importantes:

      .row.justify-content-center-align-items-center
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img05.svg' alt="AvatarTop" height="250")
            .tarjeta.tarjeta--azul.p-4 
              .px-5 
                h3 1. Plan de detalle
                p.mb-0 Es el paso más crítico, para crear la hoja de ruta adecuada para la validación de datos. Se trata de la expectativa general si hay un problema en los datos de origen, entonces ¿cómo resolver ese problema? Se trata de definir el número de iteraciones necesarias durante la validación de los datos.

        .col-lg-6
          .tarjeta-avatar-b.mb-5 
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop' height="250")
            .tarjeta.tarjeta--azul.p-4
              .px-5
                h3 2. Validación de la base de datos
                p.mb-0 Se encarga de garantizar que todos los datos aplicables están presentes desde el origen hasta el destino. Este paso es responsable de determinar el número de registros, el tamaño de los datos, la comparación de la fuente y el destino basado en el campo de datos. 

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop' height="250")
            .tarjeta.tarjeta--azul.p-4
              .px-5
                h3 3. Validar el formato de los datos
                p.mb-0 El objetivo principal es que los datos se entiendan claramente en el sistema de destino, los usuarios finales deben entender claramente los datos si están cumpliendo las expectativas del negocio o no.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop' height="250")
            .tarjeta.tarjeta--azul.p-4
              .px-5
                h3 4. Muestreo
                p.mb-0 Antes de probar el gran conjunto de datos, es necesario hacer un muestreo. Es esencial hacer pruebas con una pequeña cantidad de datos y comprobar si los datos de la muestra cumplen con los requisitos de la empresa, en caso afirmativo, sólo se procederá con un gran conjunto de datos. De este modo, se reducirá la tasa de error de los datos y aumentará la calidad y la precisión de los mismos.
                 
        <br/><br/>
        p.mb-4 La validación de datos se realiza normalmente utilizando un lenguaje comercial. Por ejemplo, se puede crear un archivo XML (método de almacenamiento) con los nombres de las bases de datos de origen y destino, los nombres de las tablas y las columnas a comparar. El sistema de información elegido puede entonces tomar el XML como entrada y procesar los resultados. Sin embargo, esto puede requerir mucho tiempo, ya que hay que escribir los datos y verificar los resultados a mano. De esta manera se comparte en el siguiente recurso las herramientas empresariales y las herramientas de código abierto, que se anexan como opciones para la verificación de datos:

    .row.justify-content-center.mb-5
      .col-3.col-md-3.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
          .tarjeta.colorf
            .p-4
              h2.text-center Herramientas empresariales
              p Existen herramientas empresariales para realizar la validación de datos que  pueden validar y reparar datos. Las herramientas empresariales tienen la ventaja de ser más estables y seguras, pero pueden requerir infraestructura y son más costosas que las opciones de código abierto.

      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.colorf
            .p-4
              h2.text-center Herramientas de código abierto
              p Las opciones de código abierto son rentables y, si están basadas en la nube, también pueden ahorrarle dinero en costos de infraestructura. Pero siguen requiriendo un nivel de conocimiento y codificación manual para poder utilizarlas de forma eficaz.
           
    .row.justify-content-center.mb-5
      .col-lg-5
        .contenedor-imagen.position-bottom-left.color-primario.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img14.png")
      .col-lg-7
        figure.mb-4.mb-lg-0
          img(src="@/assets/curso/tema2/img15.png")
        .row.justify-content-center.align-items-center.mb-5
          p.mb-0.pt-5 Para realizar la validación de datos es clave si queremos tener datos fiables, consistentes, precisos y completos. Para conseguir pruebas de validación eficientes, fáciles de ejecutar y acordes con los requisitos actuales, es necesario contar con soluciones que las optimicen a través de diferentes opciones y automatizaciones, entre otras la opción de validación de datos de informática.
        .row.justify-content-center
          .col-8.col-md-3.col-lg-2
            figure.mb-4.mb-lg-0
          .col-md-9
            .row.mb-4
          .col-10
          .col-2.mb-4
            img.img90(src='@/assets/curso/tema2/img16.svg')
          
          
</template>

<script>
export default {
  name: 'Tema2',
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
