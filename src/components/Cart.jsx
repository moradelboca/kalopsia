import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartProvider'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { cart, cartLength, getTotalPrice, removeItem } = useContext(CartContext)
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
          <div className='items'>
            {cart.map( puncharse => (
              <Card key={puncharse.id} variant="outlined">
                <CardContent>
                  <h2>{puncharse.name}</h2>
                  <p>Cantidad: {puncharse.quantity}</p>
                  <p>${puncharse.price} c/u</p>
                  <p>Precio: ${puncharse.price * puncharse.quantity}</p>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => removeItem(puncharse.id)}>Eliminar</Button>
                </CardActions>
              </Card>
            ))}
            <p>Precio total: ${getTotalPrice()}</p>
          </div>
      }
    </div>
  )
}
