import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore, QuerySnapshot } from "firebase/firestore"

export default function ItemDetailContainer() {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { itemID } = useParams()

  useEffect(() => {
    const database = getFirestore()
    const productRef = doc(database, "products", itemID)
    getDoc(productRef)
      .then( querySnapshot => {
        setItem({ ...querySnapshot.data(), id: querySnapshot.id })
        setLoading(false)
        setError(false)
      })
  }, [])
  
  
  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error!</p> : null}
      {item.id ? <ItemDetail item={item} /> : null}
    </div>
  )
}
