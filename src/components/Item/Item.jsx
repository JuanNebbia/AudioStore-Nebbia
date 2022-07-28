import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

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
      <Link to={`/detail/${product.id}`}>
        <button className='btn btn-primary'>Ver detalles</button>
      </Link>
    </div>
  )
}

export default Item