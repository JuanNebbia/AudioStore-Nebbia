import React from 'react'
import Dice from '../Dice/Dice'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ items, categoryId}) => {


  return (
    <div>
      {categoryId ? 
        <h3 className='category-title'>Nuestra selección de: {categoryId}</h3>
        : <Dice items={items} />
      }
      {!categoryId && <h2 className='item-list-title'>Bienvenid@ a AudioStore!</h2>}
        <div className='item-list'>
          {items.map((item)=><Item key={item.id} product={item} />)}
        </div>
    </div>
    
  )
}

export default ItemList
