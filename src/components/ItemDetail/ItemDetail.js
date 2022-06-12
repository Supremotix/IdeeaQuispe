const ItemDetail = ({ id, name, price, img }) => {
    return (
        <>
            <h2>Card de detalle</h2>
            <div>
                <img className="pictures" src={img} alt={name} />
                <p>{name}</p>
                <p>$/.{price}.00</p>

            </div>
        </>
    )
}

export default ItemDetail

