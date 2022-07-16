import { useContext } from "react"
import CartContext from "../components/Context/CartContext"

const Cart = () => {

    const { cart, totalQuantity } = useContext(CartContext)

    if (totalQuantity === 0) {
        return <h1 className="alert alert-danger"> No hay productos en el carrito</h1>
    }
    return (
        <>
            <h1>Compras</h1>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cart.map(prod => <h3 key={prod.id}> {prod.name} </h3>)}</td>
                            <td>{cart.map(prod => <h3 key={prod.id}> {prod.price}</h3>)}</td>
                            <td>{cart.map(prod => <h3 key={prod.id}> {prod.quantity} </h3>)}</td>
                            <td> {cart.map(prod => <h3 key={prod.id}> {prod.total} </h3>)}</td>
                            <td> <button>Retirar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Cart