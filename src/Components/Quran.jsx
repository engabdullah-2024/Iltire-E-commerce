import axios from "axios"

import { useEffect, useState } from "react"

import Quran2 from "./Quran2"


function Quran (){
const [quran, setQuran] = useState([])

const handleGet = () =>{
    axios.get("https://api.alquran.cloud/v1/edition").then((response) =>{
        setQuran(response.data.data)

    }).catch((error) => {
        console.log(error)
    })
}

useEffect(() =>{
    handleGet()
},[])





    return <div>



        {
            quran.map((data) =>{
                return<Quran2 items={data} />
                    
            })
        }

    </div>
}

export default Quran