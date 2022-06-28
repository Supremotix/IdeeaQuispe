import { createContext, useEffect, useState } from "react"
import { getProductById } from "../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemDteailConteiner = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }

    {/*     useEffect(() => {


        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [productId])*/}


    return (
        <>
            <h1>Detalle de equipo</h1>
            <ItemDetail {...product} />
        </>
    )
}
export default ItemDteailConteiner