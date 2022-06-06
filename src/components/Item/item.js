
const Item = ({ name, img,price }) => {
    return (
        <li>
            <img className="pictures" src={img} alt={name}/>
            <p>{name}</p>
            <p>$/.{price}.00</p>
            <button type="button" className="btn btn-success" >Ver detalle</button>
        </li>
        
    )
}

export default Item