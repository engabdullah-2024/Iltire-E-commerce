function Yaaqshid ({items}){
    return<div className="border-4 rounded m-3 p-4 w-[300px] ">
        <img src={items.category.image} />
        <h1>{items.title}</h1>
        <div className="flex justify-between items-center">
        <p>${items.price}</p>
        <button className="bg-primaryColor rounded-full px-3 py-1 text-3xl text-thirdColor">+</button>
        </div>
    </div>

    

    
}
export default Yaaqshid