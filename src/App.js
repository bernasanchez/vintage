import React from  'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div>

      <NavBar />
      <ItemListContainer greeting={'Hola Máximo!'}/>

    </div>
  );
}

export default App;
