import axios from "axios"
import { useEffect, useState } from "react"
import Yaaqshid  from "./Yaaqshid"
import Header from "./Header"



function Yaqshid (){



const [products, setProducts] = useState([])

const [Search, setSearch] =useState("")
const handleSearch = (event) => {
    setSearch(event.target.value)
}


    const handleGetProducts =  () =>{
        axios.get("https://api.escuelajs.co/api/v1/products").then((response) =>

{
            setProducts(response.data)

    }).catch((error) => {
        console.log(error)
    })

    }


useEffect(() =>{
    handleGetProducts()
})












    return<div>
        < Header  Search={handleSearch }/>
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-[300px_300px_300px] justify-center ">
        {
            products.filter( (item) => {
                return Search.toLocaleLowerCase() == "" ? item :  item.title.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
            }).map((data) => {
                return<Yaaqshid  items={data}/>
            })
        }
</div>
    </div>
}

export default Yaqshid
