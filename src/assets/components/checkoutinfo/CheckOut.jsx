import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CheckOut.css'

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

    const [userPayment, setUserPayment] = useState({
        cardName:'',
        cardNumber:'',
        cardExpirationNumber:'',
        cardCVV:''
    })

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()


    const username = sessionStorage.getItem('username')

    // need to handle submission form
    async function handleSubmit(e){
        e.preventDefault();

  if (!userInfo.firstname || !userInfo.lastName || !userInfo.email || !userAddress.street || !userAddress.city || !userAddress.zipcode || !userPayment.cardName || !userPayment.cardNumber || !userPayment.cardExpirationNumber || !userPayment.cardCVV) {
    setErrorMessage('Please enter your information');
    return
    }
        try {
            await new Promise((resolve)=> setTimeout(resolve, 1000));
            console.log('Your order has been submitted')

            // reset form after success 
            setUserInfo({
                firstname:'',
                lastName: '',
                email:'',
            })

            setUserAddress({
                street:'',
                city: '',
                zipcode: ''
            })

            setUserPayment({
                cardName:'',
                cardNumber:'',
                cardExpirationNumber:'',
                cardCVV:''
            })

            navigate('/final-checkout')

        } catch(error){
            console.error("Failed submitting order",error)
        }
    }



    return(

        <div className='checkout-page'>
            <form className='user-checkout-form' onSubmit={handleSubmit}>
            <h1>Welcome, {username} please enter your info</h1>

            {/* personal info */}
            <div className='user-personal-info'>
                <label>
                First name: <input type='text' placeholder='First name' value={userInfo.firstname} onChange={(e)=>{setUserInfo({...userInfo, firstname: e.target.value})}} required/>
            </label>
            <label>
                Last name: <input type='text' placeholder='Last name' value={userInfo.lastName} onChange={(e)=>{setUserInfo({...userInfo, lastName: e.target.value})}} required/>
            </label>
            <label>
                Email: <input type='text' placeholder='Email' value={userInfo.email} onChange={(e)=>{setUserInfo({...userInfo, email:e.target.value})}} required />
            </label>
            </div>
        

            {/* Shipping info */}
            <div className='user-address-infor'>
                <label>
                Street <input type='text' placeholder='Street' value={userAddress.street} onChange={(e)=>{setUserAddress({...userAddress, street:e.target.value})}} required/>
            </label>
            <label>
                City: <input type='text' placeholder='City' value={userAddress.city} onChange={(e)=>{setUserAddress({...userAddress, city:e.target.value})}} required/>
            </label>
            <label>
                Zipcode: <input type='text' placeholder='zipcode' value={userAddress.zipcode} onChange={(e)=>{setUserAddress({...userAddress, zipcode:e.target.value})}} required/>
            </label>
            </div>


            {/* payment */}
            <div className='user-payment'>
                <label>
                    CardHolder Name:
                    <input 
                        type='text'
                        placeholder="Name"
                        value={userPayment.cardName}
                        onChange={(e)=>{setUserPayment({...userPayment, cardName:e.target.value})}}
                        required
                    />
                </label>
                <label>
                    CardHolder Number:
                    <input 
                        type='text'
                        placeholder="Name"
                        value={userPayment.cardNumber}
                        onChange={(e)=>{setUserPayment({...userPayment, cardNumber:e.target.value})}}
                        required
                    />
                </label>
                <label>
                    Expiration Date:
                    <input 
                        type='text'
                        placeholder="Name"
                        value={userPayment.cardExpirationNumber}
                        onChange={(e)=>{setUserPayment({...userPayment, cardExpirationNumber:e.target.value})}}
                        required
                    />
                </label>
                <label>
                    CardHolder CVV:
                    <input 
                        type='text'
                        placeholder="Name"
                        value={userPayment.cardCVV}
                        onChange={(e)=>{setUserPayment({...userPayment, cardCVV:e.target.value})}}
                        required
                    />
                </label>

            </div>

            {errorMessage && <p className='error-message'>{errorMessage}</p>}

            <button type='submit' onClick={()=>{
                if(!formSubmitted) {
                    setErrorMessage('');
                    handleSubmit()
                }
            }} disabled={formSubmitted}>{formSubmitted ? 'Form Submitted' : 'Submit'}</button>
            <button onClick={()=>{navigate('/cart')}}>Back to cart</button>

            
            </form>
        </div>
        
    )
}

