/*import { Link, useNavigate } from "react-router-dom"*/
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../CartContext/CartContext";



export const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1)
    
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad, 
        }
    
        agregarAlCarrito(newItem)
    }


    return (
        <div className="container my-5">
            <h2>{item.name} </h2>
            <img src={item.img} alt={item.name} />
            <p>{item.description} </p>
            <p>Precio: ${item.price}</p>
            {item.stock <= 5 && <p><strong>Ultimas unidades disponibles!</strong></p>}


        {
            isInCart(item.id)
                ? <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                : <ItemCount 
                    max={item.stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    handleAgregar={handleAgregar}
                />
        }
            


    
            <br/>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>

        </div>
    )
}