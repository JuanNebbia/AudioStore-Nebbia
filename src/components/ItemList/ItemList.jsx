import React from 'react'
import Dice from '../Dice/Dice'
import Item from '../Item/Item'
import NotFound from '../NotFound/NotFound'
import Slider from '../Slider/Slider'
import './ItemList.css'

const ItemList = ({ items, categoryId, artist}) => {

  return (
    <>{items.length ?
        <div className='item-list-body'>
          
          {categoryId && <h3 className='category-title'>Nuestra selección de {categoryId}</h3>}
          {artist  && <h3 className='category-title'>Escucha lo mejor de {artist}</h3>}
          {(!categoryId && !artist) && 
                <Slider />
            }
            <Dice items={items} />
          <div className='item-list'>
            {items.map((item)=><Item key={item.id} product={item} />)}
          </div>
        </div>
        :<NotFound />
    }
    </>
  )
}

export default ItemList
