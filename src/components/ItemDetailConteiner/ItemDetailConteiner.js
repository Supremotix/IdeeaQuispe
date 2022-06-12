import { useEffect, useState } from "react"
import { getProductById } from "../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDteailConteiner = () => {

    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById('3').then(response => {
            setProduct(response)
        })
    }, [])
    console.log(product);
    return (
        <>
            <h1>Detalle de equipo</h1>
            <ItemDetail {...product} />
        </>

    )
}

export default ItemDteailConteiner