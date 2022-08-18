import React from 'react'
import Dice from '../Dice/Dice'
import Item from '../Item/Item'
import NotFound from '../NotFound/NotFound'
import './ItemList.css'

const ItemList = ({ items, categoryId, artist}) => {

  return (
    <>{items.length ?
        <div className='item-list-body'>
          <Dice items={items} />
          {categoryId && <h3 className='category-title'>Nuestra selección de {categoryId}</h3>}
          {artist  && <h3 className='category-title'>Escucha lo mejor de {artist}</h3>}
          {(!categoryId && !artist) && 
            <div className='item-list-titles'>
              <div className="titles">
                <h2 className='item-list-title'>¡Bienvenid@ a AudioStore!</h2>
                <h4 className="item-list-subtitle">¿Qué vas a escuchar hoy?</h4>
              </div>
            </div>
            }
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
