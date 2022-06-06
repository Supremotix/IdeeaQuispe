import CartWidget from "../CartWidget/CartWiddget"

const Navbar = () => {
    return (
        <nav className="header_nav">
            <div className='nav'>
                <h3>Importaciones</h3>
                <CartWidget />
            </div>

            <ul className="header_nav_lista">
                <li><a className="btn2 btn-warning">laptops</a></li>
                <li><a className="btn2 btn-warning">CPU</a></li>
                <li><a className="btn2 btn-warning">Monitores</a></li>
                <li><a className="btn2 btn-warning">Tarjeta Grafica</a></li>
                <li><a className="btn2 btn-warning">Placa madre</a></li>
                <li><a className="btn2 btn-warning">Perifericos</a></li>
                <li><a className="btn2 btn-warning">Perifericos</a></li>
                <li><a className="btn2 btn-warning">Perifericos</a></li>
            </ul>

        </nav>

    )
}

export default Navbar