import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartProvider"
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"

export default function ItemCount({ item, stock }) {
  const { addItem } = useContext(CartContext)
  const [added, setAdded] = useState(false)
  const [count, setCount] = useState(0)
  const navegar = useNavigate()
  function addCount() {
    if (count < stock) {setCount(count + 1)}
  }
  function removeCount() {
    if (count > 0) {setCount(count - 1)}
  }
  function handleAddItem() {
    if (count > 0) {
      addItem(item, count)
      setAdded(true)
    }
  }

  return (
    <div>
      {!added ? 
        <div>
          <h3>Ingrese la cantidad</h3>
          <p>{count}</p>
          <Button onClick={() => removeCount()}>-</Button>
          <Button onClick={() => addCount()}>+</Button>
          <Button onClick={() => handleAddItem()}>Agregar al carrito</Button>
        </div>
       : 
        <div>
          <Button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</Button>
          <Button className="btn btn-info" onClick={()=>navegar('/cart')}>Ir al carrito</Button>
        </div>
      }
    </div>
  )
}
