import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

// Esta variable se utiliza para simular un fetch
let itemsList = [
  {
    id: 1,
    name: "Irida",
    category: 1,
    colors: [""],
    price: 1600,
    description:
      "Collar que contiene mitad de perlas de río y mitad de discos fimo de colores.",
    imageURL: ["/irida-1", "/irida-2"],
  },
  {
    id: 2,
    name: "Happy Face",
    category: 1,
    colors: [""],
    price: 800,
    description:
      "Collar de cadena dorada con perlas y mostacilla con forma de cara feliz.",
    imageURL: ["/happy-face"],
  },
  {
    id: 3,
    name: "Hailey",
    category: 1,
    colors: ["rojo", "verde", "marron", "azul", "violeta"],
    price: 700,
    description:
      "Collar de perlas con mostacillas decorativas estilo floral y mostacillas doradas.",
    imageURL: ["/hailey", "/hailey-rojo"],
  },
  {
    id: 4,
    name: "Wild",
    category: 2,
    colors: ["negro", "celeste", "rojo"],
    price: 1600,
    description:
      "Collar que contiene mitad de perlas de río y mitad de discos fimo de colores.",
    imageURL: ["/wild-negro", "/wild-rojo"],
  },
]
// Esta variable guarda exactamente lo mismo que arriba, pero esta para simular un fetch
let allItems = []

export default function ItemListContainer() {
  const [loading, setLoading] = useState(!allItems.length && true)
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const { categoryID } = useParams()

  useEffect(() => {
    let itemsPromise = new Promise ((res, rej) => {
      setTimeout(() => res(itemsList), 2000)
    })
    itemsPromise
      .then(res => {
        allItems = res
        categoryID ?
          // eslint-disable-next-line
          setItems( allItems.filter( item => item.category == categoryID ))
          :
          setItems(allItems)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
      // eslint-disable-next-line
  }, [])

   useEffect(() => {
    if (allItems.length){
      categoryID ?
        // eslint-disable-next-line
        setItems( allItems.filter( item => item.category == categoryID ))
        : 
        setItems(allItems)
    }
  }, [categoryID])

  return (
    <div>
      <p>{loading && 'Loading...'}</p>
      <p>{error && 'Error!'}</p>
      <ItemList items={items} />
    </div>
  )
}
