import {Routes, Route} from 'react-router-dom'
import ProductList from './assets/components/ProductList'
import Product from './assets/components/Product'
import Login from './assets/components/Login'
import Home from './assets/components/Home'
import Signup from './assets/components/Signup'
import Cart from './assets/components/Cart'
import CheckOut from './assets/components/CheckOut'
import NavBar from './assets/components/NavBar'

export default function App() {

  return(
    <div>

      <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductList />}/>
      <Route path="/product/:id" element={<Product />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
    </div>
  )
}