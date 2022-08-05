import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
  const {title, artist, genres, pictureUrl, price, description, stock, tracks, id} = product
  const navigate = useNavigate()

  return (
    <div className="item-card card mb-3" onClick={()=>navigate(`/detail/${id}`)}>
        <div className='img-container'>
          <img src={pictureUrl} className="card-img-top" alt={title} />
          <p className='card-img-overlay item-card-img-overlay'>${price}</p>
        </div>
        <div className="card-body item-card-body">
          <h5 className="card-title item-card-title">{title}</h5>
          <p className="card-text item-card-text">{artist}</p>
          <div className="card-footer">
            <p className='text-muted text-footer'>Este producto incluye 
              <span className='length'> {tracks.length}</span> {tracks.length == 1 ? 'pista' : 'pistas'}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Item