import React from 'react'
import { Link } from 'react-router-dom'
import Demo from '../Demo/Demo'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const ItemDetail = ({ productDetail }) => {
    const {title, artist, genres, pictureUrl, price, description, stock, tracks, demo, id} = productDetail

    const onAdd = (cantidad) =>{
        if (cantidad > 1){
            alert (`usted ha comprado ${cantidad} productos`)
        } else{
            alert (`usted ha comprado ${cantidad} producto`)
        }
    }

  return (
    <div className="item-detail-container">
        <div className="background-container">
            <img src={pictureUrl} className="detail-background" />
        </div>
        {id > 1 && <Link to={`/detail/${parseInt(id) - 1}`} className="prev-controller"><IoIosArrowBack /></Link>}
        <div className='item-detail-card' >
            <div className="row">
                <div className="col-lg-6">
                    <div className="detail-img-container">
                        <img src={pictureUrl} alt="" className="detail-img" /> 
                    </div>
                </div>
                <div className="col-lg-6 titles">
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
                        <ItemCount
                            initial = {1}
                            stock = {stock}
                            onAdd = {onAdd} />
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
        {id < 19 && <Link to={`/detail/${parseInt(id) + 1}`} className="next-controller"><IoIosArrowForward /></Link>}
    </div>
  )
}

export default ItemDetail


