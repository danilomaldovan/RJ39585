import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contacto } from "./components/Contacto/Contacto";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/CartContext/CartContext";
import { Cart } from "./Cart/Cart";
// import { Footer } from "./components/Footer/Footer";


function App() {

return ( 
    <CartProvider>
      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={ <Cart/>} />
          <Route path="/nosotros" element={ <Nosotros /> }/>
          <Route path="/contacto" element={ <Contacto /> }/>
          <Route path="*" element={<Navigate to="/" /> }/>
        </Routes>
    
          {/* <Footer/>   */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
