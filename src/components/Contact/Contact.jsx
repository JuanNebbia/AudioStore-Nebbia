import React from 'react'
import ContactBackground from '../../img/contactbackground.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <img src={ContactBackground} className="contact-background" />
      <div className="contact-card">
        <h2 className='contact-title'>Contactos</h2>
        <div className="contact-content">
          <h5 className='contact-net'>Github</h5>
          <a href="https://github.com/JuanNebbia" target='!BLANK' className='contact-link'>/JuanNebbia</a>
          <h5 className='contact-net'>E-mail</h5>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juan.nebbia@gmail.com" target='!BLANK' className='contact-link'>juan.nebbia@gmail.com</a>
          <h5 className='contact-net'>Instagram</h5>
          <a href="https://www.instagram.com/juannebbia/" target='!BLANK' className='contact-link'>/juannebbia</a>
        </div>
      </div>
    </div>
  )
}

export default Contact