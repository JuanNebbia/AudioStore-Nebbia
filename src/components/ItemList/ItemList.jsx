import React from 'react'
import Dice from '../Dice/Dice'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ items, categoryId, loading}) => {
  return (
    <>
      {categoryId ? <h3 className='category-title'>Categoría: {categoryId}</h3> : <Dice items={items} />}
      <div className='item-list'>
        {items.map((item)=><Item key={item.id} product={item} />)}
      </div>
    </>
    
  )
}

export default ItemList
