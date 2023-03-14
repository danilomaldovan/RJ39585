import { Link } from "react-router-dom"


export const Item = ({item}) => {

    return (
        <div className="col-3 m-1">
            <img src={item.img} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Precio: <strong>${item.price}</strong></p>
            <Link to={`/detail/${item.id}`} className="btn btn-primary">ver mas</Link>
        </div>
    )
}