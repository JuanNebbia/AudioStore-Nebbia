import React from 'react'
import './Loader.css'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

  return (
    <div className='loading-spinner-container'>
      <Spinner className="loading-spinner" animation="grow" role="status" variant="info" />
    </div>
  )
}

export default Loader