import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './ArtistsList.css'

const ArtistsList = ({artists, loading}) => {
  return (
    <div className='artists-list-container'>
      <h3 className='artists-list-title'>Nuestros Artistas</h3>
      { loading ? 
            <Loader /> 
            : 
      <div className='artists-list-box'>
        {artists.map((artist, i)=>
          <Link to={`/artist/${artist}`} className="artists-link" key={i}>{artist}</Link>
        )}
      </div>}
    </div>
  )
}

export default ArtistsList