import {Routes, Route, Link} from 'react-router-dom'
import ProductList from './assets/components/ProductList'
import Product from './assets/components/Product'
import Login from './assets/components/Login'
import Home from './assets/components/Home'
import Signup from './assets/components/Signup'
import Cart from './assets/components/Cart'

export default function App() {

  return(
    <div>

      <div className='all-links'>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductList />}/>
      <Route path="/product/:id" element={<Product />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  )
}