function Commerce ({lists}){
    return<div className="border-4 rounded m-3 p-4 w-[300px]    transition transform duration-300 ease-in-out hover:translate-y-4    mt-10  bg-primaryColor hover:bg-[#b8f0e6] text-thirdColor ">
        <img src={lists.image} />
        <h1>{lists.id}</h1>
        <h1>{lists.title}</h1>
        
        <p>${lists.price}</p>
        <button className="bg-thirdColor rounded-full p-4 m-3 w-[200px] text-3xl text-black hover:bg-blue-500 hover:text-secondaryColor ">     $ 0     </button>
        <span className="bg-white text-primaryColor text-2xl rounded px-4 py-3 mt-5 absolute right-1">+</span>
        
        
    </div>
}

export default Commerce