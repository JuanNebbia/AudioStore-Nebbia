import React from 'react'
import './Item.css'

const Item = ({ product }) => {
  return (
    <div className="card mb-3">
      <div className='img-container'>
        <img src={product.pictureUrl} className="card-img-top" alt={product.title} />
        <p className='card-img-overlay'>${product.price}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.artist}</p>
        <div className="card-footer">
          {product.genres.map((genre, i)=><span key={i} className='text-muted'>{genre} / </span>)}
        </div>
      </div>
      <button className='btn btn-primary'>Ver detalles</button>
    </div>
  )
}

export default Item