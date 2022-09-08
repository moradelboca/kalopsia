import React from 'react'
import ItemList from './ItemList'

export default function Item({ item }) {
  return (
    <div key={item.id}>
      <h3>{item.id}- {item.name}</h3>
      <p>{item.price}</p>
      <img src={item.imageURL} alt="" />
    </div>
  )
}
