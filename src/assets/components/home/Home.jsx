import { useNavigate } from "react-router-dom";
import './Home.css'
import {useEffect, useState} from 'react'

export default function Home(){

    const navigate = useNavigate()

    const username = localStorage.getItem('username')


    return (

        <div className="home">
            {username?(
                <div>
                <h1>Welcome, {username}</h1>
                <button className="home-button" onClick={()=>{navigate('/product')}}>All products</button>
                
                </div>
            ): (
                 <div>
            <h1>Welcome, feel free browse our awesome selections!</h1>
            <button className="home-button" onClick={()=>{navigate('/product')}}>Proceed to shop</button>
            {/* <button className="home-button" onClick={()=>{navigate('/login')}}>Login ?</button> */}

            </div>
            )}
        </div>
    )
}