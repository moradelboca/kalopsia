import React from 'react'

export default function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.imageURL} alt={`Foto de ${item.name}`} />
      <p>{item.description}</p>
    </div>
  )
}
