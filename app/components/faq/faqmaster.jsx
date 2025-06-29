"use client";

import Image from 'next/image';
import Link from 'next/link';
import './faq.scss';
import FaqItem from './faq';

function FaqMaster(){

    return(
        <div className="faqMaster">

            <h2>¿Tienes preguntas?</h2>

            <p className="faq__comment">Te dejamos aquí una lista con preguntas frecuentes:</p>
            
            <FaqItem
            titulo="¿Cuál es el precio aproximado del desbroce de parcelas en Gandía o la Safor si mi terreno tiene unos 1 000 m²?"
            explicacion="El coste empieza en torno a 0,20 €–0,35 €/m², dependiendo de la densidad de la maleza y la accesibilidad. Incluimos retirada de restos y desbroce con hilo de nylon o martillos, según convenga. Pide un presupuesto gratuito y afinamos la cifra al céntimo." 
            ></FaqItem>

            <FaqItem
            titulo="¿Puedo combinar desbroce de parcela y limpieza integral en la misma visita para reducir costes y tiempo de espera?"
            explicacion="Claro. Al llevar una sola cuadrilla con trituradora y camión basculante ahorras un segundo desplazamiento y optimizas la mano de obra. Normalmente el descuento ronda el 10 % sobre la suma de ambos servicios por separado, y la parcela queda lista en un único día, lista para inspección o nueva siembra." 
            ></FaqItem>

            <FaqItem
            titulo="Para un huerto casero, ¿cada cuánto conviene labrar la tierra con rotobato y qué ventajas tiene?"
            explicacion="Con hacer una pasada profunda al inicio de la temporada y otra liviana antes de cada siembra suele bastar. El rotobato rompe terrones, airea el suelo y mezcla abonos sin compactarlo, así que las raíces crecen a gusto y el riego cunde más." 
            ></FaqItem>
            
            <FaqItem
            titulo="¿Qué época es la mejor para la poda integral de naranjos en la comarca y qué equipo utilizáis?"
            explicacion="Entre febrero y marzo, justo tras la cosecha y antes del brote primaveral. Usamos tijeras de pértiga certificadas, sierras japonesas y plataformas elevadoras para cortes limpios que evitan hongos y favorecen fruta de calibre homogéneo." 
            ></FaqItem>

            <FaqItem
            titulo="Después de la limpieza integral de una parcela, ¿os ocupáis del transporte de restos a un punto verde?"
            explicacion="Claro. Cargamos los residuos, emitimos justificante y los llevamos al ecoparque autorizado. Tú recibes la parcela limpia y la documentación por si la pide el ayuntamiento." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto tiempo tarda en cerrar visualmente un seto en contenedor y qué mantenimiento necesita al principio?"
            explicacion="Con ejemplares de 1,50 m ya formados, en unos 6–8 meses tienes pantalla verde. Solo riego regular, un abonado de liberación lenta y dos despuntes ligeros para que engorde parejo." 
            ></FaqItem>

            <FaqItem
            titulo="Dispongo de 5 ha y quiero mecanizar la faena: ¿qué superficie real podéis trabajar con tractor en una sola jornada y qué operaciones cubrís?"
            explicacion="Con un turno de 8 h podemos desbrozar hasta 3 ha con trituradora de martillos, o bien arar unas 2 ha en profundidad y pasar el rodillo nivelador. Si se combina apero (desbroce + arado superficial) la media ronda 2,5 ha. El servicio incluye desplazamiento, combustible, operador certificado y evacuación de restos si se requiere." 
            ></FaqItem>

            <FaqItem
            titulo="Si contrato un depósito esférico enterrado de 20 000 L, ¿la instalación viene completa con motobomba, filtrado y conexiones listas para usar?"
            explicacion="Sí. El paquete llave en mano cubre excavación y solera compactada, colocación del aljibe de fibra, doble filtrado de entrada, válvula antirretorno, motobomba sumergible con cuadro eléctrico, pruebas de estanqueidad y arranque. Te lo dejamos todo probado; solo tendrás que enchufar la manguera o programador de riego." 
            ></FaqItem>

            <FaqItem
            titulo="Tras instalar un sistema de riego exterior, ¿ofrecéis mantenimiento anual para evitar obstrucciones y fugas?"
            explicacion="Disponemos de plan de revisión preventiva: purgado de líneas, limpieza de filtros, calibración de electroválvulas y sustitución de juntas. Se recomienda una visita al inicio de la temporada y otra antes del invierno para invernar la red. El contrato incluye mano de obra, piezas menores y reporte fotográfico del estado de cada sector." 
            ></FaqItem>


        </div>
    );

}

export default FaqMaster;