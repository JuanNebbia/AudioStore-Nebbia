import React from 'react'
import AboutBackground from '../../img/aboutbackground.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <img src={AboutBackground} alt="" className="about-background" />
      <div className="about-card">
        <h2 className='about-title'>Sobre Nosotros</h2>
        <div className="about-content">
          <p className='about-text'>AudioStore es desarrollada por Juan Nebbia durante el curso de React en Coderhouse</p>
          <p className='about-text'>En esta plataforma podés conseguir las pistas de audio más originales del la web</p>
          <p className='about-text'>Todas las imágenes y el logo han sido creadas utilizando la IA <a href='https://www.midjourney.com/' target="!BLANK">Midjourney</a></p>
      </div>
      </div>
    </div>
  )
}

export default About