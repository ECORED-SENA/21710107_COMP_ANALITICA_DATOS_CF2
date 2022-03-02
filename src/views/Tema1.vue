<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5 
    .titulo-principal.color-primario    
      .titulo-principal__numero
        span 1
      h1 Estadística descriptiva

    .row.justify-content-center-align-items-center
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img01.svg' alt="img01" height="200")
          .tarjeta.color-primario.p-4 
            .px-5 
              h2 Estadística descriptiva
              p.mb-0 Se encarga de recoger, almacenar, ordenar, realizar tablas o gráficos y calcular parámetros básicos sobre el conjunto de datos.
    
      .col-lg-6
        .tarjeta-avatar-b.mb-5 
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img02.svg' alt='AvatarTop' height="200")
          .tarjeta.color-primario.p-4
            .px-5.justify-content-center-align-items-center
              h2 Estadística descriptiva
              p.mb-0 Es junto a la inferencia estadística una de las dos grandes ramas de la estadística. 

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop' height="200")
          .tarjeta.color-primario.p-3
            .px-5
              h2 Estadística descriptiva
              p.mb-0 Su propio nombre lo indica, trata de describir algo. Pero no describirlo de cualquier forma, sino de manera cuantitativa.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop' height="200")
          .tarjeta.color-primario.p-4
            .px-5
              h2 Estadística descriptiva
              p.mb-0 Responde a preguntas como por ejemplo: ¿cuál es la altura promedio en centímetros de una población?

    .row.justify-
      .cajon-b.color-acento-contenido.p-0
        p.mb-4 La estadística descriptiva se utiliza para describir las características básicas de los datos de un estudio; recoge, almacena, ordena para la construcción de gráficos y tablas calculando parámetros sencillos del grupo de datos. 
        br
      .cajon-b.color-acento-contenido.p-0.mb-5
        p.mb-4 Proporciona resúmenes sencillos sobre la muestra y las medidas; junto con un análisis gráfico sencillo, constituyen la base de prácticamente todos los análisis cuantitativos de datos.
        p.mb-0 Algunas características de la estadística descriptiva son:
    
    .row.justify-content-center.mb-4
      .col-lg-6
        .BG01.p-4.mb-4
          .row.align-items-center
            .col-2
              img(src='@/assets/curso/tema1/img05.svg')
            .col-10
              p.mb-0 La estadística descriptiva describe, muestra y resume las características básicas de un conjunto de datos encontrados en un determinado estudio, presentado en un resumen que describe la muestra de datos y sus medidas. Ayuda a los analistas a comprender mejor los datos.
        .BG01.p-4.mb-4  
          .row.align-items-center
            .col-2
              img(src='@/assets/curso/tema1/img06.svg')
            .col-10
              p.mb-0 La estadística descriptiva representa la muestra de datos disponible y no incluye teorías, inferencias, probabilidades o conclusiones.
        .BG01.p-4.mb-4 
          .row.align-items-center
            .col-2
              img(src='@/assets/curso/tema1/img07.svg')
            .col-10
              p.mb-0 La estadística descriptiva suele distinguirse de las estadísticas inferenciales. Con la estadística descriptiva simplemente se describe lo que es o lo que muestran los datos
      .col-lg-6
        .row
          .col-9
          .col-3
            img(src='@/assets/curso/tema1/img08.svg')
        p.mb-4 Para tener una mayor apropiación de la estadística descriptiva, se hace necesario reconocer los elementos que llevan a otro tipo de estadística, como lo es la estadística inferencial la cual suele utilizarse para comparar las diferencias entre los grupos de tratamiento. Esta, utiliza las mediciones de la muestra de sujetos del experimento para comparar los grupos de tratamiento y hacer generalizaciones sobre la población más amplia de sujetos.
        p.mb-4 Existen diferentes tipos de estadísticas inferenciales y cada una es apropiada para un diseño de investigación específico y para las características de la muestra. Los investigadores deben consultar los numerosos textos sobre diseño experimental y estadística para encontrar la prueba estadística adecuada para su experimento. 
        p.mb-0 Sin embargo, la mayoría de las estadísticas descriptivas se basan en el principio de que el valor de la prueba estadística se calcula sobre la base de una fórmula particular. Ese valor, junto con los grados de libertad, una medida relacionada con el tamaño de la muestra y los criterios de rechazo se utilizan para determinar si existen diferencias entre los grupos de tratamiento, de esta manera se puede aportar a los detalles que se comparten desde la estadística descriptiva. 
        .row
          .col-9
          .col-3
            img(src='@/assets/curso/tema1/img09.svg')

    p.mb-4 De esta manera la estadística inferencial permite concluir el análisis que se realiza a través de los datos suministrados por la de la estadística descriptiva, de allí su relación con lo descrito anteriormente.

    figure.mb-4
      img(src='@/assets/curso/tema1/img10.png')

    Separador

    #t_1_1.titulo-segundo.color-secundario
      h2 1.1	Medidas de tendencia
    
    p.mb-4 Las medidas tendencia central se definen como una estimación del centro de una distribución de valores. Hay tres tipos principales de estimaciones de la tendencia central:
    
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La media o promedio")
        h4 La media o promedio
        p.mb-4 es probablemente el método más utilizado para describir la tendencia central. Para calcular la media lo único que hay que hacer es sumar todos los valores y dividirlos por el número de valores. Por ejemplo, la media o promedio de la puntuación de un examen se determina sumando todas las puntuaciones y dividiéndolas por el número de estudiantes que se presentan al examen. Por ejemplo, considere los valores de la puntuación del examen:
        p.mb-4 15, 20, 21, 20, 36, 15, 25, 15
        p.mb-0 La suma de estos 8 valores es 167, por lo que la media es 167/8 = 20,875.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La mediana")
        h4 La mediana
        p.mb-4 es la puntuación que se encuentra en el centro exacto del conjunto de valores. Una forma de calcular la mediana es enumerar todas las puntuaciones en orden numérico y, a continuación, localizar la puntuación en el centro de la muestra. Por ejemplo, si hay 500 puntuaciones en la lista, la puntuación Nº 250 sería la mediana. Si ordenamos las 8 puntuaciones mostradas anteriormente, obtendremos:
        p.mb-4 15, 15, 15, 20, 20, 21, 25, 36
        p.mb-0 Hay 8 puntuaciones y las puntuaciones 4 y 5 representan el punto medio. Como ambas puntuaciones son 20, la mediana es 20. Si las dos puntuaciones intermedias tuvieran valores diferentes, habría que interpolar para determinar la mediana.    
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La moda")
        h4 La moda
        p.mb-4 es el valor que aparece con más frecuencia en el conjunto de puntuaciones. Para determinar la moda, puede volver a ordenar las puntuaciones como se indica más arriba, y luego contar cada una de ellas. El valor más frecuente es la moda. En nuestro ejemplo, el valor 15 aparece tres veces y es el modelo. En algunas distribuciones hay más de un valor modal. Por ejemplo, en una distribución bimodal hay dos valores que aparecen con mayor frecuencia.
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
  
      .tabla-b.mb-5
        .tabla-b__header.colorf
          h5.mb-4.colortext1 Los datos cualitativos
        table
          tr
            td No son estadísticos y suelen ser no estructurados o semiestructurados. Estos datos no se miden necesariamente con números duros que se utilizan para elaborar gráficos y diagramas. En cambio, se clasifican en función de propiedades, atributos, etiquetas y otros identificadores.
            td Pueden utilizarse para formular la pregunta "por qué". Se trata de una investigación y a menudo está abierta hasta que se lleve a cabo una investigación más profunda. La generación de estos datos de la investigación cualitativa se utiliza para teorizaciones, interpretaciones, desarrollo de hipótesis y comprensiones iniciales. 
          tr
    .row
      p.mb-4 Para entender mejor los datos cualitativos, tomemos el ejemplo de una librería. Las siguientes características de esta librería determinan la calidad de la información que tenemos sobre ella:
       <br/><br/>
       ul.lista-ul--color.color-primario
            li.mb-0
              i.fas.fa-check
              | Fabricada en madera
            li.mb-0
              i.fas.fa-check
              | Construida en Bogotá
            li.mb-0
              i.fas.fa-check
              | Color marrón oscuro
            li.mb-0
              i.fas.fa-check
              | Pomos bronce
            li.mb-0
              i.fas.fa-check
              | Acabado liso
            li.mb-0
              i.fas.fa-check
              | Fabricado en roble    
      p.mb-4 Los datos cuantitativos son estadísticos y suelen ser de naturaleza estructurada; es decir, más rígidos y definidos. Este tipo de datos se mide mediante números y valores, lo que los convierte en un candidato más adecuado para el análisis de datos.
      
    .row
      .col-3.col-md-3.col-lg-1.mb-4.mb-4-lg-0
        figure
        img.px-3(src="@/assets/curso/tema1/img14.svg")
      .col-12.mb-4.col-md-9.col-Lg-11  
        p.p.mb-4 Mientras que los datos cualitativos están abiertos a la exploración, son mucho más concisos y cerrados. Pueden utilizarse para formular las preguntas "cuánto" o "cuántos", seguidas de información concluyente.
      p.mb-4 Los datos cuantitativos pueden generarse mediante:
        <br/><br/>
        ul.lista-ul--color.color-primario
            li.mb-0
              i.fas.fa-check
              | Pruebas
            li.mb-0
              i.fas.fa-check
              | Experimentos
            li.mb-0
              i.fas.fa-check
              | Encuestas
            li.mb-0
              i.fas.fa-check
              | Informes de mercado
            li.mb-0
              i.fas.fa-check
              | Métricas

      p.mb-0.text-center De esta manera en el siguiente esquema se comparte los elementos esenciales del método estadístico: 

      figure.mb-4
        img(src='@/assets/curso/tema1/img15.png')
  
      .row.colorf.p-4
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
