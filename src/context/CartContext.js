import React, { createContext } from 'react'
import useLocalStorage from '../localStorage/useLocalStorage'

export const CartContext = createContext([])

const CartProvider = ({children}) =>{
    const [cart, setCart] = useLocalStorage('cart', [])

    const addItem = (productDetail, quantityToAdd) => {
        const itemInCart = cart.some((item)=> item.id === productDetail.id)
        if(itemInCart){
            const updatedCart = cart.map((item)=>{
                if(item.id === productDetail.id){
                    return {...item, quantity: item.quantity + quantityToAdd}
                }
            return item
            })
            setCart(updatedCart)
        }else{
            const itemToAdd = {...productDetail, quantity: quantityToAdd}
            setCart([...cart, itemToAdd])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const smallerCartDraft = cart.filter(data=> data.id !== id)
        setCart(smallerCartDraft)
    };


    const cartSize = () =>{
        return cart.reduce((acc, item) => acc += item.quantity, 0)
    }

    const totalPrice = () =>{
        return cart.reduce((acc, item) => acc += item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartSize, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider


