import { useSelector } from "react-redux"

function PriceCard  (){

const price = useSelector((state) => state.cart.totalPrice)
const number = useSelector((state) => state.cart.items)


return<div className="sm:w-[330px] w-[180px] p-4 rounded sm:fixed sm:right-0 right-[-40px] top-0 border-4 h-[200px] m-3 fixed">
    <h1>Total Items</h1>
    <h1 className="font-bold">{number.length}</h1>
    <h1>Total Price</h1>
    <h1 className="font-bold">${price}</h1>
    <button className="sm:px-28 px-2 py-3 mt-3 rounded bg-primaryColor text-thirdColor">Pay Now</button>
</div>
}


export default PriceCard