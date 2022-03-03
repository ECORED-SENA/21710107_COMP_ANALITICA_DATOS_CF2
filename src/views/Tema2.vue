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
      
    <br/>
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
            img.img90(src='@/assets/curso/tema2/img16.svg').mb-4
      
      h4.titulo-cuarto Tipos de instrumentos de validación 
      .row.justify-content-center.align-items-center
        .col-md-6
          .cajon-b.color-primario.p-0
            p.pt-4.mb-4 La validación requiere pruebas documentadas de que un proceso se ajusta sistemáticamente a los requisitos. Para ello, primero hay que obtener un proceso que se ajuste sistemáticamente a los requisitos y, a continuación, realizar estudios que lo demuestren. Las herramientas estadísticas pueden ayudar en ambas tareas.
            p.mb-4 Hay muchos tipos de validación de datos. La mayoría de los procedimientos de validación de datos realizan una o varias de estas comprobaciones para garantizar que los datos son correctos antes de almacenarlos en la base de datos. 
        .col-md-6
          figure.mb-4
            img(src='@/assets/curso/tema2/img17.svg')

    .row.justify-content-center.align-items-center
      .col-3.col-md-3.col-lg-1.mb-4.mb-4-lg-0
        figure
        img(src="@/assets/curso/tema2/imgdobleflecha.svg")
      .col-12.mb-4.col-md-9.col-Lg-11  
        p.p.pt-4.mb-4 Los tipos comunes de comprobaciones de validación de datos incluyen los que observamos en las siguientes tarjetas:

   
    .row.mb-5.justify-space-evenly
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.justify-center.pt-5
              img.img125(src='@/assets/curso/tema2/img18.svg')
              div
                h3.p-4.text-center 1. Comprobación del tipo de datos
              
            .tarjeta-flip__contenido.p-2.p-xl-5
              h3.pt-0.m-0.text-center 1. Comprobación del tipo de datos
              p.m-0 Una comprobación del tipo de datos confirma que los datos introducidos son del tipo correcto. Por ejemplo, un campo puede aceptar sólo datos numéricos. Si este es el caso, cualquier dato que contenga otros caracteres, como letras o símbolos especiales, será rechazado por el sistema.   

      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.justify-center.pt-5
              img.img125(src='@/assets/curso/tema2/img19.svg')
              div
                h3.p-4.text-center 2. Comprobación de código 
              
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3 2. Comprobación de código
              p Una comprobación de código garantiza que un campo se selecciona de una lista válida de valores o sigue ciertas reglas de formato. Por ejemplo, es más fácil comprobar que un código postal es válido cotejándolo con una lista de códigos válidos. El mismo concepto puede aplicarse a otros elementos como los códigos de país y los códigos industriales
      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.justify-center.pt-5
              img.img125(src='@/assets/curso/tema2/img20.svg')
              div
                h3.p-4.text-center 3. Comprobación de rangos
              
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.pt-2.text-center 3. Comprobación de rangos
              p Una comprobación de rango verifica si los datos introducidos se encuentran dentro de un rango predefinido. Por ejemplo, la latitud y la longitud se utilizan habitualmente en los datos geográficos. Un valor de latitud debe estar entre -90 y 90, mientras que un valor de longitud debe estar entre -180 y 180. Cualquier valor fuera de este rango no es válido.

    .row.mb-5.justify-space-evenly
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.justify-center.pt-5
              img.img125(src='@/assets/curso/tema2/img21.svg')
              div
                h3.p-4.text-center 4. Comprobación del formato
              
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.pt-2.text-center 4. Comprobación del formato
              p Muchos tipos de datos siguen un formato predefinido. Un caso de uso común son las columnas de fecha que se almacenan en un formato fijo como "AAAA-MM-DD" o "DD-MM-AAAA". Un procedimiento de validación de datos que garantice que las fechas tienen el formato adecuado ayuda a mantener la coherencia entre los datos y a lo largo del tiempo.  

      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.justify-center.pt-5
              img.img125(src='@/assets/curso/tema2/img22.svg')
              div
                h3.p-4.text-center 5. Comprobación de consistencia
              
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.pt-2.text-center 5. Comprobación de consistencia
              p Una comprobación de coherencia es un tipo de comprobación lógica que confirma que los datos se han introducido de forma lógicamente coherente. Un ejemplo es comprobar si la fecha de entrega es posterior a la fecha de envío de un paquete.
      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.justify-center.pt-5
              img.img125(src='@/assets/curso/tema2/img23.svg')
              div
                h3.p-4.text-center 6. Comprobación de unicidad
              
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.pt-2.text-center 6. Comprobación de unicidad
              p Algunos datos, como las identificaciones o las direcciones de correo electrónico, son únicos por naturaleza. Una base de datos debería tener entradas únicas en estos campos. Una comprobación de unicidad garantiza que un elemento no se introduzca varias veces en una base de datos.



    .row.justify-content-center.align-items-center
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema2/img24.png')
        .col-md-7
          p.pt-4.mb-4 De esta manera, el tipo de validación comprueba que los datos no sean demasiado cortos o largos y que los datos se han introducido en un campo de un valor está dentro del rango especificado, como se resume a continuación:
              figure.mb-4.flex-end
                img.img90(src='@/assets/curso/tema2/img16.svg').pt-4
      
    .tabla-b.mb-5
      .tabla-b__header.tarjeta--azul
        h5.mb-4.colortext1 Los datos cualitativos
      table
        tr
          td Comprobación de la longitud
          td Comprueba que los datos no sean demasiado cortos o demasiado largos
        tr      
        tr
          td Tabla de búsqueda
          td Busca valores aceptables en una tabla
        tr 
        tr
          td Comprobación de presencia
          td Comprueba que se han introducido datos en un campo
        tr 
        tr
          td Comprobación de rango 
          td Comprueba que un valor está dentro del rango especificado
        tr  

    .tarjeta--azul.mb-4    
        p.mb-0 La validación de datos proporciona al usuario diferentes tipos de comprobaciones, basadas en el tipo de datos de la celda. También permite al usuario definir comprobaciones de validación personalizadas utilizando fórmulas de Excel. La validación de datos se encuentra en la sección Herramientas de datos de la pestaña Datos de la cinta de Excel.
        
      

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
