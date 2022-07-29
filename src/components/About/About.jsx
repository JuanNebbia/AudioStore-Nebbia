import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <h2 className='about-title'>Sobre Nosotros</h2>
        <div className="about-content">
            <p className='about-text'>AudioStore es desarrollada por Juan Nebbia durante el curso de React en Coderhouse</p>
            <p className='about-text'>En esta plataforma podés conseguir las pistas de audio más originales del la web</p>
        </div>
    </div>
  )
}

export default About