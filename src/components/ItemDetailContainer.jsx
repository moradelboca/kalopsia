import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
  
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    const getItem = new Promise ((res, rej) => {
        setTimeout(() => {
          res({ id:100, name:'Pulsera mock', price:750, imageURL:'./', description:'Pulsera de color negro y rojo, con piedras de rio. Tiene un diametro de 20mm.' })
        }, 2000)
    })
    getItem
      .then((res) => { setItem(res) })
      .catch((err) => { setError(err) })
      .finally(() => { setLoading(false) })
  }, [])
  
  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error!</p> : <ItemDetail item={item} />}
    </div>
    
  )
}
