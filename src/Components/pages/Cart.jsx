import { useSelector , useDispatch } from "react-redux";
import PriceCard from "../PriceCard";
import { calculatePrice, removeItemFromCart } from "../../Redux/Reducer/cart";

function Cart() {
    const items = useSelector((state) => state.cart.items);

    const dispatch = useDispatch()
    const handleRemove = (id) =>{
        dispatch(removeItemFromCart(id))
        dispatch(calculatePrice())
    }
    return items.length === 0 ? <p className="text-xl text-center mt-20 flex justify-center gap-10 "> <i class="fa-solid fa-cart-shopping"></i> <h1 className="text-xl  bg-primaryColor  rounded p-2 w-[50px] h-[50px] text-thirdColor font-bold ml-5">0</h1>The Cart Is Empty</p> : <div className="flex ml-[250px]">
        {/* <h1 className="text-4xl font-bold text-center w-[600px] bg-gray-800 ">Your Shopping Cart</h1> */}
        <div className="grid  justify-center  mt-[300px]  mr-[100px] sm:mt-0  gap-5 m-0 sm:m-0 absolute left-5 ">
            {items.map((data) => (
                <div className="border-4 flex sm:w-[600px] w-[200px] border-blue-700 rounded sm:p-2 sm:m-3">
                    <div className="ml-10 ">
                        <img className="rounded sm:w-[150px] w-[130px]" src={data.image}/>
                    </div>
                    <div className="mt-10 sm:ml-6 ">
                        <h1 className="text-xl font-semibold">{data.title.substring(0, 20)}</h1>
                        <h1 className="text-xl font-bold">${data.price}</h1>
                    </div>
                    <button onClick={() => handleRemove(data)}    className="text-xl font-semibold absolute  ">X</button>
                </div>
            ))}
        </div>
        < PriceCard />
    </div>
}

export default Cart
