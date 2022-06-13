
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return (
        <li>
            <img className="pictures" src={img} alt={name} />
            <p>{name}</p>
            <p>$/.{price}.00</p>
            
            <Link  className="btn btn-success"  to={`/detail/${id}`}>ver detalle</Link>
        </li>

    )
}
export default Item