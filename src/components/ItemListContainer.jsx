import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs } from "firebase/firestore"

let allItems = {}
export default function ItemListContainer() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const { categoryID } = useParams()

  useEffect(() => {
    const database = getFirestore()
    const productsRef = collection(database, "products")
    getDocs(productsRef)
      .then( querySnapshot => {
        allItems = querySnapshot.docs.map( doc => ( {...doc.data(), id: doc.id} ))
        setItems(
          categoryID ?
          allItems.filter( item => item.category == categoryID)
          :
          allItems
        )
      })
      .catch( error => {
        setError(true)
      })
      .finally( () => {
        setLoading(false)
      })
    }, [])
    
    useEffect(() => {
      if (allItems.length){
        setItems(
          categoryID ?
            allItems.filter( item => item.category == categoryID)
            :
            allItems
        )
      }
    }, [categoryID])

  return (
    <div>
      <p>{error && 'Error!'}</p>
      {loading ?
        <p>Loading...</p>
        :
        <ItemList items={items} />
      }
    </div>
  )
}
