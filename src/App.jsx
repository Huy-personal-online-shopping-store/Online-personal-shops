import {Routes, Route } from 'react-router-dom'
import ProductList from './assets/components/ProductList'
import Product from './assets/components/Product'
import Login from './assets/components/Login'
import Home from './assets/components/Home'

export default function App() {


  return(
    <div>
      

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/product" element={<ProductList />}/>
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    </div>
  )
}