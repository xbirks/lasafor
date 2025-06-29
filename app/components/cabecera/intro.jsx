"use client";

import React from 'react';
import "../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../contactForm';
import HeroBanner from './heroBanner';

function Intro({ municipio }) {
  return (
    <div className="intro__master">
      <h1>Contrata <span className="intro__h1-high">el mejor</span> jardinero en {municipio}</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        <StandardButton
          link="/"
          title="Desbroce"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Cuidado de plantas"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Vallado"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Tractor y Rotobato"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />
    </div>
  );
}

export default Intro;
