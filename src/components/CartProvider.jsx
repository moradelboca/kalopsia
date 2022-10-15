import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext()

export default function CartProvider({children}) {
  const [cart, setCart] = useState([])
  useEffect(() => {
    console.log(cart)
  }, [cart])
  
  function addItem(item, quantity){
    let puncharse = {...item, quantity:quantity}
    let itemPosition = cart.findIndex( element => element.id == item.id)
    console.log(itemPosition)
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
  return (
    <CartContext.Provider value={{cart, isInCart, removeItem, addItem, clear}}>
      {children}
    </CartContext.Provider>
  )
}
