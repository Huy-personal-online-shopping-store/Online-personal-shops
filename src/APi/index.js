
// fetching all products
export async function fetchAllProducts(){
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json()
        return result
    } catch(error){
        console.error("failed fetchin data", error)
    }
}

// fetch single product 
export async function fetchSingleProduct(id){
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const result = await response.json()
        return result
    } catch(error){
        console.error("failed fetching single product", error)
    }
}

//fetch user Cart
export async function fetchCart(){
    try{
        const response = await fetch(`https://fakestoreapi.com/carts/user/1`)
        const result = await response.json()
        return result
    }catch(error){
        console.error("failed fetch user cart", error)
    }
}

// get user data, we are using user id:1
export async function fetchUserInfo(){
    try {
        const response = await fetch("https://fakestoreapi.com/users/1");
        const result = await response.json();
        return result
    } catch(error){
        console.error(error)
    }
}

