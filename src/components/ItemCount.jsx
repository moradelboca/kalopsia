import React, { useEffect, useState } from 'react'

export default function ItemCount({ item, stock, onAdd}) {
    
    let [count, setCount] = useState(0)

    function addItem(){
        if (count<stock) { setCount(count+1) }
    }
    function removeItem(){
        if (count>0) { setCount(count-1) }
    }

    return (
        <div>
            <h3>Ingrese la cantidad</h3>
            <p>{count}</p>
            <button onClick={ () => removeItem() }>-</button>
            <button onClick={ () => addItem() }>+</button>
            <button onClick={ () => onAdd() }>Agregar al carrito</button>
        </div>
    )
}
