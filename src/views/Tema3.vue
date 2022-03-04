<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario 
      .titulo-principal__numero
        span 3
      h1 Confidencialidad de la información

    .row.justify-content-center.mb-5
      .col-lg-5
        .contenedor-imagen.position-bottom-left.color-primario.mb-4.mb-lg-0
          figure.mb-4
            img(src="@/assets/curso/tema3/img01.svg")       
      .col-lg-7
        .row
          figure.mb-5.pt-2.flex-end
            img.img100(src='@/assets/curso/tema2/img02.svg')
        .contenedor--texto-right-pink3
          p.mb-4.pt-5 Por información confidencial se entiende la comunicación personal o la información relacionada con la actividad de una organización que es desconocida para el público y solo se comparte entre unas pocas personas. Esta información llega a manos de las diferentes entidades a través de su trabajo.
        .contenedor--texto-left
          p.mb-4 Algunos ejemplos comunes de información confidencial son, entre otros, los presentados en la siguiente infografía: 
        .row
          figure.mb-4.pt-5.flex-end
            img.img100(src='@/assets/curso/tema2/img02.svg')

    .row.justify-content-center-align-items-center
      ImagenInfografica.color-acento-botones.mb-5.center-center-column
        template(v-slot:imagen)
          figure.mb-4
            img.img800(src='@/assets/curso/tema3/img02.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="21%" y="47%" numero="1")
          p Documentos marcados como confidenciales.
        
        .tarjeta.color-acento-botones.p-3(x="18%" y="25%" numero="2")
          p Listas y datos de clientes.

        .tarjeta.color-acento-botones.p-3(x="27%" y="9%" numero="3")
          p Información financiera no publicada.

        .tarjeta.color-acento-botones.p-3(x="63%" y="3%" numero="4")
          p Propiedad intelectual, como patentes, fórmulas y nuevas tecnologías.

        .tarjeta.color-acento-botones.p-3(x="72%" y="15%" numero="5")
          p Datos de partes externas.

        .tarjeta.color-acento-botones.p-3(x="75%" y="30%" numero="6")
          p Información sobre el negocio y los productos, como los precios, el marketing y otras estrategias.

        .tarjeta.color-acento-botones.p-3(x="72%" y="58%" numero="7")
          p Objetivos y previsiones no publicados marcados como confidenciales.
    
    .bloque-texto-f.color-acento-botones-claro.pt-4.px-5.mb-5
      .bloque-texto-f__comillas
      p Todas las empresas disponen de datos personales de su personal, usuarios, miembros, etc., que solo se utilizarán para los fines para los que fueron recogidos y no se divulgarán a nadie fuera de la organización sin permiso previo de acuerdo con la Ley de Protección de Datos en cada país.
      .bloque-texto-f__autor.mb-0
        .bloque-texto-f__avatar__img
          img(src='@/assets/curso/tema3/img03.svg', alt='Texto que describa la imagen')
      
    .col.flex-center.pt-4
      p.mb-5 Es preciso aclarar las siguientes definiciones establecidas en la Ley 1581 de 2012:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img120(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          .tarjeta.color.tarjeta.tarjeta--azul
            .text-black.p-4
              h2.text-center Titular de la información: 
              p “persona natural cuyos datos personales sean objeto de Tratamiento”.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img120(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          .tarjeta.color.tarjeta.tarjeta--azul
            .p-4
              h2.text-center Responsable del Tratamiento:
              p.text-center “Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos”.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img120(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          .tarjeta.color.tarjeta.tarjeta--azul
            .p-4
              h2.text-center Encargado del Tratamiento: 
              p.text-center “Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento.” 

    .tarjeta.color-secundario.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/img05.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h4.mb-1 Documento
              p.text-small Ley 1581 de 2012 que constituye el marco general de la protección de los datos personales en Colombia 
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('https://www.mintic.gov.co/arquitecturati/630/articles-9011_documento.pdf')" target="_blank")
                span Descargar   
                i.fas.fa-file-download
        
         
    #t_3_1.titulo-segundo.color-secundario
      h2 3.1	Normativa
      
    .row
      .tarjeta.color-primario--claro.p-4
        figure.justify-content-center.align-items-center
          img.img1100.pb-5(src="@/assets/curso/tema3/img07.png")
      
    .row
      .col-3.col-md-3.col-lg-1.mb-4.mb-4-lg-0
        figure
        img.img8040(src="@/assets/curso/tema3/img08.svg")
      .col-12.mb-4.col-md-9.col-Lg-11  
        h4 Legislación en Protección de Datos Personales en Colombia 
        p.mb-4 El siguiente video encontramos información sobre la legislación en protección de datos personales en Colombia: 

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bvAH9ppBbbE?feature=oembed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    <br/><br/>

    #t_3_2.titulo-segundo.color-secundario
      h2 3.2	Habeas Data 

    .row.mb-4
      .col-3.col-md-3.col-lg-1.mb-4.mb-4-lg-0
        figure
        img.img40(src="@/assets/curso/tema3/img06.svg")
      .col-12.mb-4.col-md-9.col-Lg-11.  
        El Derecho de Habeas Data se basa en Colombia por autorizar a los habitantes residentes a actualizar, conocer y rectificar toda la información que tengan las distintas entidades y bases de datos del territorio nacional. Nació como parte importante de los artículos 15 y 20 de la Constitución Política. Más adelante, fue desarrollado como derecho autosuficiente y sin dependencia, que disfrutan todos los colombianos.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .contenedor-imagen.position-bottom-left.color-primario.mb-4.mb-lg-0
          figure.mb-4
            img.img100.mb-4(src="@/assets/curso/tema2/img02.svg")
            img(src="@/assets/curso/tema3/img10.svg")
          .row
        .col-9
        .col-3
          img.img100.mb-4(src='@/assets/curso/tema2/img04.svg')
        
      .col-lg-7
        .row
          figure.mb-4.flex-end
            img.img120(src='@/assets/curso/tema3/img11.svg')
        .row.colorgris.mb-4.p-5
          .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
            figure.mb-4.pt-2
              img.img10(src='@/assets/curso/tema3/img12.svg')
          .col-11.col-md-11.col-lg-11 
              p.mb-4 Es desde 1995 que ya se comienza a tener esta excepción, no obstante, en el 2008 se crea la primera Ley de Habeas Data, la 1266, la cual tiene un carácter particular que solo aplica para la información financiera. Los bancos usan esta información para evaluar el peligro crediticio de una persona, como hábitos de pago, créditos tomados antes y sueldo o ingresos promedios.
        .row.justify-content-center
          figure.mb-4.flex-end
            img.img100(src='@/assets/curso/tema2/img04.svg')

      .bloque-texto-f.color-acento-botones-claro.pt-4.px-5.mb-5
        .bloque-texto-f__comillas
        p La Ley 1266 de 2008, también conocida como Ley de Habeas Data, se aplica a todos los datos personales financieros, crediticios, comerciales y de servicios registrados en un banco de datos. En este sentido, la aplicación de la Ley 1266 de 2008 está encaminada a regular el uso de esa información y por tanto otro tipo de datos (por ejemplo, aquellos mantenidos en un ámbito exclusivamente personal o doméstico o los que se incluyen en una historia clínica) se encuentran excluidos de la aplicación de esta norma. 
        .bloque-texto-f__autor.mb-0
          .bloque-texto-f__avatar__img
            img(src='@/assets/curso/tema3/img14.svg', alt='Texto que describa la imagen')      
      
    .row.mb-4   
      .col-1.col-md-1.col-lg-1.mb-lg-0
        figure.mb-4.pt-2
          img.img10(src='@/assets/curso/tema3/img12.svg')
      .col-11.col-md-11.col-lg-11
       .row.justify-
        .contenedor--texto-right
          p.mb-4 Por su lado, la ley más vigente del derecho de Habeas Data ha sido emitida en el 2012. La Ley 1581 es de carácter general y se aplica en todos los espacios de recolección de datos de una persona y que, por lo tanto, no son financieros ni crediticios. Son usados por entidades de naturaleza pública o privada. En esta ley resume todo el funcionamiento de la información de una persona.
        .contenedor--texto-left-pink2
          p.mb-4.flex-left Ninguna entidad puede hacer uso de esta información sin el permiso que el mismo dueño autorice de ella. La empresa o persona que sin la autorización debida realice uso de datos individuales recibirá una sanción y multa. Es por ello, que continuamente piden una aceptación una vez que se firma un contrato o se hace una compra.

    .row.mb-4
      .col-3.col-md-3.col-lg-1.mb-lg-0
        figure
          img.img40(src="@/assets/curso/tema3/img06.svg")
      .col-12.col-md-9.col-Lg-11
          h4.pt-3 Habeas data en Colombia:
          p.small Los invitamos a revisar el siguiente video donde se expone la definición de habeas data en Colombia:
    .row.justify-content-center.align-items-center            
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zDgCQeyHr7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
       
      
</template>

<script>
export default {
  name: 'Tema3',
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
