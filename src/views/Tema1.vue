<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Aceros
    
    .fondo-personalizado-1.pos-center.f2
      .fondo-personalizado-1__contenido
        .row.mb-4
          .col-lg-8
            .fondo-color-sistema-j.p-4.p-md-5.borde-14.mb-4
              p.mb-0(data-aos="fade-right") El acero es, esencialmente, una aleación de hierro y carbono (entre un 0,05 % y menos de un 2 % de carbono). A veces, se añaden otros elementos de aleación, como cromo (Cr) o níquel (Ni), para cumplir con fines específicos. Dado que el acero está compuesto principalmente de hierro altamente refinado (más del 98 %), su fabricación comienza con la reducción del hierro (producción de arrabio), que posteriormente se transforma en acero.

            p.mb-4(data-aos="fade") El acero presenta un color blanco grisáceo, y su punto de fusión varía entre 1300 y 1530 grados Celsius, dependiendo del porcentaje de carbono y otros elementos de aleación.

            p.mb-0(data-aos="fade-right") A continuación, se presentan algunas de las principales propiedades del acero que lo hacen esencial en diversas aplicaciones industriales:

          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 400px;")
        
        .row.align-items-center
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 398px;")
          .col-lg-8(data-aos="fade-left")
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
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Tipos de acero
    
    p.mb-5(data-aos="fade-up") Existen diversos tipos de acero, cada uno con características específicas que los hacen adecuados para diferentes aplicaciones industriales. A continuación, se presenta una breve descripción de los principales tipos de acero y sus usos:

    .row.align-items-center.mb-4
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
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

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Influencia de los elementos de aleación en el acero
    
    .row.align-items-center.mb-5(data-aos="zoom-in-out")
      .col-lg-8
        p.mb-4 Los aceros contienen elementos de aleación que mejoran sus características fundamentales. La influencia de estos elementos es variada, y al ajustar el porcentaje adecuado, se pueden obtener aceros con propiedades muy diferentes.
        p.mb-0 Es posible fabricar piezas de gran espesor con alta resistencia en su interior, herramientas resistentes a la corrosión, componentes mecánicos que combinan una gran dureza con tenacidad, y mecanismos que conservan su resistencia incluso a altas temperaturas. También se pueden crear moldes de formas complejas que no se deformen ni agrieten durante el tratamiento térmico.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 400px;")
    
    .fondo-personalizado-1.f3.mb-5(data-aos="fade-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Cobre (Cu)
                p.mb-0 Aumenta la resistencia a la tracción, pero incrementa la fragilidad a altas temperaturas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Cromo (Cr)
                p.mb-0 Mejora la resistencia a la corrosión y oxidación, así como la resistencia a la abrasión y al desgaste. Facilita el tratamiento térmico y aumenta la resistencia mecánica a altas temperaturas. Es clave en la fabricación de aceros inoxidables.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Fósforo (P)
                p.mb-0 Aumenta la resistencia y dureza en aceros bajos en carbono, mejora la resistencia a la corrosión y la maquinabilidad, pero reduce la tenacidad.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Hidrógeno (H)
                p.mb-0 Provoca fragilidad en el acero, siendo un elemento muy nocivo.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Aluminio (Al)
                p.mb-0 Actúa como antioxidante y limita el crecimiento del grano, formando óxidos y nitruros. Es fundamental en ciertos aceros de nitruración.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Azufre (S)
                p.mb-0 Aumenta la fragilidad, pero facilita el mecanizado.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Carbono (C)
                p.mb-0 Incrementa la resistencia, el límite de elasticidad y la dureza, aunque disminuye la ductilidad y maleabilidad.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Manganeso (Mn)
                p.mb-0 Elimina la fragilidad en caliente causada por el azufre y mejora la resistencia al desgaste y a la oxidación. Facilita el tratamiento térmico.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Molibdeno (Mo)
                p.mb-0 Mejora el tratamiento térmico, la resistencia mecánica a altas temperaturas y la resistencia al desgaste.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Níquel (Ni)
                p.mb-0 Aumenta la resistencia en aceros no templados, proporciona tenacidad a bajas temperaturas y mejora la resistencia a la corrosión.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Nitrógeno (N)
                p.mb-0 Facilita el tratamiento térmico y aumenta la resistencia de algunos aceros inoxidables.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Oxígeno (O)
                p.mb-0 Incrementa la fragilidad del acero y disminuye su resistencia a los impactos.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Plomo (Pb)
                p.mb-0 Facilita el mecanizado.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Silicio (Si)
                p.mb-0 Actúa como desoxidante y aumenta la resistencia de los aceros bajos en carbono. Se usa en la construcción de chapas magnéticas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Titanio (Ti)
                p.mb-0 Actúa como desoxidante y mejora la capacidad de conformado del material.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Boro (B)
                p.mb-0 Facilita el tratamiento térmico y aumenta la dureza en aceros inoxidables.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Vanadio (V)
                p.mb-0 Facilita el tratamiento térmico, mejora la resistencia al desgaste en herramientas y refuerza aceros de bajo carbono.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Wolframio (W)
                p.mb-0 Aumenta la resistencia al desgaste en herramientas y facilita el tratamiento térmico.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 425px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Cobalto (Co)
                p.mb-0 Mejora la resistencia a la corrosión y la abrasión, y aumenta la dureza a altas temperaturas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 425px;")

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Aplicaciones de los aceros
    
    .fondo-personalizado-1.f2
      .fondo-personalizado-1__contenido
        .row.align-items-center.mb-5
          .col-lg-8(data-aos="fade-right")
            p.mb-0 Los aceros se aplican en una amplia variedad de industrias y productos gracias a sus propiedades como resistencia y durabilidad. Se emplean en la construcción de estructuras, maquinaria, automóviles, y elementos de uso cotidiano como utensilios de cocina y electrodomésticos. También son esenciales en la fabricación de componentes industriales, herramientas de corte, piezas de maquinaria pesada, y productos sanitarios y decorativos. Cada tipo de acero, como el acero al carbono, los aceros aleados con cromo, níquel o molibdeno, y los aceros inoxidables, se utiliza según sus características específicas para satisfacer distintas necesidades.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 400px;")

        .fondo-personalizado-1.f3.mb-5(data-aos="fade-up")
          .fondo-personalizado-1__contenido.py-5
            .bg-white.p-4.borde-20
              LineaTiempoC.linea-tiempo-c-1.color-acento-contenido(text-small)
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al carbono
                    p.mb-0 Se emplean en una amplia variedad de productos como láminas, alambres, varillas, clavos, tornillos, arandelas, abrazaderas, varillas de refuerzo para concreto, planchas, secciones estructurales de acero, ejes, engranajes, baldes, cajones, cerraduras, bisagras, tuberías para fluidos no corrosivos, partes de resistencias eléctricas, reactancias, núcleos de motores eléctricos, armaduras de protección de cables de datos, tubos estructurales, máquinas, componentes móviles de automóviles y camiones (como ejes y parantes), cascos de buques, tubos para bicicletas, alfileres y cerraduras de puertas.
                
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al manganeso
                    p.mb-0 Utilizados principalmente en sectores como el movimiento de tierra, minería, perforación de pozos, siderurgia, la industria ferroviaria y la fabricación de productos de cemento y arcilla. Se encuentran en equipos como molinos, dientes de pala, bombas para manejar grava, martillos, rejillas para el reciclaje de automóviles, carriles, cruzamientos de vías, piezas de machacadores, canales de evacuación de viruta, protecciones de máquinas, molinos, cajas de caudales, blindajes de máquinas granalladoras, plataformas vibratorias, barras de desgaste en transportadores, piezas para trituradoras, ruedas dentadas, cadenas de transportadores, tablillas y carcazas.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros cromo-níquel
                    p.mb-0 Se emplean en equipamientos sanitarios públicos, utensilios de cocina y aceros de cementación.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al cromo-molibdeno
                    p.mb-0 Utilizados en la construcción de maquinaria y en la industria sanitaria.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al cromo-níquel-molibdeno
                    p.mb-0 Son utilizados para fabricar productos como láminas, alambres, varillas, clavos, tornillos, arandelas, abrazaderas, varillas de refuerzo, planchas, secciones estructurales, ejes, engranajes, baldes, cajones, cerraduras, bisagras, tuberías para fluidos no corrosivos, componentes de resistencias eléctricas, reactancias, núcleos de motores eléctricos, armaduras para cables de datos, tubos estructurales, máquinas, piezas móviles de automóviles y camiones, cascos de buques, tubos para bicicletas, alfileres y cerraduras de puertas.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros inoxidables
                    p.mb-0 Con un contenido de cromo superior al 12 %, se utilizan en el hogar (cubertería y utensilios de cocina), la industria (plantas químicas), la construcción, mobiliario urbano, electrodomésticos y sistemas de escape de vehículos, debido a su resistencia a la oxidación y su superficie brillante. En arquitectura, se utilizan frecuentemente con fines decorativos. También se emplean en la fabricación de instrumentos y equipos quirúrgicos, y para fijar o reemplazar huesos rotos debido a su resistencia a los fluidos corporales.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al cromo
                    p.mb-0 Utilizados principalmente para la fabricación de láminas debido a su alta dureza.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al cromo-vanadio
                    p.mb-0 Se emplean en la fabricación de muelles, resortes y bisagras, siendo especialmente comunes en la industria automovilística y ferretera.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al níquel
                    p.mb-0 Son usados en procesos de cementación y en piezas que requieren alta resistencia.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 408px;")
                .row.justify-content-center.py-5(titulo="")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4.mb-lg-5 Aceros al molibdeno-tungsteno #[em (wolframio)]
                    p.mb-0 Estos aceros son ideales para la fabricación de herramientas de corte.
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 408px;")
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Fundiciones
    
    .row
      .col-lg-8
        .fondo-color-sistema-j.p-4.p-md-5.borde-14.mb-4(data-aos="flip-up")
          p.mb-2 Las fundiciones son aleaciones de hierro y carbono, donde el contenido de carbono varía entre 1.76 % y 6.67 %, aunque las más comunes contienen entre 2.5 % y 4.5 %. Además del carbono, pueden incluir elementos como silicio, manganeso, fósforo, azufre, oxígeno, cobre, cromo, níquel y molibdeno, entre otros, según el tipo de fundición y su uso.
        p.mb-0 El proceso de obtención de las fundiciones se realiza mediante colada, utilizando como materia prima el arrabio, chatarra de fundición y cantidades variables de chatarra de acero. Este proceso permite obtener piezas de diversos tamaños y complejidades.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 400px;")
    
    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Propiedades

    p.mb-5(data-aos="fade-right") El punto de fusión de las fundiciones varía entre 1100 y 1450 °C, según su tipo, y su peso específico oscila entre 6.7 y 6.8 gramos por centímetro cúbico.

    .fondo-personalizado-1.bottom-1.top-1.f4
      .fondo-personalizado-1__contenido
        TabsB.color-acento-contenido.tabs-p-1(data-aos="zoom-in-out")
          .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Fundición blanca" :icono="require('@/assets/curso/temas/44.svg')")
            .row.justify-content-center
              .col-lg-6
                h4.mb-4 Fundición blanca
                p.mb-0 Contiene bajos niveles de carbono (1.8 a 3.6 %) en forma de cementita y un mínimo de silicio (0.5 a 2 %), además de manganeso, fósforo y azufre. Su alta velocidad de enfriamiento le confiere mayor dureza que la fundición gris. Su punto de fusión oscila entre 1100 y 1200 °C y debe su nombre a la apariencia blanca en la superficie de rotura.
              .col-lg-5.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 457px;")
          .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Fundición gris" :icono="require('@/assets/curso/temas/46.svg')")
            .row.justify-content-center
              .col-lg-6
                h4.mb-4 Fundición gris
                p.mb-0 También conocida como hierro fundido o hierro colado, contiene carbono en forma de grafito, con un contenido de 2.5 % a 4 % de carbono y de 1 % a 3 % de silicio.
              .col-lg-5.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 457px;")
          .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Fundición nodular" :icono="require('@/assets/curso/temas/47.svg')")
            .row.justify-content-center
              .col-lg-6
                h4.mb-4 Fundición nodular
                p.mb-0 Presenta grafito en forma esférica o nodular. Su composición incluye 3 % a 4 % de carbono, 1.8 % a 2.8 % de silicio, 0.15 % a 0.9 % de manganeso, un máximo de 0.1 % de fósforo, y hasta 0.3 % de azufre. Se obtiene a partir de fundición gris, con la adición de magnesio o cerio para formar la estructura nodular, sin requerir tratamiento térmico posterior.
              .col-lg-5.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 457px;")
          .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Fundición maleable" :icono="require('@/assets/curso/temas/50.svg')")
            .row.justify-content-center
              .col-lg-6
                h4.mb-4 Fundición maleable
                p.mb-0 Se obtiene mediante un tratamiento térmico de recocido aplicado a la fundición blanca, a temperaturas entre 800 y 980 °C durante un periodo prolongado y en una atmósfera neutra. La microestructura resultante es similar a la de la fundición nodular.
              .col-lg-5.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 457px;")
          .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Fundición aleada" :icono="require('@/assets/curso/temas/52.svg')")
            .row.justify-content-center
              .col-lg-6
                h4.mb-4 Fundición aleada
                p.mb-0 Contiene elementos aleantes como cobre, níquel, molibdeno, cromo y vanadio, que mejoran las propiedades mecánicas y tecnológicas de las fundiciones ordinarias. La adición de estos elementos influye en la velocidad de grafitización, otorgando características y aplicaciones específicas según los elementos y porcentajes utilizados.
              .col-lg-5.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 457px;")

        .titulo-decorativo.mq-p-1.my-5.mb-4
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 La conservación del medio ambiente en la siderurgia
        
        .row.align-items-center.mb-5
          .col-md-10
            p.mb-0 La conservación del medio ambiente es una prioridad para las empresas, que buscan un uso racional de los recursos naturales y la protección de las personas. Sin embargo, en el caso de la industria siderúrgica, los desafíos ambientales son significativos:
          .col-md-2.order-first.order-md-last
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 93px;")
        
        .row.justify-content-center
          .col-lg-5.mb-4
            .fondo-color-sistema-m.h-100.borde-17
              .position-relative.d-flex.justify-content-center.mb-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/38.png")
                .texto-p-1.px-3
                  h4.mb-0.p-1 Emisiones de CO₂

              p.p-4 Las empresas siderúrgicas son responsables de aproximadamente el 27 % de las emisiones de CO₂ a nivel mundial. Sin embargo, la contaminación generada por los hornos de arco eléctrico es menor en comparación con otros métodos.
          .col-lg-5.mb-4
            .fondo-color-sistema-m.h-100.borde-17
              .position-relative.d-flex.justify-content-center.mb-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/39.png")
                .texto-p-1.px-3
                  h4.mb-0.p-1 Tipos de siderurgia y su impacto

              p.p-4.pb-3 #[b Siderurgia integral]. Cubre todo el proceso, desde la extracción de minerales, lo que genera una mayor cantidad de emisiones y residuos.
              p.p-4.pt-0 #[b Siderurgia no integral]. Utiliza hornos eléctricos y chatarra como materia prima, lo que reduce las emisiones de CO₂.

    p.my-4(data-aos="fade-right") Los desafíos ambientales en la siderurgia son: 

    .row.align-items-center.mb-5(data-aos="fade-up")
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 296px;")
      .col-lg-9(data-aos="fade-left")
        AcordionA.acordion-personalizado-1.mb-0(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Uso del agua")
            .ps-md-5.ms-md-3
              p Las instalaciones de colada continua requieren grandes cantidades de agua para la refrigeración, lo que puede resultar en aguas residuales con alto contenido de aceites, generando problemas de contaminación hídrica. Es fundamental el reciclaje de más del 90 % del agua utilizada y la depuración de las aguas residuales restantes.
          .div(titulo="Generación de escorias y residuos")
            .ps-md-5.ms-md-3
              p Las escorias producidas durante los procesos metalúrgicos, si no se manejan adecuadamente, pueden contaminar el suelo y el agua. En las plantas de fundición, se generan residuos como arena usada, restos de moldes y escorias, lo que requiere un manejo eficiente para reducir su impacto ambiental.
          .div(titulo="Captación de polvo")
            .ps-md-5.ms-md-3
              p La instalación de sistemas de captación de polvo con filtros de mangas es una solución eficaz para minimizar la emisión de partículas contaminantes en la atmósfera.
    
    p.mb-3(data-aos="fade") Los avances tecnológicos y sostenibilidad son:

    .fondo-personalizado-1.f4
      .fondo-personalizado-1__contenido.pt-3.pb-4
        .row.align-items-center.mb-5
          .col-lg-6(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 610px;")
          .col-lg-6(data-aos="fade-right")
            .fondo-color-sistema-o.p-4.borde-17.mb-4
              h4.mb-4 Sustitución de materiales
              p.mb-5 Se trabaja en el desarrollo de métodos para reemplazar el coque por carbón y utilizar mineral en trozos, en lugar de aglomerados de sinterización o pellets, con el fin de reducir el impacto ambiental.
            .fondo-color-sistema-o.p-4.borde-17
              h4.mb-4 Optimización de procesos
              p.mb-4 Se busca mejorar la fundición de las piezas para el laminado, ajustando las dimensiones del producto final, lo que permite:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-check-circle.c-color-acento-contenido
                  span Reducir el consumo de energía.
                li.d-flex.mb-0
                  i.fas.fa-check-circle.c-color-acento-contenido
                  span Disminuir la cantidad de residuos.
                li.d-flex.mb-0
                  i.fas.fa-check-circle.c-color-acento-contenido
                  span Acortar la cadena de producción y minimizar las emisiones generadas.
        
        .row.justify-content-center.mb-5
          .col-lg-10
            .fondo-color-sistema-m.p-4.px-lg-5.borde-15.sombra-p-2(data-aos="flip-up")
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 76px;")
                .col
                  p.mb-0 Estas acciones reflejan el compromiso de la industria siderúrgica con la sostenibilidad y la reducción de su huella ambiental.




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
