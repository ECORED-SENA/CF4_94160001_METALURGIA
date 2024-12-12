<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Metales ferrosos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Reconocer las características, tipos, aplicaciones y procesos de fabricación de aceros y fundiciones, así como la influencia de los elementos de aleación en sus propiedades.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el porcentaje de carbono presente en la mayoría de los aceros al carbono?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Menos del 0,5 %.', esCorrecta: false },
            { id: 'b', texto: 'Menos del 2 %.', esCorrecta: true },
            { id: 'c', texto: 'Entre el 3 % y el 5 %.', esCorrecta: false },
            { id: 'd', texto: 'Más del 5 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de acero es ideal para fabricar herramientas de corte?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aceros al carbono.', esCorrecta: false },
            { id: 'b', texto: 'Aceros al cromo.', esCorrecta: false },
            { id: 'c', texto: 'Aceros al manganeso.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aceros al molibdeno - <em>Wolframio</em> (tungsteno).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una característica principal de la fundición nodular?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Su contenido de cromo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La forma esférica del grafito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Su alta cantidad de silicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La necesidad de tratamiento térmico adicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento de aleación en el acero facilita su mecanizado?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cromo.', esCorrecta: false },
            { id: 'b', texto: 'Azufre.', esCorrecta: true },
            { id: 'c', texto: 'Níquel.', esCorrecta: false },
            { id: 'd', texto: 'Manganeso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes elementos mejora la resistencia del acero a la oxidación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cromo.', esCorrecta: true },
            { id: 'b', texto: 'Silicio.', esCorrecta: false },
            { id: 'c', texto: 'Fósforo.', esCorrecta: false },
            { id: 'd', texto: 'Plomo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Los aceros HSLA se caracterizan por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su alto contenido de carbono.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Su alta resistencia y baja aleación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Su uso exclusivo en la industria automotriz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su bajo costo de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes elementos se considera muy nocivo en los aceros por aumentar su fragilidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Níquel.', esCorrecta: false },
            { id: 'b', texto: 'Silicio.', esCorrecta: false },
            { id: 'c', texto: 'Hidrógeno.', esCorrecta: true },
            { id: 'd', texto: 'Manganeso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de fundición se caracteriza por ser más dura y presentar un color blanco en la rotura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fundición gris.', esCorrecta: false },
            { id: 'b', texto: 'Fundición nodular.', esCorrecta: false },
            { id: 'c', texto: 'Fundición blanca.', esCorrecta: true },
            { id: 'd', texto: 'Fundición maleable.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El acero inoxidable es resistente a la corrosión gracias a la presencia de cromo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La fundición maleable se obtiene directamente en bruto de la colada sin necesidad de tratamiento térmico.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué elemento en los aceros aumenta su resistencia a la tracción pero también su fragilidad a altas temperaturas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Níquel.', esCorrecta: false },
            { id: 'b', texto: 'Cromo.', esCorrecta: true },
            { id: 'c', texto: 'Boro.', esCorrecta: false },
            { id: 'd', texto: 'Silicio.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la principal desventaja de los aceros al carbono?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Su alta tenacidad.', esCorrecta: false },
            { id: 'b', texto: 'Su baja ductilidad.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Su facilidad para corroerse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Su resistencia a altas temperaturas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿En qué tipo de industria es común el uso de aceros al manganeso?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Minera y siderúrgica.', esCorrecta: true },
            { id: 'b', texto: 'Textil.', esCorrecta: false },
            { id: 'c', texto: 'Farmacéutica.', esCorrecta: false },
            { id: 'd', texto: 'Alimentaria.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de fundición se obtiene mediante un tratamiento térmico de recocido aplicado a la fundición blanca?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fundición gris.', esCorrecta: false },
            { id: 'b', texto: 'Fundición maleable.', esCorrecta: true },
            { id: 'c', texto: 'Fundición nodular.', esCorrecta: false },
            { id: 'd', texto: 'Fundición aleada.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué elemento en los aceros aumenta su resistencia a la tracción pero también su fragilidad a altas temperaturas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Níquel.', esCorrecta: false },
            { id: 'b', texto: 'Cobre.', esCorrecta: false },
            { id: 'c', texto: 'Silicio.', esCorrecta: false },
            { id: 'd', texto: 'Cromo.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
