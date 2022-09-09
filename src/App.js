import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <NavBar />

    <Routes>
      <Route />
      <Route />
      <Route />
    </Routes>

    <Footer />

    </BrowserRouter>
  )
}


export default App;
