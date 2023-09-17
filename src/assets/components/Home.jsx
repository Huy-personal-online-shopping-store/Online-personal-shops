//  import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home(){

    //  const [username,setUsername] = useState('');
    const navigate = useNavigate()

    const username = sessionStorage.getItem('username')

    // useEffect(()=>{
    //     const storeUsername = sessionStorage.getItem('username');
    //     if(storeUsername){
    //         setUsername(storeUsername)
    //     }
    // },[])
 


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