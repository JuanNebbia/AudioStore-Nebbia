import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../img/Banner1-AudioStore.jpg'
import Banner2 from '../../img/Banner2-AudioStore.jpg'
import './Slider.css'

function Slider() {
  return (
    <div className="carousel-container">
        <Carousel>
            <Carousel.Item className='carousel-item'>
            <img
                className="d-block w-100 slider-img"
                src={Banner1}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 slider-img"
                src={Banner2}
                alt="Second slide"
            />
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Slider;