import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/CartContext/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";

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
          <Route path="*" element={<Navigate to="/" /> }/>
        </Routes>
    
          {<Footer/>}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
