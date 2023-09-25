import { useState } from 'react'

export default function CheckOut(){

    const [userInfo, setUserInfo] = useState({
        firstname: '',
        lastName:'',
        email:""
    })

    const[userAddress, setUserAddress] = useState({
        street:'',
        city:'',
        zipcode:''
    })
    const username = sessionStorage.getItem('username')

    // need to handle submission form
    async function handleSubmit(){}



    return(
        <form className='user-checkout-form' onSubmit={handleSubmit}>
            <h1>Welcome, {username} please enter your info</h1>
            <div className='user-personal-info'>
                <label>
                First name: <input type='text' placeholder='First name' value={userInfo.firstname} onChange={(e)=>{setUserInfo.firstname(e.target.value)}} />
            </label>
            <label>
                Last name: <input type='text' placeholder='Last name' value={userInfo.lastName} onChange={(e)=>{setUserInfo.LastName(e.target.value)}} />
            </label>
            <label>
                Email: <input type='text' placeholder='Email' value={userInfo.email} onChange={(e)=>{setUserInfo.email(e.target.value)}} />
            </label>
            </div>
        
            <div className='user-address-infor'>
                <label>
                Street <input type='text' placeholder='Street' value={userAddress.street} onChange={(e)=>{setUserAddress.street(e.target.value)}} />
            </label>
            <label>
                City: <input type='text' placeholder='City' value={userAddress.city} onChange={(e)=>{setUserAddress.city(e.target.value)}} />
            </label>
            <label>
                Zipcode: <input type='text' placeholder='zipcode' value={userAddress.zipcode} onChange={(e)=>{setUserAddress.zipcode(e.target.value)}} />
            </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}