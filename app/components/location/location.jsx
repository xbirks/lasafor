"use client";

import Image from 'next/image';
import Link from 'next/link';
import './location.scss';

import StandardButton from '../../buttons/standardButton.jsx';

function Location(){

    return(
        <div className="location__master">
            <h3 className="location__title">¿Dónde necesitas que vayamos?</h3>
            <p className="location__description">
                En <strong>Jardiería La Safor</strong>, damos servicio a toda la comarca de la Safor y sus alrededores, con una cobertura real y constante que abarca desde las zonas más céntricas hasta los rincones rurales con difícil acceso. Nuestra actividad se concentra en municipios como <strong>Gandía, Oliva, Bellreguard, Daimús, Villalonga, Potries, Miramar, Palma de Gandia, Ròtova y L’Alqueria de la Comtessa</strong>, adaptando cada intervención a las condiciones específicas del entorno: tipo de terreno, climatología y necesidades del cliente.
                <br></br><br></br>
                Nuestro equipo trabaja con eficiencia, discreción y herramientas profesionales para garantizar un resultado duradero. Nos desplazamos con todos los medios necesarios para resolver tanto las tareas más básicas como los trabajos técnicos. Respondemos de manera ágil, conscientes de que un buen mantenimiento es cuestión de constancia y de estar cuando se necesita.
                <br></br><br></br>
                Nuestro compromiso nos ha convertido en una referencia local para clientes exigentes en zonas como <strong>Ador, Palmera, Benirredrà o Guardamar de la Safor</strong>, que confían en nosotros año tras año para mantener sus espacios verdes limpios, seguros y bien cuidados. No prometemos, cumplimos: calidad, proximidad y resultados.
                </p>



            <div className="location__buttons">
                <StandardButton
                link="https://wa.me/message/44EBMJCUV7LNO1"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>
            </div>

            <div className="location__seo-link">
                <Link href="/municipios/gandia">Jardineros en Gandía</Link>
                <Link href="/municipios/oliva">Jardineros en Oliva</Link>
                <Link href="/municipios/almoines">Jardineros en Almoines</Link>
                <Link href="/municipios/benirredra">Jardineros en Benirredrà</Link>
                <Link href="/municipios/beniarjo">Jardineros en Beniarjó</Link>
                <Link href="/municipios/benifla">Jardineros en Beniflá</Link>
                <Link href="/municipios/bellreguard">Jardineros en Bellreguard</Link>
                <Link href="/municipios/rafelcofer">Jardineros en Rafelcofer</Link>
                <Link href="/municipios/palma-de-gandia">Jardineros en Palma de Gandia</Link>
                <Link href="/municipios/palmera">Jardineros en Palmera</Link>
                <Link href="/municipios/platja-de-gandia">Jardineros en Platja de Gandía</Link>
                <Link href="/municipios/grau-de-gandia">Jardineros en Grau de Gandía</Link>
                <Link href="/municipios/potries">Jardineros en Potries</Link>
                <Link href="/municipios/daimus">Jardineros en Daimús</Link>
                <Link href="/municipios/guardamar-de-la-safor">Jardineros en Guardamar de la Safor</Link>
                <Link href="/municipios/alqueria-de-la-comtessa">Jardineros en L’Alqueria de la Comtessa</Link>
                <Link href="/municipios/font-den-carros">Jardineros en La Font d’En Carròs</Link>
                <Link href="/municipios/miramar">Jardineros en Miramar</Link>
                <Link href="/municipios/ador">Jardineros en Ador</Link>
                <Link href="/municipios/xeresa">Jardineros en Xeresa</Link>
                <Link href="/municipios/villalonga">Jardineros en Villalonga</Link>
                <Link href="/municipios/rotova">Jardineros en Ròtova</Link>
                <Link href="/municipios/alfauir">Jardineros en Alfauir</Link>
                <Link href="/municipios/piles">Jardineros en Piles</Link>
                <Link href="/municipios/castellonet">Jardineros en Castellonet de la Conquesta</Link>
                <Link href="/municipios/llocnou-de-sant-jeroni">Jardineros en Llocnou de Sant Jeroni</Link>
                <Link href="/municipios/marxuquera">Jardineros en Marxuquera</Link>
                <Link href="/municipios/barx">Jardineros en Barx</Link>
                <Link href="/municipios/la-drova">Jardineros en La Drova</Link>
                <Link href="/municipios/xeraco">Jardineros en Xeraco</Link>
                <Link href="/municipios/simat-de-la-valldigna">Jardineros en Simat de la Valldigna</Link>
                </div>



        </div>


    );
}

export default Location;