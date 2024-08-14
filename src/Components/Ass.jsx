import axios from "axios"
import { useEffect , useState } from "react"
import Commerce from "./Commerce"

function Ass (){


    const [products, setProducts] = useState ([])
    const handleGetProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
setProducts(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        handleGetProducts()
    })


    return<div className="grid grid-cols-[300px_300px] justify-center gap-y-[30px] gap-x-[300px]">
 {
            products.map((data) => {
                return<Commerce  lists={data}/>
            })
        }

    </div>
}

export default Ass