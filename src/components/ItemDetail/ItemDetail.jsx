import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ productDetail }) => {
    const {title, artist, genres, pictureUrl, price, description, stock, tracks, id} = productDetail

    const onAdd = (cantidad) =>{
        if (cantidad > 1){
            alert (`usted ha comprado ${cantidad} productos`)
        } else{
            alert (`usted ha comprado ${cantidad} producto`)
        }
    }

  return (
    <div className='item-detail-container' style={{backgroundImage: `url(${pictureUrl})`, backgroundSize: "cover"}}>
        <div className='content'>
            <h4 className='detail-title'>Detalle del producto: <span>{title}</span></h4>
            <h5 className='detail-artist'>{artist}</h5>
            <div className="description">
                <h6>Descripción</h6>
                <p className='description-text'>{description}</p>
            </div>
            <div className="track-list">
                <h6>Contenido</h6>
                <ol>
                    {tracks !==undefined && tracks.map((track,i)=><li key={i}>{track}</li>) }
                </ol>
            </div>
            <p className='price-tag'>${price}</p>
            <ItemCount
                initial = {1}
                stock = {stock}
                onAdd = {onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail
