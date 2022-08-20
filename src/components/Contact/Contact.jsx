import React from 'react'
import { Card } from 'react-bootstrap'
import ContactBackground from '../../img/contactbackground.png'
import ContactCard from '../../img/contactcard.png'
import { AiFillGithub } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { GrInstagram } from 'react-icons/gr';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-background-container">
        <img src={ContactBackground} className="contact-background" alt="imagen de fondo" />
      </div>
      <Card className="contact-card">
            <Card.Img src={ContactCard} alt="Card image" className="contact-img"/>
            <Card.ImgOverlay className="contact-overlay">
              <Card.Title className='contact-title'>Contacto</Card.Title>
              <div className='contact-content'>
                <Card.Text>
                  <a href="https://github.com/JuanNebbia" target='!BLANK' className='contact-link'>
                    <AiFillGithub className='contact-icon'/> /JuanNebbia
                  </a>
                </Card.Text>
                <Card.Text>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juan.nebbia@gmail.com" target='!BLANK' className='contact-link'>
                    <FiMail className='contact-icon' /> juan.nebbia@gmail.com
                  </a>
                </Card.Text>
                <Card.Text>
                  <a href="https://www.instagram.com/juannebbia/" target='!BLANK' className='contact-link'>
                    <GrInstagram className='contact-icon' /> /juannebbia
                  </a>
                </Card.Text>
              </div>
            </Card.ImgOverlay>
        </Card>
      
    </div>
  )
}

export default Contact