import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.getItem('username'));
  const navigate = useNavigate()

  useEffect(()=>{
    const storeUsername = sessionStorage.getItem('username');
    if(storeUsername){
      setUsername(storeUsername);
      setLoggedIn(true)
    }
  },[])


  async function handleLogin(){
    try{
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })
      console.log(response)
      const result = await response.json()

      if(response.ok){
        setLoggedIn(true);
        sessionStorage.setItem("username",username)
        // navigate('/')
      } else {
        console.log(result.error)
      }
    } catch(error){
      console.error("Please enter corrent information",error)
      alert(error)
    }

  }

  function handleLogout(){
    sessionStorage.removeItem('username');
    setLoggedIn(false)
  }

  return(
    <div className='login'>
      <h1>Login</h1>
      <div className='login-form'>
        {loggedIn ? (
          <>
            <p>welcome, {username}</p>
            <button onClick={handleLogout}>Log out</button>
          </>
        ): (
        <div>
          <label>
            Username: <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          </label>
          <label>
            Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
          <button onClick={handleLogin}>Submit</button>
          <button onClick={() => {navigate('/signup')}}>Sign up</button>
        </div>
        )}     
    </div>
    </div>
  )
}