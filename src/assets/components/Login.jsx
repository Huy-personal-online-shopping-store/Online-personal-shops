import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()


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
       console.log(result);
      setLoggedIn(result)
      // navigate('/')
      sessionStorage.setItem('username', username)
       navigate('/')
    } catch(error){
      console.error(error)
    }
  }


  // async function handleLogout(){
  //   sessionStorage.removeItem('username');
  //   setLoggedIn(false)
  // }

  return(
    <div>
      <h1>Login</h1>
      {/* {loggedIn?(
        <div>
        <p>Welcome, {username}! you are logged in.</p>
        <button onClick={()=>{navigate('/')}}>Main page</button>
        </div>
      ):( */}
        <div>
          
          <label>
            Username: <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          </label>
          <label>
            Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
          <button onClick={handleLogin}>Submit</button>
        </div>
      {/* )} */}
    </div>
  )

}