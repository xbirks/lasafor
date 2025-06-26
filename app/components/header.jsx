import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderLogo from '../assets/icon/header_logo.svg';
import HeaderName from '../assets/icon/name_logo.svg';
import HeaderTree from '../assets/icon/tree_logo.svg';
import ImgButton from '../buttons/imgbutton';
import StandardButton from '../buttons/standardButton';
import IconServicios from '../assets/img/icon_servicios.svg';
import IconInstalaciones from '../assets/img/icon_instalaciones.svg';
import IconMantenimiento from '../assets/img/icon_mantenimiento.svg';

function Header() {
    return (
        <div className="header__master">
            <div>
                <Link href="/" className="header__logo">
                    <Image className="header__var-logo1" src={HeaderLogo} alt="logotipo principal para el Header" height={50} width={217} />
                    <Image className="header__var-logo2" src={HeaderName} alt="logotipo principal para el Header versión 2" height={50} width={150} />
                    <Image className="header__var-logo3" src={HeaderTree} alt="logotipo principal para el Header versión 3" height={50} width={53} />
                </Link>
            </div>

            <div className="header__nav">
                <ImgButton
                    link="/#servicios"
                    title="Servicios"
                    style="imgButton__white imgb1"
                    icon={IconServicios}
                />
                <ImgButton
                    link="/#mantenimiento"
                    title="Plantas"
                    style="imgButton__white imgb2"
                    icon={IconMantenimiento}
                />
                <ImgButton
                    link="/#instalaciones"
                    title="Varios"
                    style="imgButton__white imgb3"
                    icon={IconInstalaciones}
                />
            </div>

            <StandardButton
                link="https://wa.me/34654286888"
                title="WhatsApp"
                style="standardButton"
            />
        </div>
    );
}

export default Header;
