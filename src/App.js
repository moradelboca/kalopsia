import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CartProvider from './components/CartProvider'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const theme = createTheme({
  palette: {
    common: {
      white: '#F2EFE9'
    },
    primary:{
      main: '#0e4473',
      light: '#486fa2',
      dark: '#001e47',
      contrastText: 'ffffff'
    },
    secondary: {
      main: '#eabe54',
      light: '#fff084',
      dark: '#b58e23',
      contrastText: '000000'
    }
  },
  spacing: value => value*1
})

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <Route exact path='/' element={ <Landing /> }/>
            <Route exact path='/category' element={ <ItemListContainer /> }/> */}
            <Route exact path='/' element={ <ItemListContainer /> }/>
            <Route exact path='/category/:categoryID' element={ <ItemListContainer /> }/>
            <Route exact path='/item/:itemID' element={ <ItemDetailContainer /> }/>
            <Route exact path='/cart' element={ <Cart /> }/>
            <Route exact path='/checkout' element={ <Checkout /> }/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  )
}


export default App;
