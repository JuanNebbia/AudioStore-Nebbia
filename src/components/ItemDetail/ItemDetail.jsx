import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Demo from '../Demo/Demo'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ productDetail }) => {
    const {title, artist, genres, pictureUrl, price, description, stock, tracks, demo, id} = productDetail
    const [purchase, setPurchase] = useState(false)
    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    const {addItem, cleanCart, isInCart} = useContext(CartContext)

    useEffect(()=>{
    },[count])

    const onAdd = (quantityToAdd) =>{
        setCount(quantityToAdd)
        addItem(productDetail, quantityToAdd)
        setPurchase(true)

    }

  return (
    <div className="item-detail-container">
        <div className="background-container">
            <img src={pictureUrl} className="detail-background" />
        </div>
        {/* {id > 1 && <Link to={`/detail/${parseInt(id) - 1}`} className="prev-controller"><IoIosArrowBack /></Link>} */}
        <div className='item-detail-card' >
            <div className="row">
                <div className="col-lg-6">
                    <div className="detail-img-container" onDoubleClick={cleanCart}>
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
                                <button className="btn btn-keep" onClick={()=>navigate('/')}>Seguir comprando</button>
                                <button className="btn btn-cart" onClick={()=>navigate('/cart')}>Ver carrito</button>
                            </div>
                        : <ItemCount
                            stock = {stock}
                            onAdd = {onAdd} 
                            count = {count}
                            setCount = {setCount}
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
        {/* {id < 19 && <Link to={`/detail/${parseInt(id) + 1}`} className="next-controller"><IoIosArrowForward /></Link>} */}
    </div>
  )
}

export default ItemDetail


