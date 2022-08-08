import Card from 'react-bootstrap/Card';
import './Item.css'
import { useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const Item = ({ product }) => {
    const {title, artist, pictureUrl, price, tracks, stock, id} = product
    const navigate = useNavigate()

  return (
    <Card className="item-card" onClick={()=>navigate(`/detail/${id}`)}>
        <div className='img-container'>
            <Card.Img src={pictureUrl} alt={title} className="card-img-top" />
        </div>
        <Card.ImgOverlay className="item-card-img-overlay">
            <Card.Text className='item-card-overlay'>${price}</Card.Text>
        </Card.ImgOverlay>
        <Card.Body className="item-card-body">
            <Card.Title className='item-card-title'>{title}</Card.Title>
            <Card.Text className='item-card-text'>{artist}</Card.Text>
            {stock === 0 && <Badge bg="danger">Agotado</Badge>}
            {stock === 1 && <Badge>Último disponible</Badge>}
            <footer className='card-footer'>
                <p className='text-muted text-footer'>Este producto incluye 
                    <span className='length'> {tracks.length}</span> {tracks.length === 1 ? 'pista' : 'pistas'}
                </p>
            </footer>
        </Card.Body>
       
    </Card>
  );
}

export default Item;