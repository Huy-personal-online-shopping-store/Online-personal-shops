import { useState, useEffect } from "react"
import './ProductList.css'
import { useNavigate } from "react-router-dom";

export default function ProductList(){

    const [products,setProducts] = useState([]);
    const [username, setUsername] = useState('')
    const [search, setSearch] = useState('')

    const navigate = useNavigate()


    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const result = await response.json()
                setProducts(result)
            } catch(error){
                (error)
            }
        }
        fetchProducts()
    },[])

    useEffect(()=>{
        const storeUsername = sessionStorage.getItem('username');
        if(storeUsername){
            setUsername(storeUsername)
        }
    },[])

    const filterProducts = search ? products.filter((product)=>
    product.title.toLowerCase().includes(search.toLowerCase())):products;

    return(

        <div className="app">
            <div className="navbar">
                <button onClick={()=>{navigate('/login')}}>Login</button>
            </div>
            <div className="search-box">
                <label htmlFor="search">
                    Search: <input type="text" placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                </label>
            </div>
            <h1>Welcome {username}</h1>
            
            <div className="product-list">
                {filterProducts ? filterProducts.map(product => {
                    return (
                        <div className="product" key={product.id}>
                            <h4>{product.title}</h4>
                            <img src={product.image} width="50px" height="50px" />
                            <p>Price: ${product.price}</p>
                            <button className="detail-btn" onClick={() =>{navigate(`/product/${product.id}`)}}>Detail</button>
                        </div>
                    )
                }): null}
            </div>
        </div>
    )
}