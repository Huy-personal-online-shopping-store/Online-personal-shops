import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Product(){

    const [product,setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const{id} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchSingleProduct(){
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const result = await response.json();
                setProduct(result)
                setLoading(false)
            } catch (err) {
                console.error(error)
                setLoading(false)
            }
        }
        fetchSingleProduct()
    },[id])

    return (
        <div className="single-product">
            {loading ? (
                <p>Loading ...</p>
            ): error ?(
                <p>Error; {error}</p>
            ):(
                <>
            <h4>{product.title}</h4>
            <img src={product.image} width="50px" height="50px" />
            <p><strong>Category</strong>: {product.category}</p>
            <p><strong>Price</strong>: ${product.price}</p>
            <p><strong>Description</strong>: {product.description}</p>
            <button onClick={() =>{navigate('/product')}}>Back</button>
            </>
    )}
    </div>
    )
}