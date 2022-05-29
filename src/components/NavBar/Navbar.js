import CartWidget from "../CartWidget/CartWiddget"

const Navbar = () => {
    return (
        <nav className="header_nav">
            <div className='nav'>
                <h3>Importaciones</h3>
                <CartWidget />
            </div>

            <ul className="header_nav_lista">
                <li><a className="btn btn-warning">laptops</a></li>
                <li><a className="btn btn-warning">CPU</a></li>
                <li><a className="btn btn-warning">Monitores</a></li>
                <li><a className="btn btn-warning">Tarjeta Grafica</a></li>
                <li><a className="btn btn-warning">Placa madre</a></li>
                <li><a className="btn btn-warning">PErifericos</a></li>
            </ul>

        </nav>

    )
}

export default Navbar