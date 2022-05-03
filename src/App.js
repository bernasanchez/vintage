import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';
import Footer from './components/Footer';
import Slider from './components/Slider';



function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
       <Slider />
        <div className="container mt-2" style={{marginBottom:'300px'}}>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
