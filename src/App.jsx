import {Route , Routes } from "react-router-dom"
import Home from"./Components/pages/Home"
import Cart from"./Components/pages/Cart"

function App (){
    return <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
}

export default App