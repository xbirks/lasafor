"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';



function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios"> 

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Desbroce de parcelas ${municipio}`}
        description="Desbroce limpio y seguro que elimina maleza y residuos, previniendo incendios y plagas. Dejamos el terreno listo para cultivos, obras o mantenimiento paisajístico."
        img="/img/desbroce.jpg"
        top="block"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Labranza con rotobato ${municipio}`}
        description="Con rotobato de alto rendimiento mejoramos la estructura y oxigenación del suelo, fragmentando terrones y mezclando nutrientes. Base perfecta para césped, huertos o jardines sin compactar la tierra."
        img="/img/rotobato.jpg"
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Excavaciones con retroexcavadora ${municipio}`}
        description="Zanjas, cimentaciones y movimientos de tierra ejecutados con exactitud milimétrica. Operadores certificados y cumplimiento estricto de las normas de seguridad laboral."
        img="/img/excavadora.jpg"
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Poda integral ${municipio}`}
        description="Saneamos y damos forma a arbustos y árboles de cualquier tamaño, fomentando un crecimiento saludable y eliminando riesgos. Cortes limpios con herramientas homologadas."
        img="/img/poda.jpg"
        top="none"
        link="/"
        ></Grid>

      
        <Grid
        service={`Servicios agrícolas con tractor ${municipio}`}
        description="Tractores equipados con aperos de desbroce, arado y remolque para trabajos a gran escala. Eficiencia máxima en fincas, polígonos y grandes parcelas."
        img="/img/tractor.jpg"
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Limpieza integral de parcelas ${municipio}`}
        description="Retirada de desechos y maleza para preparar el terreno o mantenerlo en óptimas condiciones, evitando plagas y mejorando la seguridad."
        img="/img/parcelas.jpg"
        top="none"
        link="/"
        ></Grid>
        

        </div>


       
        



        <h2 id="mantenimiento">Plantas</h2>

        <div className="gridmaster__elements">


        <Grid
        service={`Plantas a medida y ejemplares únicos ${municipio}`}
        description="Gestionamos pedidos especiales: bonsáis centenarios, árboles ejemplares y colecciones raras, con entrega garantizada y controles fitosanitarios."
        img="/img/plantas.jpg"
        top="block"
        link="/"
        ></Grid>

        <Grid
        service={`Control fitosanitario y de plagas ${municipio}`}
        description="Diagnóstico y tratamiento certificado contra insectos y enfermedades. Métodos químicos y biológicos según normativa vigente."
        img="/img/fito.jpg"
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Setos verdes listos para plantar ${municipio}`}
        description="Suministramos y colocamos setos en contenedor de crecimiento rápido que crean pantallas naturales de privacidad y protección frente a viento y ruido."
        img="/img/setos.jpg"
        top="none"
        link="/"
        ></Grid>

        </div>


        
        <h2 id="instalaciones">Instalaciones</h2>

        <div className="gridmaster__elements">

         <Grid
        service={`Vallados y soluciones auxiliares ${municipio}`}
        description="Instalación de cerramientos, redes de riego, iluminación exterior y pequeñas obras de albañilería para un jardín funcional y seguro."
        img="/img/vallado.jpg"
        top="none"
        link="/"
        ></Grid>


        <Grid
        service={`Depósitos esféricos de agua ${municipio}`}
        description="Suministramos e instalamos aljibes de fibra de vidrio de alta resistencia, ideales para almacenar hasta 30 000 L de agua de lluvia o riego. Incluye excavación, base nivelada, conexiones hidráulicas y motobomba sumergible con doble filtrado."
        img="/img/deposito.jpg"
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Grifos y tomas de agua exteriores ${municipio}`}
        description="Montamos puntos de servicio en acero inoxidable o latón antical para mangueras, pulverizadores y herramientas de limpieza. Cierre antigoteo y opción de llaves antirrobo."
        img="/img/grifos.jpg"
        top="none"
        link="/"
        ></Grid>

        </div>

</div>

    );


}

export default GridMaster; 