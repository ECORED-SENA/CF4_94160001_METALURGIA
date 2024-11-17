<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.p-4.py-5.borde-20
          figure.py-lg-5
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis describe la clasificación de los metales ferrosos en aceros y fundiciones. Los aceros tienen propiedades específicas y se agrupan en diferentes tipos, como al carbono, HSLA, de alta aleación e inoxidables. La influencia de los elementos de aleación afecta sus propiedades y aplicaciones, lo que a su vez tiene un impacto ambiental. Por otro lado, las fundiciones se dividen en tipos como gris, maleable y blanca, cada una con características distintas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
