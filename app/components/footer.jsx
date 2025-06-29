"use client";

import Image from 'next/image';
import Link from 'next/link';
import '../style.scss';

import ImgButton from '../buttons/imgbutton';
import StandardButton from '../buttons/standardButton';
import HeroBanner from './cabecera/heroBanner';
import FooterForm from '../contactFormFooter';
import SeoAnchor from './footer/seoAnchor';
//IMG
import HeaderLogoFooter from '../assets/icon/header_logo-footer.svg';
import IconServicios from '../assets/img/icon_servicios-dark.svg'
import IconInstalaciones from '../assets/img/icon_instalaciones-dark.svg'
import IconMantenimiento from '../assets/img/icon_mantenimiento-dark.svg'



function Footer(){

    return(
        <div className="footer__master">
            <div className="footer__resume">
                <div className="footer__logo">
                    <Image src={HeaderLogoFooter} alt="logotipo para el footer de Jardinero La Safor" width={217} height={50} loading='lazy'></Image>
                </div>
                <div className="header__nav">
                <ImgButton
                    link="/#servicios"
                    title="Servicios"
                    style="imgButton__white imgb1"
                    icon={IconServicios}
                ></ImgButton>

                <ImgButton
                    link="/#mantenimiento"
                    title="Mantenimiento"
                    style="imgButton__white imgb2"
                    icon={IconMantenimiento}
                ></ImgButton>

                <ImgButton
                    link="/#instalaciones"
                    title="Instalaciones"
                    style="imgButton__white imgb3"
                    icon={IconInstalaciones}
                ></ImgButton>
                </div>
            </div>
            <HeroBanner></HeroBanner>
            <div className="footer__contacto">
                <h4 className="footer__contacto-title">Somos jardineros, <span>¿podemos ayudarte?</span></h4>
                <StandardButton
                link="tel:+34654286888"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>

                <FooterForm></FooterForm>
            </div>

            <div className="footer__seo-anchor">
            <SeoAnchor link="/municipios/gandia" pueblo="Gandía"></SeoAnchor>
            <SeoAnchor link="/municipios/oliva" pueblo="Oliva"></SeoAnchor>
            <SeoAnchor link="/municipios/almoines" pueblo="Almoines"></SeoAnchor>
            <SeoAnchor link="/municipios/benirredra" pueblo="Benirredrà"></SeoAnchor>
            <SeoAnchor link="/municipios/beniarjo" pueblo="Beniarjó"></SeoAnchor>
            <SeoAnchor link="/municipios/benifla" pueblo="Beniflá"></SeoAnchor>
            <SeoAnchor link="/municipios/bellreguard" pueblo="Bellreguard"></SeoAnchor>
            <SeoAnchor link="/municipios/rafelcofer" pueblo="Rafelcofer"></SeoAnchor>
            <SeoAnchor link="/municipios/palma-de-gandia" pueblo="Palma de Gandia"></SeoAnchor>
            <SeoAnchor link="/municipios/palmera" pueblo="Palmera"></SeoAnchor>
            <SeoAnchor link="/municipios/platja-de-gandia" pueblo="Platja de Gandía"></SeoAnchor>
            <SeoAnchor link="/municipios/grau-de-gandia" pueblo="Grau de Gandía"></SeoAnchor>
            <SeoAnchor link="/municipios/potries" pueblo="Potries"></SeoAnchor>
            <SeoAnchor link="/municipios/daimus" pueblo="Daimús"></SeoAnchor>
            <SeoAnchor link="/municipios/guardamar-de-la-safor" pueblo="Guardamar de la Safor"></SeoAnchor>
            <SeoAnchor link="/municipios/lalqueria-de-la-comtessa" pueblo="L’Alqueria de la Comtessa"></SeoAnchor>
            <SeoAnchor link="/municipios/la-font-den-carros" pueblo="La Font d’En Carròs"></SeoAnchor>
            <SeoAnchor link="/municipios/miramar" pueblo="Miramar"></SeoAnchor>
            <SeoAnchor link="/municipios/ador" pueblo="Ador"></SeoAnchor>
            <SeoAnchor link="/municipios/xeresa" pueblo="Xeresa"></SeoAnchor>
            <SeoAnchor link="/municipios/villalonga" pueblo="Villalonga"></SeoAnchor>
            <SeoAnchor link="/municipios/rotova" pueblo="Ròtova"></SeoAnchor>
            <SeoAnchor link="/municipios/alfauir" pueblo="Alfauir"></SeoAnchor>
            <SeoAnchor link="/municipios/piles" pueblo="Piles"></SeoAnchor>
            <SeoAnchor link="/municipios/castellonet-de-la-conquesta" pueblo="Castellonet de la Conquesta"></SeoAnchor>
            <SeoAnchor link="/municipios/llocnou-de-sant-jeroni" pueblo="Llocnou de Sant Jeroni"></SeoAnchor>
            <SeoAnchor link="/municipios/marxuquera" pueblo="Marxuquera"></SeoAnchor>
            <SeoAnchor link="/municipios/barx" pueblo="Barx"></SeoAnchor>
            <SeoAnchor link="/municipios/la-drova" pueblo="La Drova"></SeoAnchor>
            <SeoAnchor link="/municipios/xeraco" pueblo="Xeraco"></SeoAnchor>
            <SeoAnchor link="/municipios/simat-de-la-valldigna" pueblo="Simat de la Valldigna"></SeoAnchor>
        </div>


            <div className="footer__politicas">
                <StandardButton
                link="/"
                title="Aviso legal"
                style="emptyStandardButton">
                </StandardButton>
                <StandardButton
                link="/legal/privacidad"
                title="Política de privacidad"
                style="emptyStandardButton">
                </StandardButton>
                <StandardButton
                link="/"
                title="Política de cookies"
                style="emptyStandardButton">
                </StandardButton>

            </div>


            <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '5px 0', marginTop: '50px' }}>
            <p style={{ color: '#45E688', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Web creada por: <a style={{ color: '#45E688', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }} href="https://ermo.es" title="estudio de diseño web y posicionamiento SEO">Ermo Estudio - Andrés Ortega Montoya</a></p></div>

    </div>


    )

};

export default Footer;