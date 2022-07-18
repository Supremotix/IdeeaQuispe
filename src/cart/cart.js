import { useContext } from "react"
import CartContext from "../components/Context/CartContext"
import './cart.css'
const Cart = () => {

    const { id, name, cart, totalQuantity } = useContext(CartContext)


    const { removeItem } = useContext(CartContext)


    const handleRemove = (id) => {
        removeItem(id)
    }
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
                            <th scope="col">Precio Total</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cart.map(prod => <h3 key={prod.id}> {prod.name} </h3>)}</td>
                            <td>{cart.map(prod => <h3 key={prod.id}> {prod.price}</h3>)}</td>
                            <td>{cart.map(prod => <h3 key={prod.id}> {prod.quantity} </h3>)}</td>
                            <td>{cart.map(prod => <h3 key={prod.id}> ${prod.quantity * prod.price} </h3>)}</td>
                            <td>{cart.map(prod => <button key={prod.id} className="btn btn-danger" onClick={() => handleRemove(prod.id)} >Eliminar</button>)}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Cart