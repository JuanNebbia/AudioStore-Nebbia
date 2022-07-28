import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  const {title, artist, genres, pictureUrl, price, description, stock, tracks, id} = product


  return (
    <div className="card mb-3">
      <div className='img-container'>
        <img src={pictureUrl} className="card-img-top" alt={title} />
        <p className='card-img-overlay'>${price}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{artist}</p>
        <div className="card-footer">
          <p className='text-muted text-footer'>Este producto incluye 
            <span className='length'> {tracks.length}</span> {tracks.length == 1 ? 'pista' : 'pistas'}
          </p>
        </div>
      </div>
      <Link to={`/detail/${id}`}>
        <button className='btn btn-primary'>Ver detalles</button>
      </Link>
    </div>
  )
}

export default Item