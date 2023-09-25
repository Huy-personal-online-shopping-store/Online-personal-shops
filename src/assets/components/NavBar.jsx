import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(){
    return(
        <div className='navbar'>
            <div className='navbar-link-container'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/product"  className='link'>Product</Link>
                <Link to="/cart"  className='link'>Cart</Link>
                <Link to="/login"  className='link'>Login</Link>
            </div>
        </div>
    )
}