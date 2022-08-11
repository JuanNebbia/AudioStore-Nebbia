import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './GenresList.css'

const GenresList = ({ genres, loading }) => {
  return (
    <div className='genres-list-container'>
      <h3 className='genres-list-title'>Todos los géneros</h3>
      { loading ? 
            <Loader /> 
            : 
      <div className='genres-list-box'>
        {genres.map((genre, i)=>
          <Link to={`/category/${genre}`} className="genres-link" key={i}>{genre}</Link>
        )}
      </div>}
    </div>
  )
}

export default GenresList