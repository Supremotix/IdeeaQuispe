import { useContext } from "react"
import CartContext from "../components/Context/CartContext"

const Cart = () => {

    const { cart, totalQuantity } = useContext(CartContext)

    if(totalQuantity === 0){
        return <h1> No hay productos en el carrito</h1>
    }
    return (
        <>
            <h1>cart </h1>
            <div>
                {cart.map(prod => <h3 key={prod.id}> {prod.price} </h3>)}
                {cart.map(prod => <h3 key={prod.id}> {prod.total}</h3>)}
                {cart.map(prod => <h3 key={prod.id}> {prod.name} </h3>)}
                {cart.map(prod => <h3 key={prod.id}> {prod.quantity} </h3>)}
            </div>
        </>
    )
}
export default Cart