import { useEffect, useState } from "react"
import { useNavigate, } from "react-router-dom"


export default function Cart(){
    const [carts,setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [total, setTotal] = useState(calculateTotal(carts))

    const navigate = useNavigate()

    //load cart from local storage
    useEffect(()=>{
        const storeCartData = localStorage.getItem('cart');
            if(storeCartData){
                try {
                    const parsedCartData = JSON.parse(storeCartData);
                    setCarts(parsedCartData);
                    setLoading(false)
                } catch(error){
                    console.error(error)
                    setError("failed passing item")
                }
        }else {
            setLoading(false)
        }
    },[])

    // delete from cart
     async function deleteCartHandler(deleteCartId){

        const cartId = 1

        try{
            const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`, {
                method:"DELETE"
            });

            if(response.ok){
                // item to be successfully deleted
                const updateCart = carts.filter((cartItem)=> cartItem.id !== deleteCartId)
                setCarts(updateCart)

                //update localstorage
                localStorage.setItem('cart', JSON.stringify(updateCart))
            } else {
                console.error("unable to delete item in cart",error)
            }
        } catch (error){
            console.error(error)
        }
    }

    // increase the item quantity
    async function increaseQuantity(cartItemId){
        const updateCart = carts.map((cartItem)=> {
            if((cartItem.id) === cartItemId) {
                // increase by 1
                return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem
        })
        // update the setcart function
        setCarts(updateCart)
        //update the localstorage
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }

    //decrease the item quantity
    async function decreaseQuantity(cartItemId){
        const updateCart = carts.map((cartItem)=>{
            if((cartItem.id) === cartItemId){
            //decrease item by 1
                return {...cartItem, quantity: cartItem.quantity - 1}

            }
            return cartItem
        })
        // update the setcart function
        setCarts(updateCart)
        //update localstorage
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }

    // getting the total that calculate depend on the increase and decrease qantity
    function calculateTotal(cartItems){
        return cartItems.reduce((total, cartItems)=>{
            const subTotal = cartItems.price * cartItems.quantity;
            return total + subTotal
        }, 0)
    }
    // update the price when cart arry changes
    useEffect(()=>{
        const newPrice = calculateTotal(carts);
        setTotal(newPrice)
    }, [carts])



    if(loading){
        return <p>Loading ...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    return(

        <div className="user-cart">
            <h1>Cart</h1>
            {carts && carts.map((cartItem)=>(
                <div key={cartItem.id}>
                    <div>
                        <h1>{cartItem.title}</h1>
                        <img src={cartItem.image} alt={cartItem.title} width="50px" height="50px" />
                        <p>Price: ${cartItem.price}</p>
                        <p>Quantity: {cartItem.quantity}</p>
                        <button onClick={()=>decreaseQuantity(cartItem.id)}>-</button>
                        <button onClick={()=>deleteCartHandler(cartItem.id)}>Remove Item</button>
                        <button onClick={()=>increaseQuantity(cartItem.id)}>+</button>
                    </div>
                </div>
            ))}
            <p>Your Total: ${total}</p>
            <button onClick={()=>{navigate('/checkout')}}>CheckOut</button>
        </div>
    )
}
