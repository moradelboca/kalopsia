import React, { useEffect, useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {
    
    let [count, setCount] = useState(initial)

    function addItem(){
        if (count<stock) { setCount(count+1) }
    }
    function removeItem(){
        if (count>0) { setCount(count-1) }
    }   

    return (
        <div>
            <h3>Camisa triger</h3>
            <p>{count}</p>
            <button onClick={ () => removeItem() }>-</button>
            <button onClick={ () => addItem() }>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
}
