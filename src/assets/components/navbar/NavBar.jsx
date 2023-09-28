import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './NavBar.css'

export default function NavBar(){

    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const storeUsername = localStorage.getItem('username');
        if(storeUsername){
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    },[])

    // log out handler
    function handleLogout(){
        localStorage.removeItem('username');
        setLoggedIn(false);
        navigate('/')
    }

    return(
        <div className='navbar-container'>
            <div className='navbar-link-container'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/product"  className='link'>Product</Link>
                <Link to="/cart"  className='link'>Cart</Link>

                {
                    loggedIn ?(
                        <div>
                            <button className='logout-link' onClick={handleLogout}>Logout</button>
                        </div>
                    ): (
                        <div>
                            <Link to="/login"  className='link'>Login</Link>
                        </div>
                    )}
            </div>
        </div>
    )
}