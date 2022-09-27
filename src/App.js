import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListConstainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from './Components/Footer';
import React from 'react';
import Cart from './Components/Cart';
import CartProvider from './Context/CartContext';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
          </Routes>
        </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
