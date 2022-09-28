import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'

export default function Item({ item }) {
  return (
    <Link key={item.id} className='link' to={`/item/${item.id}`}>
      <Card sx={{ width:200 }}>
        <CardActionArea>
          <CardContent>
            <h3>{item.id}- {item.name}</h3>
            <p>{item.price}</p>
            <img src={item.imageURL} alt={`Foto de ${item.name}`} width={'100%'} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
