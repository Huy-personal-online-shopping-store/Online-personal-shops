import { useState, useEffect } from "react"
import './ProductList.css'
import { useNavigate, } from "react-router-dom";
import { fetchAllProducts } from "../../../APi";
// import { sorting } from "../../../APi";

export default function ProductList(){

    const [products,setProducts] = useState([]);
    const [category, setCategory] = useState('')
    const [username, setUsername] = useState('')
    const [search, setSearch] = useState('')
    const[sortPrice,setSortPrice] = useState('asc')
    const navigate = useNavigate()

// getting all the products
    useEffect(()=>{
            async function fetchProducts(){
            try {
                const productsData = await fetchAllProducts()
                setProducts(productsData)
            } catch(error){
                console.error("Failed fetching products",error)
            }
        }
        fetchProducts()
    
    },[])

    // storing username
    useEffect(()=>{
        const storeUsername = localStorage.getItem('username');
        if(storeUsername){
            setUsername(storeUsername)
        }
    },[])

    //sort
    function sortByPrice(){
        const sortProduct = [...products];
        if(sortPrice === 'asc'){
            sortProduct.sort((a,b)=>a.price-b.price)
            setSortPrice('desc')
        } else{
            sortProduct.sort((a,b)=>b.price-a.price)
            setSortPrice('asc')
        }
        setProducts(sortProduct)
    }

  // search
    const filterProducts = search ? products.filter((product)=>
    product.title.toLowerCase().includes(search.toLowerCase())):products;


    // category filter
    const categoryFiltered = category ? filterProducts.filter((product)=>product.category === category) : filterProducts

    function addToCart(product){

        // retrieving existing cart data
        const existingCart = JSON.parse(localStorage.getItem('cart'))||[];

        // check to see if items already in cart
        const existingProduct = existingCart.findIndex((item) => item.id === product.id )

        if(existingProduct !== -1) {
            //increase quantity if item is in cart
            existingCart[existingProduct].quantity += 1
        } else {
            // add item if in cart
            existingCart.push({...product,  quantity: 1})
        }
        // update the localstorage with cart data
        localStorage.setItem('cart', JSON.stringify(existingCart))

        //show alert when product added
        window.alert(`Added "${product.title}" to the cart`)

    }

    return(

        <div className="app">
            <div className="search-box">
                
                <input type="text" placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Category</option>
                    <option value='electronics'>Electronics</option>
                    <option value='jewelery'>Jewelery</option>
                    <option value="men's clothing">Men Clothing</option>
                    <option value="women's clothing">Women Clothing</option>
                </select>
                <button className="sort-button" onClick={sortByPrice}>
                    Sort-by-price: ({sortPrice ==='asc' ? 'Low-to-High' : 'High-to-Low'})
                </button>
            </div>

            <h1>Welcome {username}</h1>
            
            <div className="product-list">
                {categoryFiltered ? categoryFiltered.map(product => {
                    return (
                        <div className="product" key={product.id}>
                            <h4>{product.title}</h4>
                            <img className="image-pic" src={product.image} alt={product.title} width="100px" height="100px"/>
                            <p><strong>Price</strong>: ${product.price}</p>
                            <button onClick={()=>addToCart(product)}>Add to cart</button>
                            <button className="detail-btn" onClick={() =>{navigate(`/product/${product.id}`)}}>Detail</button>
                        </div>
                    )
                }): null}
            </div>
        </div>
    )
}
