<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5 
    .titulo-principal.color-primario    
      .titulo-principal__numero
        span 1
      h1 Estadística descriptiva

    .titulo-quinto.color-red.mb-4
      h4(style="color: #12263F") 1. Estadística descriptiva
      
    .row.justify-content-center-align-items-center
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img01.svg' alt="img01" height="200")
          .tarjeta.color-primario.p-4.justify-content-center.align-items-center
            .px-5 
              p.mb-0 Se encarga de recoger, almacenar, ordenar, realizar tablas o gráficos y calcular parámetros básicos sobre el conjunto de datos.
    
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img02.svg' alt='AvatarTop' height="200")
          .tarjeta.color-primario.p-4.justify-content-center-align-items-center
            .p-5.px-5
              p.mb-0 Es junto a la inferencia estadística una de las dos grandes ramas de la estadística. 

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop' height="200")
          .tarjeta.color-primario.p-3
            .p-5.px-5
              p.mb-0 Su propio nombre lo indica, trata de describir algo. Pero no describirlo de cualquier forma, sino de manera cuantitativa.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop' height="200")
          .tarjeta.color-primario.p-4
            .p-5.px-5
              p.mb-0 Responde a preguntas como por ejemplo: ¿cuál es la altura promedio en centímetros de una población?

    .row.justify-
      .contenedor--texto-right-blue3
        p La estadística descriptiva se utiliza para describir las características básicas de los datos de un estudio; recoge, almacena, ordena, para la construcción de gráficos y tablas calculando parámetros sencillos del grupo de datos. 
        br
      .contenedor--texto-left-blue3
        p.mb-4 Proporciona resúmenes sencillos sobre la muestra y las medidas; junto con un análisis gráfico sencillo, constituyen la base de prácticamente todos los análisis cuantitativos de datos.
        p.mb-4 Algunas características de la estadística descriptiva son:
    
    .row.mb-4
      .col-lg-6
        .BG01.p-4.mb-4
          .row.align-items-center
            .col-2
              img(src='@/assets/curso/tema1/img05.svg')
            .col-10
              p.mb-0 1. La estadística descriptiva describe, muestra y resume las características básicas de un conjunto de datos encontrados en un determinado estudio, presentado en un resumen que describe la muestra de datos y sus medidas. Ayuda a los analistas a comprender mejor los datos.
        .BG01.p-4.mb-4  
          .row.align-items-center
            .col-2
              img(src='@/assets/curso/tema1/img06.svg')
            .col-10
              p.mb-0 2. La estadística descriptiva representa la muestra de datos disponible y no incluye teorías, inferencias, probabilidades o conclusiones.
        .BG01.p-4.mb-4 
          .row.align-items-center
            .col-2
              img(src='@/assets/curso/tema1/img07.svg')
            .col-10
              p.mb-0 3. La estadística descriptiva suele distinguirse de las estadísticas inferenciales. Con la estadística descriptiva simplemente se describe lo que es o lo que muestran los datos.
      .col-lg-6
        figure.mb-2.flex-end
          img.img110(src='@/assets/curso/tema1/img08.svg')
        p.mb-4 Para tener una mayor apropiación de la estadística descriptiva, se hace necesario reconocer los elementos que llevan a otro tipo de estadística, como lo es la estadística inferencial la cual suele utilizarse para comparar las diferencias entre los grupos de tratamiento. Esta, utiliza las mediciones de la muestra de sujetos del experimento para comparar los grupos de tratamiento y hacer generalizaciones sobre la población más amplia de sujetos.
        p.mb-4 Existen diferentes tipos de estadísticas inferenciales y cada una es apropiada para un diseño de investigación específico y para las características de la muestra. Los investigadores deben consultar los numerosos textos sobre diseño experimental y estadística para encontrar la prueba estadística adecuada para su experimento. 
        p.mb-2 Sin embargo, la mayoría de las estadísticas descriptivas se basan en el principio de que el valor de la prueba estadística se calcula sobre la base de una fórmula particular. Ese valor, junto con los grados de libertad, una medida relacionada con el tamaño de la muestra y los criterios de rechazo se utilizan para determinar si existen diferencias entre los grupos de tratamiento, de esta manera se puede aportar a los detalles que se comparten desde la estadística descriptiva. 
          figure.mb-4.flex-end
            img.img110(src='@/assets/curso/tema1/img09.svg')

    p.mb-5 De esta manera la estadística inferencial permite concluir el análisis que se realiza a través de los datos suministrados por la de la estadística descriptiva, de allí su relación con lo descrito anteriormente.

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img.img343312(src="@/assets/curso/tema1/img17.png")         
      .col-lg-8
        figure.mb-4
          img.img833154(src="@/assets/curso/tema1/img18.svg") 
        p.mb-4.px-5 La estadística descriptiva se utiliza para presentar descripciones cuantitativas de forma manejable. En un estudio estadístico, podemos tener diferentes medidas o puede que midamos a un gran número de personas en alguna medida, también nos ayudan a simplificar grandes cantidades de datos de forma razonable. Cada estadística descriptiva reduce muchos datos a un resumen más sencillo.
          .col-lg-11
            figure.mb-4.flex-end
              img.img100(src="@/assets/curso/tema2/img02.svg")
          .col-lg-1
    .row.justify-content-center.mb-5
      .col-lg-5 
        figure
          img(src="@/assets/curso/tema1/img19.svg") 
      .col-lg-7
        .contenedor--texto-right-pink4
          .contenedor--texto-left-pink4
            p.mb-4 Por ejemplo, consideremos un simple número utilizado para resumir el rendimiento de un bateador en el béisbol, la media de bateo. Este número es simplemente el número de hits dividido por el número de veces que se batea (con tres dígitos significativos). Un bateador que batea 0,333 acierta una vez cada tres veces al bate. Uno que batea .250 está bateando una vez en cuatro. El número único describe un gran número de eventos discretos. O consideremos el azote de muchos estudiantes, el promedio de calificaciones. Este único número describe el rendimiento general de un estudiante en una gama potencialmente amplia de experiencias de curso.
        .row.colorgris.p-4
          .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
            figure.pt-5 
              img.img10.pt-4(src="@/assets/curso/tema3/img12.svg")
          .col-11.col-md-11.col-lg-11
            p.mb-4 Cada vez que se intenta describir un gran conjunto de observaciones con un único indicador, se corre el riesgo de distorsionar los datos originales o de perder detalles importantes. La media de bateo no indica si el bateador está bateando jonrones o sencillos. No dice si ha tenido una mala racha o una buena racha. El promedio de calificaciones no dice si el estudiante estaba en cursos difíciles o fáciles, o si eran cursos en su campo principal o en otras disciplinas. Incluso teniendo en cuenta estas limitaciones, la estadística descriptiva ofrece un potente resumen que puede permitir comparaciones entre personas u otras unidades.
    

    Separador

    #t_1_1.titulo-segundo.color-secundario
      h2 1.1	Medidas de tendencia
    
    p.mb-4 Las medidas de tendencia central se definen como una estimación del centro de una distribución de valores. Hay tres tipos principales de estimaciones de la tendencia central:
      figure.justify-content-center.align-items-center
        img.img800.mb-5(src="@/assets/curso/tema1/img10.png") 
    p.mb-4 Para ampliar la información de cada una de ellas, ingresa en este espacio:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La media o promedio")
        .row.p-4
          .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
            figure 
              img.img10(src="@/assets/curso/tema1/img20.svg")
          .col-11.col-md-11.col-lg-11
            h4 La media o promedio
            p.mb-4 Es probablemente el método más utilizado para describir la tendencia central. Para calcular la media lo único que hay que hacer es sumar todos los valores y dividirlos por el número de valores. Por ejemplo, la media o promedio de la puntuación de un examen se determina sumando todas las puntuaciones y dividiéndolas por el número de estudiantes que se presentan al examen. Por ejemplo, considere los valores de la puntuación del examen:
            p.mb-4 15, 20, 21, 20, 36, 15, 25, 15
            p.mb-0 La suma de estos 8 valores es 167, por lo que la media es 167/8 = 20,875.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La mediana")
        .row.p-4
          .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
            figure 
              img.img10(src="@/assets/curso/tema1/img20.svg")
          .col-11.col-md-11.col-lg-11
            h4 La mediana
            p.mb-4 Es la puntuación que se encuentra en el centro exacto del conjunto de valores. Una forma de calcular la mediana es enumerar todas las puntuaciones en orden numérico y, a continuación, localizar la puntuación en el centro de la muestra. Por ejemplo, si hay 500 puntuaciones en la lista, la puntuación Nº 250 sería la mediana. Si ordenamos las 8 puntuaciones mostradas anteriormente, obtendremos:
            p.mb-4 15, 15, 15, 20, 20, 21, 25, 36
            p.mb-0 Hay 8 puntuaciones y las puntuaciones 4 y 5 representan el punto medio. Como ambas puntuaciones son 20, la mediana es 20. Si las dos puntuaciones intermedias tuvieran valores diferentes, habría que interpolar para determinar la mediana.    
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La moda")
        .row.p-4
          .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
            figure 
              img.img10(src="@/assets/curso/tema1/img20.svg")
          .col-11.col-md-11.col-lg-11
            h4 La moda
            p.mb-4 Es el valor que aparece con más frecuencia en el conjunto de puntuaciones. Para determinar la moda, puede volver a ordenar las puntuaciones como se indica más arriba, y luego contar cada una de ellas. El valor más frecuente es la moda. En nuestro ejemplo, el valor 15 aparece tres veces y es el modelo. En algunas distribuciones hay más de un valor modal. Por ejemplo, en una distribución bimodal hay dos valores que aparecen con mayor frecuencia.
            p.mb-4 Observa que para el mismo conjunto de 8 puntuaciones tenemos tres valores diferentes (20,875, 20 y 15) para la media, la mediana y la moda respectivamente. Si la distribución es realmente normal (es decir, con forma de campana), la media, la mediana y la moda son iguales entre sí.
            p.mb-0 La dispersión se refiere a la amplitud de los valores en torno a la tendencia central. Hay dos medidas comunes de dispersión, el rango y la desviación estándar. El rango es simplemente el valor más alto menos el valor más bajo. En nuestra distribución de ejemplo, el valor más alto es 36 y el más bajo es 15, por lo que el rango es 36 - 15 = 21.

    Separador

    #t_1_2.titulo-segundo.color-secundario
        h2 1.2	Metodos estadísticos 

    .row
      .col-3.col-md-3.col-lg-1.mb-4.mb-lg-0
        figure
          img.img30(src="@/assets/curso/tema1/img11.svg")
      .col-9.col-md-9.col-lg-11
        p.mb-4 Los métodos estadísticos son fórmulas matemáticas, modelos y técnicas que se utilizan en el análisis estadístico de los datos brutos de la investigación. La aplicación de métodos estadísticos extrae información de los datos de la investigación y proporciona diferentes formas de evaluar la solidez de los resultados de la investigación.
      
    .row
      .col-3.col-md-3.col-lg-3
      .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
        figure.pt-2
            img.img30(src="@/assets/curso/tema1/img11.svg")
      .col-8.col-md-8.col-lg-8
        .cajon.color-primario.p-4.mb-5.justify-content-center.align-items-center
          p.mb-0 Los datos cualitativos y cuantitativos se agrupan en procedimientos donde son utilizados en una investigación. 
  
    .row.justify-content-center.mb-4
      .col-lg-12.mb-5
        table.mb-1
          tr.BG09
            td
              .h4.text-center.p-2 Los datos cualitativos
            td
              .h4.text-center.p-2 Los datos cuantitativos
        table
          tr.BG022
            td.px-5.pt-1 No son estadísticos y suelen ser no estructurados o semiestructurados. Estos datos no se miden necesariamente con números duros que se utilizan para elaborar gráficos y diagramas. En cambio, se clasifican en función de propiedades, atributos, etiquetas y otros identificadores.
            td.p-5 Pueden utilizarse para formular la pregunta "por qué". Se trata de una investigación y a menudo está abierta hasta que se lleve a cabo una investigación más profunda. La generación de estos datos de la investigación cualitativa se utiliza para teorizaciones, interpretaciones, desarrollo de hipótesis y comprensiones iniciales.
              

    .row
      p.mb-4 Para entender mejor los datos cualitativos, tomemos el ejemplo de una librería. Las siguientes características de esta librería determinan la calidad de la información que tenemos sobre ella:
       <br/><br/>
       ul.lista-ul--color.ps-5
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Fabricada en madera.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Construida en Bogotá.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Color marrón oscuro.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Pomos bronce.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Acabado liso.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Fabricado en roble.    
      p.mb-4 Los datos cuantitativos son estadísticos y suelen ser de naturaleza estructurada; es decir, más rígidos y definidos. Este tipo de datos se mide mediante números y valores, lo que los convierte en un candidato más adecuado para el análisis de datos.

    .row
      .col-1.col-md-3.col-lg-1.mb-4.mb-4-lg-0
        figure
          img.img35.ms-5.mt-1(src="@/assets/curso/tema1/img14.svg") 
      .col-11.mb-4.col-md-9.col-Lg-11 
        p.mb-4.ms-5 Mientras que los datos cualitativos están abiertos a la exploración, son mucho más concisos y cerrados. Pueden utilizarse para formular las preguntas "cuánto" o "cuántos", seguidas de información concluyente.
      p.mb-4 Los datos cuantitativos pueden generarse mediante:
        <br/><br/>
        ul.lista-ul--color.ps-5
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Pruebas.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Experimentos.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Encuestas.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Informes de mercado.
            li.mb-0
              i.fas.fa-check(style="color: #7F0F98")
              | Métricas.

      p.mb-0.text-center De esta manera en el siguiente esquema se comparte los elementos esenciales del método estadístico: 
      
      figure.mb-4
        img(src='@/assets/curso/tema1/img22.svg')
  
      .row.BG08.p-4
        .col-1.col-md-1.col-lg-1.mb-4.mb-lg-0
          figure 
            img.img10(src="@/assets/curso/tema1/img16.svg")
        .col-11.col-md-11.col-lg-11
          p.mb-0 Existen varios métodos y técnicas para realizar el análisis en función del sector y del objetivo del análisis, todos estos diversos métodos de análisis de datos se basan en gran medida en dos áreas fundamentales: los métodos cuantitativos y los métodos cualitativos en la investigación.
          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
