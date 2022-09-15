import React from 'react'
import Item from './Item'
import Box from '@mui/material/Box'

export default function ItemList({ items }) {
  return (
    <Box sx={{
      display:"flex",
      flexWrap: "wrap",
      gap:10
    }}>
      {items.map( item => <Item key={item.id} item={item} /> )}
    </Box>
  )
}
