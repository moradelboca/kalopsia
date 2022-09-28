import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export default function NavBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const logoURL = "https://i.ibb.co/gF6zt7b/logokalopsia.png"
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <Box id="navbar">
      <AppBar position="static" sx={{ bgcolor:'common.white' }}>
        <Toolbar>
          <Link to='/'><img src={logoURL} alt='Logo Kalopsia' height={50}></img></Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu} color='primary'>
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={ anchorElNav }
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className='link' to='/'>Inicio</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className='link' to='/category/1'>Collares</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className='link' to='/category/2'>Pulseras</Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent:"space-evenly"} }}>
            <Link className='link' to='/'><Button sx={{display: 'block'}}>Inicio</Button></Link>
            <Link className='link' to='/category/1'><Button sx={{display: 'block'}}>Collares</Button></Link>
            <Link className='link' to='/category/2'><Button sx={{display: 'block'}}>Pulseras</Button></Link>
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
