import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../asyncmock"
import ItemList from '../ItemList/ItemList'
import { db } from '../../services/firebase'

import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [products, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        window.addEventListener('resize', () => console.log('cambio tamaño'))
        return () => {
            window.removeEventListener('resize', () => console.log('gagagaga'))
        }
    })
    useEffect(() => {

        const collectionRef = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (collection(db, 'products'))


        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProductos(productsFormatted)
        })
    })


    { /*    useEffect(() => {

        
        if (!categoryId) {
            getProducts().then(prods => {
                setProductos(prods)

            }).catch(error => {
                console.log(error);
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProductos(prods)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [categoryId]) */}
    /*  const productsComponents = products.map(product => {
          return (
              <li key={product.id}>
                  {product.name}
              </li>
          )
      })*/
    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            {products.length > 0
                ? <ItemList products={products} />
                : <h1 className='alert alert-danger'>No hay productos</h1>
            }
        </div>
    )
}
export default ItemListContainer
