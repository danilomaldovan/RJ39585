import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirProductosPorId } from "../../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const {itemId} = useParams()
    


    useEffect(() =>{
        
        pedirProductosPorId (Number(itemId) )
            .then((resp) =>{
                setItem(resp)
            })
            
        }, [itemId])

return(
    <div>
        {item? <ItemDetail item={item}/>:<h1>Cargando...</h1>}
    </div>
)

}