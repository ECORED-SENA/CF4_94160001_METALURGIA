<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-3.pb-5
        p.mb-5(data-aos="fade-up") El acero y las fundiciones son materiales fundamentales en la industria moderna debido a sus múltiples aplicaciones y su relevancia en la construcción de infraestructuras, desde puentes y edificios hasta componentes industriales. Estos materiales ferrosos, formados principalmente por aleaciones de hierro y carbono, ofrecen una gran variedad de propiedades que los hacen adecuados para diferentes usos, desde piezas mecánicas hasta estructuras arquitectónicas.

        .bloque-texto-g.bloque-texto-g--inverso.fondo-color-sistema-i.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La fabricación de aceros incluye procesos que involucran la reducción de hierro y la incorporación de elementos de aleación, como cromo, níquel y manganeso, que mejoran sus propiedades, como la resistencia a la corrosión y la durabilidad. La composición y el tratamiento térmico de cada tipo de acero determinan su dureza, tenacidad y maleabilidad, permitiendo su adaptación a distintos campos industriales.
        
        .row.align-items-center
          .col-md-auto(data-aos="fade-right")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 82px;")
          .col(data-aos="fade-left")
            p.mb-0 Las fundiciones, por su parte, son aleaciones de hierro y carbono con un mayor porcentaje de carbono que el acero, lo que les otorga una mayor fluidez para el proceso de colada. Existen diferentes tipos de fundiciones, como la blanca, gris y nodular, cada una con características específicas que las hacen útiles para fabricar componentes de gran espesor y piezas complejas. Además, el reciclaje y la optimización de los procesos de fabricación ayudan a reducir el impacto ambiental de la industria siderúrgica.
    
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
