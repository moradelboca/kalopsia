import React, { useContext, useState, useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartProvider'
import { useNavigate } from "react-router-dom"

export default function CartWidget() {
  const { cartLength } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/cart")}>
      {
        !cartLength ?
          <></>
        :
          <div>
            <p>{cartLength}</p>
            <ShoppingCartIcon />
          </div>
      }
    </div>
  )
}
