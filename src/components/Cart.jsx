import React, { useContext } from 'react'
import { CartContext } from './CartProvider'
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"
import CartItem from './CartItem'

export default function Cart() {
  const { cart, cartLength, getTotalPrice, clear } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <div>
      {
        !cartLength ?
          <div>
            <p>No hay productos en el carrito!</p>
            <Button size="small" onClick={() => navigate("/")}>Volver</Button>
          </div>
        :
        <div>
            {cart.map( item => <CartItem key={item.id} item={item} />)}
            <p>Precio total: ${getTotalPrice()}</p>
            <Button size="small" onClick={clear}>Vaciar Carrito</Button>
            <Button size="small" onClick={() => navigate("/checkout")}>Continuar Compra</Button>
          </div>
      }
    </div>
  )
}
