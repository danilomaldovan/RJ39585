import { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'


export const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)

    return(
        <Link to="cart" style={{
            fontSize:'26px',
            color:'grey'
        }}>
            <FaShoppingCart/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

