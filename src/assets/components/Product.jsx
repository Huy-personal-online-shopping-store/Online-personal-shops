import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Product(){

    const [product,setProduct] = useState({});

    const{id} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchSingleProduct(){
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const result = await response.json();
                setProduct(result)
            } catch (err) {
                console.error(err)
            }
        }
        fetchSingleProduct()
    },[id])

    return (
        <div className="single-product">
            <h4>{product.title}</h4>
            <img src={product.image} width="50px" height="50px" />
            <p><strong>Category</strong>: {product.category}</p>
            <p><strong>Price</strong>: ${product.price}</p>
            <p><strong>Description</strong>: {product.description}</p>
            <button onClick={() =>{navigate('/')}}>Back</button>
            </div>
    )
}