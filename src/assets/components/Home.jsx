//  import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './Home.css'

export default function Home(){

    const navigate = useNavigate()

    const username = sessionStorage.getItem('username')

    return (

        <div className="home">
            {username?(
                <div>
                <p>Welcome, {username}</p>
                <button onClick={()=>{navigate('/product')}}>All products</button>
                
                </div>
            ): (
                 <div>
            <h1>Welcome</h1>
            
            <button onClick={()=>{navigate('/login')}}>Log in</button>
            </div>
            )}
        </div>
    )
}