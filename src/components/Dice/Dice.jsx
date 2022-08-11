import React from 'react'
import './Dice.css'
import { useNavigate } from 'react-router-dom'
import { GiRollingDices } from 'react-icons/gi';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


const Dice = ({items}) => {
  const navigate = useNavigate()
  
  const randomItem = () =>{
    const idList = []
    items.forEach(item => {
      idList.push(item.id)
    })
    console.log(idList)
    const randomIndex = Math.floor(Math.random() * (idList.length))

    navigate(`/item/${idList[randomIndex]}`)
  }


  return (
    <div className='dice-icon-container'>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="tooltip-right">
                ¡Descubre!
            </Tooltip>
          }
        >
            <Button className='dice-btn' onClick={randomItem}><GiRollingDices className='dice-icon'/></Button>
        </OverlayTrigger>
    </div>
  )
}

export default Dice