import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
        <h3 className='not-found-title'>{':('}</h3>
        <p className='not-found-text'>¡Ups! parece que tu búsqueda no arrojó ningún resultado</p>
    </div>
  )
}

export default NotFound