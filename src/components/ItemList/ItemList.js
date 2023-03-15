import { Item } from "../Item/Item"

export const ItemList = ( {items} ) => {
    
    return(
        <div>
            <h2>Productos</h2>
            <hr/>
            <div className='row my-5'>
                {items.map((el) =><Item key={el.id} item={el}/>)} 
            </div>)
        </div>
            
        
    )

}