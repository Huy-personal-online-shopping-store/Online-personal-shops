import {Routes, Route} from 'react-router-dom'
import Product from './assets/components/singleproduct/Product'
import Login from './assets/components/login/Login'
import Home from './assets/components/home/Home'
import Signup from './assets/components/signup/Signup'
import Cart from './assets/components/cart/Cart'
import CheckOut from './assets/components/checkoutinfo/CheckOut'
import NavBar from './assets/components/navbar/NavBar'
import FinalCheckOut from './assets/components/finalcheckout/FinalCheckOut'
import ProductList from './assets/components/allproduct/ProductList'

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
      <Route path='/final-checkout' element={<FinalCheckOut/>} />
    </Routes>
    </div>
  )
}