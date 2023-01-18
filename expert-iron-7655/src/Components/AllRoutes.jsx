import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/ProductDetails'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes