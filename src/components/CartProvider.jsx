import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext()

export default function CartProvider({children}) {
  const [cart, setCart] = useState([])
  const [cartLength, setCartLength] = useState(cart.length)
  useEffect(() => {
    setCartLength(cart.length)
  }, [cart])
  
  function addItem(item, quantity){
    let puncharse = {...item, quantity:quantity}
    let itemPosition = cart.findIndex( element => element.id == item.id)
    //Item is finded in cart
    if (itemPosition != -1){
      let newCart = [...cart]
      newCart[itemPosition].quantity += quantity
      setCart(newCart)
    }
    else{ setCart([...cart, puncharse]) }
  }
  function removeItem(itemID){
    setCart(cart.filter( item => item.id != itemID ))
  }
  function clear(){
    setCart([])
  }
  function isInCart(itemID){
    return cart.find( item => item.id == itemID )
  }
  function getTotalPrice(){
    return cart.reduce( (prev, curr) => prev + (curr.quantity*curr.price), 0)
  }
  return (
    <CartContext.Provider value={{cart, cartLength, getTotalPrice, isInCart, removeItem, addItem, clear}}>
      {children}
    </CartContext.Provider>
  )
}
