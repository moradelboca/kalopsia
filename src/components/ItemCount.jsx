import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartProvider'

export default function ItemCount({ item, stock}) {
    const { addItem } = useContext(CartContext)
    let [count, setCount] = useState(0)
    function addCount(){
        if (count<stock) { setCount(count+1) }
    }
    function removeCount(){
        if (count>0) { setCount(count-1) }
    }

    return (
        <div>
            <h3>Ingrese la cantidad</h3>
            <p>{count}</p>
            <button onClick={ () => removeCount() }>-</button>
            <button onClick={ () => addCount() }>+</button>
            <button onClick={ () => {if(count>0){addItem(item, count)}} }>Agregar al carrito</button>
        </div>
    )
}
