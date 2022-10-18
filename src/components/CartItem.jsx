import React, { useContext } from 'react'
import { CartContext } from './CartProvider'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext)
  return (
    <Card variant="outlined">
      <CardContent>
        <h2>{item.name}</h2>
        <p>Cantidad: {item.quantity}</p>
        <p>${item.price} c/u</p>
        <p>Precio: ${item.price * item.quantity}</p>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => removeItem(item.id)}>Eliminar</Button>
      </CardActions>
    </Card>
  )
}
