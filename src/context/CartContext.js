import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext([])


export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [cartSize, setCartSize] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        setCartValues()
    },[cart])

    const setCartValues = () =>{
        let itemCount = 0
        let priceCount = 0
        cart.forEach(item => {
            itemCount += parseInt(item.quantity)
            priceCount += item.price * item.quantity
        });
        setCartSize(itemCount)
        setTotalPrice(priceCount)
    }

    const isInCart = () => {
    }

    const addItem = (productDetail, quantityToAdd) => {
        if(cart.length === 0 ){
            const itemToAdd = {...productDetail, quantity: quantityToAdd}
            setCart([itemToAdd])
            return
        }
        const duplicatedIndex = cart.findIndex((cartItem) => cartItem.id === productDetail.id)
        if (duplicatedIndex >=0){
            const itemToUpdate = {...productDetail, quantity: cart[duplicatedIndex].quantity + quantityToAdd }
            const cartDraft = [...cart]
            cartDraft[duplicatedIndex] = itemToUpdate
            setCart(cartDraft)
        }else{
            const itemToAdd = {...productDetail, quantity: quantityToAdd}
            const cartDraft = [...cart, itemToAdd]
            setCart(cartDraft)
        }
    }
    

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const smallerCartDraft = cart.filter(data=> data.id !== id)
        setCart(smallerCartDraft)
        };



    return (
        <CartContext.Provider value={{cart, isInCart, addItem, clear, removeItem, cartSize, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider