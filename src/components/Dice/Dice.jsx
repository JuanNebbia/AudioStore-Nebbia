import React from 'react'
import './Dice.css'
import { useNavigate } from 'react-router-dom'
import { FaDiceTwo } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


const Dice = ({items}) => {
    const navigate = useNavigate()

    const randomShit = () =>{
        const valores = Math.floor(Math.random() * (items.length) + 1)
        navigate(`/detail/${valores}`)
    }

  return (
    <div className='dice-icon-container' onClick={randomShit}>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="tooltip-right">
                ¡Descubre!
            </Tooltip>
          }
        >
            <Button className='dice-btn'><FaDiceTwo className='dice-icon' /></Button>
        </OverlayTrigger>
    </div>
  )
}

export default Dice