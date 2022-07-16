import { useContext } from "react"
import CartContext from "../Context/CartContext"
import { Link } from "react-router-dom"
import './CartWidget.css'

const CartWidget = () => {
    const { getCartQuantity, totalQuantity } = useContext(CartContext)
    //const totalQuantity = getCartQuantity()
    return (
        <Link to='/cart' className='Container-img'>
            <h3 className="Counter">{totalQuantity}</h3>
            <img className="img" src='/images/carrito2.png' />

        </Link>
    )
}
export default CartWidget