import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Demo from '../Demo/Demo'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap'

const ItemDetail = ({ productDetail }) => {
    const {title, artist, genres, pictureUrl, price, description, stock, tracks, demo, id} = productDetail
    const [purchase, setPurchase] = useState(false)
    const [count, setCount] = useState(1)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const {addItem, removeItem} = useContext(CartContext)

    const onAdd = (quantityToAdd) =>{
        setCount(quantityToAdd)
        addItem(productDetail, quantityToAdd)
        setPurchase(true)
        setShow(true)
    }

  return (
    <div className="item-detail-container">
        <div className="background-container">
            <img src={pictureUrl} className="detail-background" alt="background" />
        </div>
        <div className='item-detail-card' >
            <div className="row">
                <div className="col-lg-6">
                    <div className="detail-img-container">
                        <img src={pictureUrl} alt={title} title={title} className="detail-img" /> 
                    </div>
                </div>
                <div className="col-lg-6 titles">
                    <div className="genres-container">
                        {genres?.map((genre, i)=><Link to={`/category/${genre}`} className="genres" key={i}>{genre}</Link>)}
                    </div>
                    <h4 className='detail-title'>{title}</h4>
                    <h5 className='detail-artist'>{artist}</h5>
                    <p className='description-text'>{description}</p>
                    <p className='price-tag'>$ {price}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 track-list">
                        <h6>Contenido</h6>
                            <ol>
                                {tracks !==undefined && tracks.map((track,i)=>
                                    <li key={i} className="track-item">
                                        <span className='track-title'>{track.tracktitle}</span>
                                        <span className='track-duration'>{track.duration}</span>
                                    </li>) 
                                }
                        </ol>
                    </div>
                    <div className="col-lg-6 buy-section">
                        {purchase? 
                            <div className='btn-cart-container'>
                                <button className="btn btn-primary" onClick={()=>navigate('/')}>Seguir comprando</button>
                                <button className="btn btn-success" onClick={()=>navigate('/cart')}>Terminar mi compra</button>
                            </div>
                        : <ItemCount
                            stock = {stock}
                            onAdd = {onAdd} 
                            count = {count}
                            setCount = {setCount}
                            showtoast = {show}
                        />}
                    </div>
                </div>
            </div>
            {demo ?
            <div className="demo">
                <Demo productDetail={productDetail}/>
            </div> :
                <p className='no-demo-text'>Lo lamentamos, este producto no incluye previsualización</p>
            }
        </div>
        <ToastContainer className='toast-container'>
        <Row className='toast-row'>
            <Col>
                <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                    <small>cantidad: {count}</small>
                </Toast.Header>
                <Toast.Body>Se agregó el item al carrito!</Toast.Body>
                <button className='btn cancel-btn' onClick={()=>removeItem(id)}>cancelar</button>
                </Toast>
            </Col>
        </Row>
        </ToastContainer>
    </div>
  )
}

export default ItemDetail


