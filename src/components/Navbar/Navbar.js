import './Navbar.scss'
import { CartWidget } from "../CarWidget/CartWidget";
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img src="/img/logoyula.png" alt="logo" className="header__logo"/>
                
                <nav className="navbar">
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/productos/hogar" className="navbar__link">Hogar</Link>
                    <Link to="/productos/jardin" className="navbar__link">Jardin</Link>
                    <Link to="/productos/cocina" className="navbar__link">Cocina</Link>
                    <Link to="/nosotros" className="navbar__link">Nosotros</Link>
                    <Link to="/contacto" className="navbar__link">Contacto</Link>
                </nav>  
                <CartWidget />
                
            </div>
        </header>
    )
}