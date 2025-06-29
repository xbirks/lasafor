"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG

function SeoCards({municipio}){

    return(

        <div className="seoCards">
            <Card
            title={`Servicio de desbroce profesional en ${municipio}: parcela lista y sin riesgos`}
            info={
                <>
                    <p>
                    ¿Te preocupa la maleza que se acumula y el riesgo de incendio que conlleva?  
                    Nuestro equipo elimina hierbas, arbustos y residuos vegetales con
                    trituradora de martillos y hilo de nylon industrial, dejando el terreno
                    limpio y preparado para obra, cultivo o simple mantenimiento.
                    </p>
                    <p>Ventajas directas:</p>
                    <ul>
                    <li>Prevención de incendios y plagas.</li>
                    <li>Mejora de la accesibilidad para maquinaria y peatones.</li>
                    <li>Gestión certificada de restos en ecoparque.</li>
                    </ul>
                    <strong>
                    Pide presupuesto sin compromiso y agenda tu desbroce antes de la
                    próxima inspección.
                    </strong>
                </>
                }
            img="/img/safor2.jpg"
            alt="Tractor con desbrozadora limpiando una parcela de matorral"
            ></Card>

            <Card
            title={`Poda integral de árboles en ${municipio}: seguridad y crecimiento saludable`}
            info={
                <>
                ¿Ramas sobre cables o copas demasiado densas? Nuestros podadores
                certificados realizan cortes limpios en el momento óptimo, fomentando la
                floración y evitando riesgos de caída.<br /><br />
                ¿Qué obtienes?
                <ul>
                    <li>Plan de poda adaptado a especie y edad del árbol.</li>
                    <li>Herramienta homologada y retirada de restos.</li>
                    <li>Informe fitosanitario post-intervención.</li>
                </ul>
                <strong>Solicita fecha y deja tus árboles en manos expertas.</strong>
                </>
            }
            img="/img/safor1.jpg"
            alt="Arborista profesional podando la copa de un árbol con motosierra"
            ></Card>

            <Card
            title={`Vallados a medida en ${municipio}: cierre seguro y estético para tu parcela`}
            info={
                <>
                ¿Necesitas proteger tu terreno o dar privacidad al jardín? Instalamos
                malla simple torsión, panel rígido, valla ganadera o cerramiento de madera,
                todo con postes galvanizados y anclaje en hormigón.<br /><br />
                Qué incluye el servicio:
                <ul>
                    <li>Visita técnica y medición precisa in situ.</li>
                    <li>Replanteo, excavación de zapatas y hormigonado.</li>
                    <li>Puertas peatonales o correderas con cerradura de seguridad.</li>
                </ul>
                <strong>Solución llave en mano: te entregamos el cierre tensado,
                alineado y garantizado contra corrosión.</strong>
                </>
            }
            img="/img/safor3.jpg"
            alt="Operarios instalando panel rígido de vallado en perímetro ajardinado"
            ></Card>

        </div>
    )

};

export default SeoCards;