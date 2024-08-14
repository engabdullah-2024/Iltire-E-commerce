import { useDispatch } from "react-redux"
import {toast, Toaster} from "react-hot-toast"

import { addItemToCart , calculatePrice } from "../Redux/Reducer/cart"
function Product ({items}){



const dispatch = useDispatch()
const handleCart = () => {
    dispatch( addItemToCart(items))
    dispatch(calculatePrice())
    toast.success("Added To Cart")
       

}


    return    <div className="border-4 rounded  w-[300px]  mt-[200px]  ml-10  sm:ml-0  ">
        <img      src={items.image} />
        <h1>{items.title.substring(0,40)}</h1>
        <div className="flex justify-between items-center">
        <p>${items.price}</p>
        <button  onClick={handleCart}   className="bg-primaryColor rounded-full px-3 py-1 text-3xl text-thirdColor">+</button>
        </div>

        <Toaster/>
    </div>

    
}
export default Product