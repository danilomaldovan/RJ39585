import { Link } from "react-router-dom"
import './footer.scss'



export const Footer = () => {
    
    return(
        <footer className="pieDePagina">
            <div>
                <Link alt="LogoInstagram">https://www.instagram.com/yuladeco/</Link>
                <p>Copyright &copy; Yuladeco - 2022. Todos los derechos reservados.</p>
                <p>Para reclamos en derechos al consumidor <Link href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank">Ingrese aqui</Link></p>
            </div>
        </footer>
            
        
    )

}


