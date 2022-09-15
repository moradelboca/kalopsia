import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Box from '@mui/material/Box'

export default function Footer() {
  return (
    <div>
      <hr />
      <Box sx={{display:'flex', justifyContent:'center', gap:10}}>
        <a href="http://" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
      </Box>
    </div>
  )
}
