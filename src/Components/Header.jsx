
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header ({Search}){
const numberOfItems = useSelector((state) => state.cart.items)
const [isOpen, setIsOpen , color] = useState(false)

const handleOpenMenu =   () => {
    setIsOpen(true)
}



const closeMenu = () => {
    setIsOpen(false)
}






    return<div className=" bg-primaryColor  font-primaryFont px-20    text-thirdColor sm:px-20 py-5 flex  justify-between items-center fixed w-full">
<h1 className="sm:text-4xl text-3xl absolute top-0 left-0 ml-5"><span className="text-secondaryColor">C</span>iiltire</h1>

<ul   style={{display : isOpen == true ? "block" : ""}}         className="  hidden sm:flex sm:gap-5 text-2xl mt-5 sm:mt-0 ">
    <li>About</li> 
    <li>Service</li>
    <li>Contact Us</li>
    
    
</ul>

<form className="">
    <input  onChange={Search}   className="w-[500px] h-[40px] rounded text-black  hidden sm:flex transition transform duration-300 ease-in-left hover:translate-x-4  hover:bg-[#b8f0e6] text-center  "   type="text" placeholder="Search Products"></input>
    {/* <i class="fa-solid fa-magnifying-glass   text-thirdColor  ml-5  "></i> */}
</form>
<Link to= "/Cart">
<i class="fa-solid fa-cart-shopping "></i></Link>
<i   onClick={handleOpenMenu}     style={{display:isOpen == true ?  "none " : "",}}      class="fa-solid fa-bars sm:hidden"></i>
<i     onClick={closeMenu}  style={{ display : isOpen == true ? "block" : ""}}      class="fa-solid fa-x    hidden sm:hidden text-2xl    absolute right-2 top-7  "></i>
<h1  className="text-2xl">{numberOfItems.length}</h1>
    </div>
}

export default Header