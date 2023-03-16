

export const ItemDetail = ({item}) => {
    
    return (
    <div key={item.id} >
        <div className="container my-5">
            <h2>{item.name} </h2>
            <img src={item.img} alt={item.name} />
            <p>{item.description} </p>
            <p>Precio: ${item.price}</p>

        </div>
    </div>
    )
}