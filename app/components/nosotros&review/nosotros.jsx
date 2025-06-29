"use client";

import Image from 'next/image';
import Link from 'next/link';
import './nosotros.scss';

import StandardButton from '../../buttons/standardButton.jsx';
import Review from './review.jsx';
import Carlos from '../../assets/img/carlos-correa.jpg'


function nosotros(){

    return(
        <div className="nosotros__master">
            <h2 className="nosotros__title">Confía en nosotros</h2>
            <div className="nosotros__tarjeta">
                <Image src={Carlos} alt=""></Image>
                <div className="nosotros__tarjeta-info">
                    <p><strong>CEO</strong> - Iván García Mayans</p>
                </div>
            </div>
            <p className="nosotros__description">
                <strong>Iván García Mayans</strong> es un jardinero con 20 años de experiencia, especializado y certificado en poda y tala en altura. Conocido por su <strong>honestidad y rapidez</strong>, Carlos es un profesional serio que aborda cada tarea con el máximo compromiso y eficiencia. Este enfoque le ha permitido ganarse una sólida reputación como uno de los jardineros más confiables de la provincia de Valencia.
                <br></br><br></br>
                Entre sus clientes más destacados se encuentran el Ayuntamiento de La Eliana, el Ayuntamiento de Liria, así como empresas reconocidas como El Oasis en La Eliana y el Club de Tenis El Collao. Carlos se dedica a ofrecer un servicio que no solo cumple, sino que supera las expectativas, manteniendo siempre un trato cercano y humano con todos sus clientes, sean empresas o particulares. Su <strong>capacidad para conectar con las personas y entender sus necesidades</strong> es lo que realmente distingue su servicio frente al resto de competencia.  
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


            <h2 className="review__title">Nuestros clientes opinan</h2>

            <div className="review__list">
                <Review
                title="Vicent Espí"
                review="Llamé a Iván para poner a punto el jardín del chalet en Daimús: podó las palmeras, plantó un seto de cipreses y ajustó el riego sin cortar ni un cable. El césped quedó mullido y el perímetro de revista. Servicio de diez!!!"
                time="Escrito el 06/08/2024">
                </Review>

                <Review
                title="Amparo Oltra G."
                review="Mi parcela parecía una selva hasta que llegó Iván y los compañeros y desbrozó de arriba abajo. En una mañana la dejaron limpia y sin un matojo suelto. Crack total, mil gracias"
                time="Escrito el 21/11/2023">
                </Review>

                <Review
                title="Ausiàs Navarro"
                review="Para el aljibe necesitaba una buena excavación y Iván llegó con la retro, midió perfecto y niveló la base sin dejar ni un bulto de tierra. Todo rápido, claro y sin sorpresas en la factura. Buen servicio y rápido"
                time="Escrito el 04/05/2025">
                </Review>
            </div>

             <p className="review__ask-review">
                ¿Te han inspirado estas historias sobre la transformación de jardines? 
                <strong> Comparte tu propia reseña</strong> y cuéntanos cómo ha sido tu experiencia; tus comentarios nos impulsan y pueden alentar a otras personas a dar el paso.  
                Dispones de un botón para leer más opiniones y conocer a fondo nuestro trabajo.
                <br /><br />
                Y si ya deseas convertir tu espacio en algo extraordinario, encontrarás también un botón para 
                <strong>contratar nuestro servicio al instante</strong>. Con un solo clic empezarás a disfrutar de un jardín espectacular cuanto antes.
                </p>


             <div className="review__buttons">
                <StandardButton
                link="https://g.page/r/CbwuUZbFLjXpEAE/review"
                title="Review"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="https://maps.app.goo.gl/bnh6pKARVGWfLXUK8"
                title="Google Maps"
                style="emptyStandardButton">
                </StandardButton>
             </div>

        </div>
    );
}

export default nosotros;