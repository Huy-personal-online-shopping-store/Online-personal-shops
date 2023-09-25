import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import './Product.css'
import { fetchSingleProduct } from "../../APi";

export default function Product(){

    const [product,setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const{id} = useParams()
    const navigate = useNavigate();


    // fetching single product
     useEffect(()=>{
        async function fetchSinProduct(){
            try {
                const singProduct = await fetchSingleProduct(id);
                setProduct(singProduct);
                setLoading(false)
            } catch (error){
                console.error("Error fetch single product", error);
                setError(error.message);
                setLoading(false)
            }
        }
        fetchSinProduct()
    }, [id])

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