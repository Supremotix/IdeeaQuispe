import Item from "../Item/item"

const ItemList = ({ products }) => {
    return (
        <div className="body">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList