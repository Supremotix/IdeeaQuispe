
import { useContext } from "react"

import CartContext from "../Context/CartContext"

import { Link } from "react-router-dom"


const CartWidget =()=>{
const {getCartQuantity , totalQuantity} = useContext(CartContext)
//const totalQuantity = getCartQuantity()
    return(
        <Link to='/cart' className='Container-img'>
            <img  className="img" src='/images/carrito2.png'/>
        {totalQuantity}
        </Link>
    )
}
export default CartWidget