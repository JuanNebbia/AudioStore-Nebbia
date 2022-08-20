import './About.css'
import Card from 'react-bootstrap/Card';
import AboutBackground from '../../img/aboutbackground.jpg'
import AboutImg from '../../img/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-background-container">
            <img src={AboutBackground} alt="" className="about-background" />
        </div>
        <Card className="about-card">
            <Card.Img src={AboutImg} alt="Card image" className="about-img"/>
            <Card.ImgOverlay className="about-overlay">
                <Card.Title className='about-title'>Quiénes Somos</Card.Title>
                <div className="about-content">
                    <Card.Text>
                        AudioStore es desarrollada por Juan Nebbia durante 
                        el curso de React en <a href='https://coderhouse.com' target='!BLANK'>Coderhouse</a>
                    </Card.Text>
                    <Card.Text>
                        En esta plataforma podés conseguir las pistas de audio más originales de la web
                    </Card.Text>
                    <Card.Text>
                    Todas las imágenes y el logo han sido creadas utilizando la IA <a href='https://www.midjourney.com/' target="!BLANK">Midjourney</a>
                    </Card.Text>
            </div>
            </Card.ImgOverlay>
        </Card>
    </div>
  );
}

export default About;