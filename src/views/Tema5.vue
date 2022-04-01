<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario 
      .titulo-principal__numero
        span 5
      h1 Proceso administrativo 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .contenedor-imagen.position-bottom-left.color-primario.mb-4.mb-lg-0
          figure.mb-4
            img.img85.mb-4(src="@/assets/curso/tema5/img01.svg")
            img.pt-4(src="@/assets/curso/tema5/img02.png")
      .col-lg-7
       
        .contenedor--texto-right-pink5
          p.pt-4 Se conoce como proceso administrativo aquel que es utilizado en la gestión de la misma actividad, a través de sus 4 fases: planear, controlar, organizar y dirigir.       
             figure.flex-right.mb-4 
              img.img85(src='@/assets/curso/tema5/img03.svg')
          .contenedor--texto-left-pink7
            p Aunque la mayoría de los puestos y departamentos de una empresa tienen tareas específicas basadas en conocimientos particulares, experiencia o necesidades de la empresa, los directivos pueden tener un conjunto de responsabilidades más amplio y complejo. Más que un conocimiento especializado, la gestión requiere la capacidad de sortear numerosos retos procedimentales, estructurales e interpersonales en el proceso de guiar a su equipo hacia la consecución de diversos objetivos.
            p Aunque Henri Fayol (1916) identificó originalmente cinco elementos, en la actualidad existen cuatro funciones de gestión comúnmente aceptadas que engloban estas habilidades necesarias: planificar, organizar, dirigir y controlar. Considere lo que implica cada una de estas funciones, así como el aspecto de cada una de ellas en acción, a continuación:

        .row.justify-content-center
            figure.mb-lg-0.flex-end
              img.img10(src='@/assets/curso/tema5/img04.svg')

    
    TabsB.color-primario.mb-5TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="1. Planificación" :icono="require('@/assets/curso/tema5/img05.svg')")
        .tarjeta.border.border-4.p-4  
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 1. Planificación
              p.mb-4 Una de las principales funciones de un directivo es crear un plan para alcanzar las metas y objetivos de la empresa. Esto implica la asignación de recursos a los empleados y la delegación de responsabilidades, así como el establecimiento de plazos y normas realistas para su cumplimiento. La planificación requiere que los directivos comprueban continuamente el progreso del equipo para hacer pequeños ajustes cuando sea necesario, sin dejar de mantener una imagen clara de los objetivos más amplios de la empresa.
              p Gran parte de la función de planificación consiste en trabajar de forma independiente para determinar qué responsabilidades deben asignarse a cada empleado, establecer niveles de prioridad para determinadas tareas y crear calendarios. Sin embargo, la comunicación también desempeña un papel importante. Por ejemplo, los directivos se ocupan de la planificación cuando se reúnen con la dirección de la empresa para hablar de los objetivos a corto y largo plazo, y cuando comunican los detalles de un nuevo proyecto a su equipo o se reúnen periódicamente para asegurarse de que los objetivos individuales se cumplen a tiempo.
            .col-md-5
              figure
                img(src='@/assets/curso/tema5/img09.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="2. Organizar" :icono="require('@/assets/curso/tema5/img06.svg')")
        .tarjeta.border.border-4.p-4 
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema5/img10.svg', alt='Texto que describa la imagen')
            .col-md-7
              h4 2. Organizar
              p.mb-4 Además de la planificación, la capacidad organizativa de un directivo puede ayudar a garantizar el buen funcionamiento de una empresa o unidad departamental. Desde el establecimiento de procesos y estructuras internas hasta saber qué empleados o equipos son los más adecuados para tareas específicas, mantener a todos y todo organizado a lo largo de las operaciones diarias son funciones importantes de la gestión.
              p Sin embargo, la organización no consiste solo en delegar tareas de forma eficiente y asegurarse de que los empleados tienen lo que necesitan para realizar sus tareas. Los directivos también deben ser capaz de reorganizarse en respuesta a nuevos retos. Esto puede traducirse en la práctica en un ligero ajuste del calendario de un proyecto o en la reasignación de tareas de un equipo a otro. O bien, puede significar una alteración significativa de la estructura interna de un equipo y de sus funciones en respuesta al crecimiento de la empresa.
          
      .py-4.py-md-7(titulo="3. Dirigir" :icono="require('@/assets/curso/tema5/img07.svg')")
        .tarjeta.border.border-4.p-4 
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 3.Dirigir
              p.mb-4 Los directivos deben sentirse cómodos y seguros al mando de las tareas diarias de los miembros de su equipo, así como durante los periodos de cambios o retos importantes. Esto implica proyectar un fuerte sentido de la dirección y el liderazgo a la hora de establecer objetivos y comunicar nuevos procesos, productos y servicios, o la política interna.
              p El liderazgo puede manifestarse de diversas maneras, como por ejemplo reconociendo cuándo los empleados necesitan un estímulo extra de refuerzo y elogio o manejando los conflictos entre los miembros del equipo de forma justa y decisiva. A menudo, los directivos pueden actuar como líderes incluso durante las pequeñas interacciones personales, modelando cualidades de apoyo, estímulo y motivación.
            .col-md-5
              figure
                img(src='@/assets/curso/tema5/img11.svg', alt='Texto que describa la imagen')
                
      .py-4.py-md-5(titulo="4. Controlar" :icono="require('@/assets/curso/tema5/img08.svg')")
        .tarjeta.border.border-4.p-4 
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema5/img12.svg', alt='Texto que describa la imagen')    
            .col-md-7
              h4 4. Controlar
              p.mb-4 Para garantizar que todas las funciones anteriores contribuyen al éxito de la empresa, los directivos deben supervisar constantemente el rendimiento de los empleados, la calidad del trabajo y la eficacia y fiabilidad de los proyectos realizados. El control (y el control de calidad) en la gestión consiste en asegurarse de que los objetivos finales de la empresa se están cumpliendo adecuadamente, así como en realizar los cambios necesarios cuando no es así.
              p Aunque algunas de las funciones mencionadas de la gestión pueden extenderse lógicamente a partir de la experiencia y las habilidades desarrolladas en los puestos de entrada, la formación y la educación formales pueden aportar ventajas. Por ejemplo, cursar una especialización en administración de empresas puede ofrecer la oportunidad de estudiar las filosofías y las mejores prácticas de gestión para ayudar a prepararse para ocupar puestos de dirección tras la graduación.

    Separador        
      
    #t_5_1.titulo-segundo.color-secundario
      h2 5.1	Planeación Estratégica 

    .row.justify-
      .col-1.col-md-1.col-lg-1.mb-lg-0
        figure.mb-4.pt-2.flex-center
         img.img10(src='@/assets/curso/tema3/img12.svg')
      .col-11.col-md-11.col-lg-11
        .contenedor--texto-left-pink3
          p.mb-4.pt-2 La planificación estratégica es el arte de crear estrategias empresariales específicas, ponerlas en práctica y evaluar los resultados de la ejecución del plan, en relación con los objetivos o deseos generales a largo plazo de una empresa. Es un concepto que se centra en la integración de varios departamentos (como contabilidad y finanzas, <em>marketing</em> y recursos humanos) dentro de una empresa para lograr sus objetivos estratégicos. El término planificación estratégica es esencialmente sinónimo de gestión estratégica.
  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1yAOUdaaYxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-5
        figure.mb-4
          img.img100(src='@/assets/curso/tema5/img03.svg')
        .contenedor
          figure.mb-4
            img(src="@/assets/curso/tema5/img13.svg")
          figure
            img.img100(src='@/assets/curso/tema5/img01.svg')  
      .col-lg-7
        .row.mb-4.pt-5
          .contenedor--texto-right-yellow
            .contenedor--texto-left-yellow
              p.mt-4 El proceso de planificación estratégica requiere una reflexión y una planificación considerables por parte de la alta dirección de una empresa. Antes de decidir por un plan de acción y determinar cómo aplicarlo estratégicamente, los ejecutivos pueden considerar muchas opciones posibles. Al final, se espera que la dirección de la empresa se decante por una estrategia que tenga más probabilidades de producir resultados positivos (normalmente definidos como la mejora de los resultados de la empresa) y que pueda ejecutarse de forma rentable con una alta probabilidad de éxito, evitando al mismo tiempo un riesgo financiero indebido.
        .row.justify-content-center
          .row.mb-4
            figure.flex-end
              img.img3678.mb-5(src='@/assets/curso/tema5/img14.svg')     
            
    .row
      .col-12 
        .contenedor--texto-right-yellow2.m-5.mt-0 
          p.mx-0 Normalmente se considera que el desarrollo y la ejecución de la planificación estratégica se realizan en tres pasos fundamentales:

      
      PasosA.color-primario(tipo="n")
        div
          h3 Formulación de la estrategia
          p.mb-4 Es el proceso de determinar y establecer las metas, la misión y los objetivos de una organización, e identificar los cursos o planes de acción apropiados y mejores entre todas las estrategias alternativas disponibles para alcanzarlos. Las estrategias empresariales tienen efectos a largo plazo sobre el éxito de la organización. Es común que la formulación de estrategias sea implementada por la alta dirección, debido a que es el área que suele estar autorizada para asignar los recursos necesarios para su aplicación.
          p La organización prevé unos resultados concretos, que solo podrá alcanzar siguiendo una ruta específica, o actuando dentro de los confines o parámetros de un marco específico. Esa ruta o marco se creará mediante la formulación de la estrategia.
  
        div
          h3.text-start Implementación de la estrategia
          p.mb-4.text-start Una vez formulada la estrategia, la empresa debe establecer objetivos específicos o metas relacionadas con la puesta en marcha de la estrategia y asignar recursos para su ejecución. El éxito de la fase de aplicación suele depender de la calidad de la comunicación de la estrategia elegida por parte de la dirección de la empresa y de la aceptación por parte de todos los empleados del deseo de ponerla en práctica.
          p.text-start La aplicación efectiva de la estrategia implica el desarrollo de una estructura sólida o marco, para la aplicación de la estrategia, la maximización de la utilización de los recursos pertinentes y la reorientación de los esfuerzos de <em>marketing</em> en línea con las metas y objetivos de la estrategia.

        div
          h3 Evaluación de la estrategia
          p.mb-4 La evaluación estratégica se realiza para comprender la organización empresarial existente. Hay dos tipos de esta evaluación. Juntos forman una evaluación estratégica completa de la organización empresarial.
          p.mb-4 <b>Evaluación de la organización empresarial/estrategia actual:</b> esta evaluación se centra en comprender el modelo empresarial actual, el sistema de valores, las ventajas actuales, las competencias, la cultura, los factores dinámicos y las tendencias, los patrones, la trayectoria actual, las incongruencias, los conflictos, las amenazas, los problemas y las oportunidades. Esta evaluación suele dar lugar a un impulso de cambio, genera ideas y pensamiento estratégico que se aplicarán para producir la estrategia y la innovación del diseño empresarial. La investigación integral se lleva a cabo con este objetivo.
          p <b>Evaluación de las competencias de gestión estratégica:</b> esta evaluación se centra en la competencia de gestión estratégica, la competencia de la organización empresarial para lograr y mantener un reconocimiento en el mercado; el evaluar un plan para mejorar el servicio al comprador, una compañía puede identificar que requiere implementar un nuevo sistema tecnológico de administración para mantener las relaciones con los consumidores y clientes y lograr la gestión estratégica deseadas en las relaciones con los consumidores. 
       
    Separador   

    #t_5_2.titulo-segundo.color-acento-contenido
     h2 5.2	Proyección de mercado 

    .row.justify-
      .contenedor--texto-right-blue5
        .contenedor--texto-left-blue2
          p.mb-4 Una proyección de mercado es un componente esencial de un análisis de mercado, proyecta las cifras, características y tendencias futuras de su mercado objetivo, de esta manera el análisis estándar muestra el número proyectado de clientes potenciales dividido en segmentos, lo que evidencia un ejemplo de previsión de mercado simple el cual define dos segmentos de mercado objetivo y proyecta los clientes potenciales en cada uno de esos segmentos por años.

      .row.mb-5
        .col-md-5
          figure
            img.mb-4(src="@/assets/curso/tema5/img16.svg")  
        .col-md-7
          figure.mb-4.flex-end
            img.img85(src='@/assets/curso/tema5/img17.svg')
          .contenedor--texto-right-blue4
            p Una proyección de mercado debe someterse siempre a una comprobación de la realidad. Cuando se cree que se tiene una previsión, hay que encontrar la manera de comprobar la realidad. En este caso, si el mercado total vale una estimación, podría estimar las ventas de todos los competidores y ver si las dos cifras se relacionan entre sí. En un mercado internacional, podría comprobar las cifras de producción e importación y exportación para ver si sus estimaciones de envíos anuales parecen estar en el mismo rango general que las cifras publicadas. Puede consultar a los proveedores que vendieron productos a este mercado en un año determinado para ver si sus resultados coinciden con su previsión y buscar datos macroeconómicos para confirmar el tamaño relativo de este mercado en comparación con otros mercados de características similares.
              figure.mb-4.flex-end
                img.img80.mb-4(src='@/assets/curso/tema5/img18.svg') 
        .contenedor--texto-left-blue5
          p.mb-4 Al seleccionar los segmentos objetivo, piense en las diferencias inherentes al mercado, las claves del éxito, la ventaja competitiva y los puntos fuertes y débiles de su empresa, donde centrarse en el mejor mercado, no es necesariamente el más grande o el de mayor crecimiento, sino el que se ajuste al perfil de la empresa.     
            figure.mb-4.flex-end
              img.img40(src='@/assets/curso/tema5/img19.svg') 

</template>

<script>
export default {
  name: 'Tema5',
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
