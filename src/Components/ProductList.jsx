import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"
import Header from "./Header"
import ClipLoader from 'react-spinners/ClipLoader';




function ProductList (){
    const [loading, setLoading] = useState(false)


const [products, setProducts] = useState([])

const [Search, setSearch] =useState("")
const handleSearch = (event) => {
    setSearch(event.target.value)
}


    const handleGetProducts =  () =>{
        setLoading(true)
        axios.get("https://fakestoreapi.in/api/products").then((response) =>
            

{
            setProducts(response.data.products)
            setLoading(false)

    }).catch((error) => {
        console.log(error)
    })

    }


useEffect(() =>{
    handleGetProducts()
}, [])












    return   <div>
        < Header  Search={handleSearch }/>
        {
            loading == true ? <ClipLoader loading={loading} className="ml-[400px] mt-32"></ClipLoader>  :  
        
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-[300px_300px_300px] justify-center ">
        {
            products.filter( (items) => {
                return Search.toLocaleLowerCase() == "" ? items :  items.title.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
            }).map((data) => {
                return<Product  items={data}/>
            })
        }
</div>
}
    </div>
}

export default ProductList
