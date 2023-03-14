import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {categoryId} = useParams()
    

    useEffect( ()=> {
        
        pedirDatos()
            .then((response) => {
                if (!categoryId){
                    setProductos (response)    
                }else{
                    setProductos( response.filter((prod) => prod.category === categoryId))
                }
                
            })
            .catch((error)=>{
                console.log(error)
            })
        },[categoryId])


    return(
        <div className="contenedor">
            <ItemList items={productos}/>
        </div>
    )
}

