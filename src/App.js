import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div>
      <NavBar />
      
      <div className="container mt-2">
      <ItemListContainer greeting={'ItemListContainer'}/>
      </div>

   
    </div>
  );
}

export default App;
