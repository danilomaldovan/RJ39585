import './Navbar.scss'
import { CartWidget } from "../CarWidget/CartWidget";



export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img src="./img/logoyula.png" alt="logo" className="header__logo"/>
                
                <nav className="navbar">
                    <a href="#" className="navbar__link">Inicio</a>
                    <a href="#" className="navbar__link">Nosotros</a>
                    <a href="#" className="navbar__link">Compras</a>
                </nav>  
                <CartWidget />
                
            </div>
        </header>
    )
}