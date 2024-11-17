<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aceros
    
    .fondo-personalizado-1.pos-center.f2
      .fondo-personalizado-1__contenido
        .row.mb-4
          .col-lg-8
            .fondo-color-sistema-j.p-4.p-md-5.borde-14.mb-4
              p.mb-0 El acero es, esencialmente, una aleación de hierro y carbono (entre un 0,05 % y menos de un 2 % de carbono). A veces, se añaden otros elementos de aleación, como cromo (Cr) o níquel (Ni), para cumplir con fines específicos. Dado que el acero está compuesto principalmente de hierro altamente refinado (más del 98 %), su fabricación comienza con la reducción del hierro (producción de arrabio), que posteriormente se transforma en acero.

            p.mb-4 El acero presenta un color blanco grisáceo, y su punto de fusión varía entre 1300 y 1530 grados Celsius, dependiendo del porcentaje de carbono y otros elementos de aleación.

            p.mb-0 A continuación, se presentan algunas de las principales propiedades del acero que lo hacen esencial en diversas aplicaciones industriales:

          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 400px;")
        
        .row.align-items-center
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 398px;")
          .col-lg-8
            SlyderF.slider-personalizado-2(columnas="col-lg-6 py-4",data-aos="flip-up")
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 91px;")
                .fondo-color-sistema-k.min-h-p-1.mb-5.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Peso específico y maleabilidad
                p.text-center Su peso específico promedio es de 7,8 gramos por centímetro cúbico, lo que le otorga una notable maleabilidad, siendo útil para la fabricación de envases de hojalata.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 91px;")
                .fondo-color-sistema-k.min-h-p-1.mb-5.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Ductilidad
                p.text-center La ductilidad del acero permite la producción de alambres, una propiedad esencial para su uso en la industria.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 91px;")
                .fondo-color-sistema-k.min-h-p-1.mb-5.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Tenacidad y dureza
                p.text-center Gracias a su tenacidad y dureza, el acero es adecuado para la fabricación de herramientas.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 91px;")
                .fondo-color-sistema-k.min-h-p-1.mb-5.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Capacidad de mecanizado
                p.text-center Es valorado en la industria metalmecánica por su capacidad de mecanizado, especialmente en el proceso de arranque de viruta.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 91px;")
                .fondo-color-sistema-k.min-h-p-1.mb-5.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Soldabilidad y conductividad eléctrica
                p.text-center El acero es fácil de soldar y es un buen conductor eléctrico, lo que lo hace adecuado para fabricar cables de alta tensión.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 91px;")
                .fondo-color-sistema-k.min-h-p-1.mb-5.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Propiedades magnéticas y corrosión
                p.text-center El acero posee propiedades magnéticas, pero su principal desventaja es su tendencia a la corrosión, que se mitiga mediante aleaciones como el acero inoxidable.
    
    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Tipos de acero
    
    p.mb-5 Existen diversos tipos de acero, cada uno con características específicas que los hacen adecuados para diferentes aplicaciones industriales. A continuación, se presenta una breve descripción de los principales tipos de acero y sus usos:

    .row.align-items-center.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 400px;")
      .col-lg-8
        AcordionA.acordion-personalizado-1.mb-0(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Aceros al carbono")
            .ps-md-5.ms-md-3
              p Más del 90 % de todos los aceros son de este tipo. Contienen diversas cantidades de carbono y menos del 1,65 % de manganeso, 0,60 % de silicio y 0,60 % de cobre. Se utilizan en la fabricación de máquinas, carrocerías de automóviles, estructuras de construcción, cascos de buques, somieres y horquillas.
          .div(titulo="HSLA (High Strength Low Alloy) - Aceros de baja aleación ultrarresistentes")
            .ps-md-5.ms-md-3
              p Son más recientes y económicos que los aceros aleados convencionales, al contener menores cantidades de elementos de aleación. Reciben un tratamiento que les confiere una gran resistencia, permitiendo que productos como vagones de mercancías y estructuras de edificios sean más livianos y resistentes, optimizando el uso de materiales.
          .div(titulo="Alta aleación")
            .ps-md-5.ms-md-3
              p Contienen más del 5 % de elementos de aleación en peso, lo que aumenta su costo. Son utilizados en herramientas que requieren alta resistencia, como brocas, llaves de tuercas, rodamientos, ejes y superaleaciones para aplicaciones de alta temperatura.
          .div(titulo="Aceros inoxidables")
            .ps-md-5.ms-md-3
              p Contienen cromo, níquel y otros elementos que les otorgan resistencia a la oxidación y un acabado brillante. Son comunes en arquitectura, equipos quirúrgicos, refinerías de petróleo, plantas químicas, y en la fabricación de utensilios de cocina. También se utilizan en aplicaciones donde se requiere resistencia a la corrosión y estabilidad a temperaturas extremas.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Influencia de los elementos de aleación en el acero
    
    .row.align-items-center
      .col-lg-8
        p.mb-4 Los aceros contienen elementos de aleación que mejoran sus características fundamentales. La influencia de estos elementos es variada, y al ajustar el porcentaje adecuado, se pueden obtener aceros con propiedades muy diferentes.
        p.mb-0 Es posible fabricar piezas de gran espesor con alta resistencia en su interior, herramientas resistentes a la corrosión, componentes mecánicos que combinan una gran dureza con tenacidad, y mecanismos que conservan su resistencia incluso a altas temperaturas. También se pueden crear moldes de formas complejas que no se deformen ni agrieten durante el tratamiento térmico.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 400px;")
    
    p(style="color:red;") Falta slyder aqui

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Aplicaciones de los aceros
    
    .fondo-personalizado-1.f2
      .fondo-personalizado-1__contenido
        .row.align-items-center
          .col-lg-8
            p.mb-0 Los aceros se aplican en una amplia variedad de industrias y productos gracias a sus propiedades como resistencia y durabilidad. Se emplean en la construcción de estructuras, maquinaria, automóviles, y elementos de uso cotidiano como utensilios de cocina y electrodomésticos. También son esenciales en la fabricación de componentes industriales, herramientas de corte, piezas de maquinaria pesada, y productos sanitarios y decorativos. Cada tipo de acero, como el acero al carbono, los aceros aleados con cromo, níquel o molibdeno, y los aceros inoxidables, se utiliza según sus características específicas para satisfacer distintas necesidades.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 400px;")

        p(style="color: red;") Falta slyder aqui
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Fundiciones
    
    .row
      .col-lg-8
        .fondo-color-sistema-j.p-4.p-md-5.borde-14.mb-4
          p.mb-2 Las fundiciones son aleaciones de hierro y carbono, donde el contenido de carbono varía entre 1.76% y 6.67%, aunque las más comunes contienen entre 2.5% y 4.5%. Además del carbono, pueden incluir elementos como silicio, manganeso, fósforo, azufre, oxígeno, cobre, cromo, níquel y molibdeno, entre otros, según el tipo de fundición y su uso.
        p.mb-0 El proceso de obtención de las fundiciones se realiza mediante colada, utilizando como materia prima el arrabio, chatarra de fundición y cantidades variables de chatarra de acero. Este proceso permite obtener piezas de diversos tamaños y complejidad.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 400px;")
    
    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Propiedades

    p.mb-4 El punto de fusión de las fundiciones varía entre 1100 y 1450 °C, según su tipo, y su peso específico oscila entre 6.7 y 6.8 gramos por centímetro cúbico.

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
