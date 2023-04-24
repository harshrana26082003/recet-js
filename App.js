import React from 'react'
import { Route,  Routes, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Cocktail from './pages/Cocktail'
import Navbar from './Componate/Navbar'
import CocktailDetail from './pages/CocktailDetail'


function App() {
  return (
    <>
    <Navbar />
      <Routes>
    |<Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/Product' element={<Product />}></Route>
    <Route path='/Product/:id' element={<ProductDetail />}></Route>
    <Route path='/Cocktail' element={<Cocktail />}></Route>
    <Route path='/Cocktail/:id' element={<CocktailDetail />}></Route>
      </Routes>
    </>
  )
}

export default App

