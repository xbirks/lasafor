"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';

import StandardButton from '../../buttons/standardButton.jsx';


function Grid({service, description, img, top, link}){

    return(

        <div className="grid__master">
            <div className="grid__img">
                <Image src={img} alt={`fotografía de ${service} hecho por Jardinería La Safor en Gandía`}  width={733} height={490} loading="lazy"></Image>
                <div className="top-solicitado" style={{ display: top }}><p>TOP SOLICITADO</p></div>
            </div>

            <div className="grid__info">

            <a href={link}><h3 className="grid__service">{service}</h3></a>
            <p className="grid__description">{description}</p>
            <div className="grid__buttons">
                <StandardButton
                link="https://wa.me/34654286888"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>
            </div>

            </div>

        </div>


    );
}

export default Grid;