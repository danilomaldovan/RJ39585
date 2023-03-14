

export const ItemList = ( {items} ) => {
    
    return(
        <div>
            <h2>Productos</h2>
            <hr/>
            <div className='row my-5'>

                {items.map((el) => (
                    <div key={el.id} className='col-3 col m-1'>
                        <img src={el.img} alt= {el.name}/>
                        <h4>{el.name}</h4>
                        <p>{el.description}</p>
                        <p>Precio:$<strong>{el.price}</strong></p>
                        <button className='btn btn-primary'>Ver Mas</button>
                    </div>)
                )}
            </div>
        </div>    
        
    )

}