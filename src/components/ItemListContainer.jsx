import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

let itemsList = [
  {
    id: 1,
    name: "Irida",
    type: "collar",
    colors: [""],
    price: 1600,
    description:
      "Collar que contiene mitad de perlas de río y mitad de discos fimo de colores.",
    imageURL: ["/irida-1", "/irida-2"],
  },
  {
    id: 2,
    name: "Happy Face",
    type: "collar",
    colors: [""],
    price: 800,
    description:
      "Collar de cadena dorada con perlas y mostacilla con forma de cara feliz.",
    imageURL: ["/happy-face"],
  },
  {
    id: 3,
    name: "Hailey",
    type: "collar",
    colors: ["rojo", "verde", "marron", "azul", "violeta"],
    price: 700,
    description:
      "Collar de perlas con mostacillas decorativas estilo floral y mostacillas doradas.",
    imageURL: ["/hailey", "/hailey-rojo"],
  },
  {
    id: 4,
    name: "Wild",
    type: "pulsera",
    colors: ["negro", "celeste", "rojo"],
    price: 1600,
    description:
      "Collar que contiene mitad de perlas de río y mitad de discos fimo de colores.",
    imageURL: ["/wild-negro", "/wild-rojo"],
  },
]

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    let itemPromise = new Promise ((res, rej) => {
      setTimeout(() => res(itemsList), 2000)
    })
    itemPromise
      .then(res => setItems(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <p>{loading && 'Loading...'}</p>
      <p>{error && 'Error!'}</p>
      <ItemList items={items} />
    </div>
  )
}
