import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Cart(){
    const [carts,setCarts] = useState([]);
    const navigate = useNavigate()

    // const {userId} = useParams()


    useEffect(()=>{
        const userId = 1;

        async function getUserCart(){
            try {
                const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
                const result = await response.json()
                console.log({result})
                setCarts(result[0].products)
            }catch(error){
                console.error(error)
            }
        }
        getUserCart()
    },[])

    console.log({carts})


    return(
        <div className="user-cart">
            <h1>Cart</h1>
            <>
                {carts && carts.length>0 ? carts.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p>Product: {item.productId}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    )
                }): (
                    <p>Empty cart</p>
                )}

            </>
        </div>
    )
}