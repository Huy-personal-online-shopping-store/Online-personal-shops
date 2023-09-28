import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Signup.css' 


export default function Signup(){
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    async function handleSubmit(){
        try {
            const response = await fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password:password,
                })
            })
            if(response.ok){
                console.log("successfully sign up")
            } else {
                console.log("sign up failed")
            }
            navigate('/login')
        } catch(error){
            console.error(error)
        }
    }

    return(
        <div className="signup-container">
            <h1 className="header-title">Sign Up</h1>

            <form className="signup-form" onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </label>
                
                <label>
                    Password: <input type="text" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </label>
                
                <label>
                    Email: <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </label>

                <button type="submit" onClick={()=>{navigate('/login')}}>Submit</button>
                
                <button onClick={()=>{navigate('/login')}}>Back to login</button>
            </form>
        </div>
        )
}