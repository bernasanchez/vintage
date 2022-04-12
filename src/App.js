import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Searcher from './components/Searcher';



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <div className="container mt-2">
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
