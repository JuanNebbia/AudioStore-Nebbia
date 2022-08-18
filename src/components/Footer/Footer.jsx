import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <p className='footer-text'>Desarrollado por Juan Nebbia en el como trabajo final del curso 
          React Js en <a href='https://coderhouse.com' target='!BLANK'>Coderhouse</a>, 
          Agosto 2022</p>
        <div className='footer-links'>
        <Link to={'/about'}>Sobre nosotros</Link>
        <p style={{display:'inline'}}> - </p>
        <Link to={'/contact'}>Contacto</Link>
        </div>
    </footer>
  )
}

export default Footer