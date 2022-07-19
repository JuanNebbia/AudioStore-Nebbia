import './ItemListContainer.css'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <div>
            <h3 className="greeting">{props.greeting}</h3>
            <ItemCount 
            initial = {1}
            stock = {10} />
        </div>
    )
}

export default ItemListContainer;