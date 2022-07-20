import './ItemListContainer.css'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

    const onAdd = (cantidad) =>{
        alert(`usted ha comprado ${cantidad} producto${cantidad>1 ? 's' : ''}`)

        //quería practicar el operador ternario, pero supongo que era más prolijo hacerlo así:
        // if (cantidad > 1){
        //     alert (`usted ha comprado ${cantidad} productos`)
        // } else{
        //     alert (`usted ha comprado ${cantidad} producto`)
        // }
    }

    return (
        <div>
            <h3 className="greeting">{props.greeting}</h3>
            <ItemCount 
            initial = {1}
            stock = {10}
            onAdd = {onAdd} />
        </div>
    )
}

export default ItemListContainer;