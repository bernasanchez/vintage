import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [counter, setCounter] = useState(initial);
    
    // const buttonSuma = document.getElementById('btnSuma');
    // buttonSuma.disabled = "true"
    const Suma = () => {
        // console.log(counter);
        if(counter < stock ){
            setCounter(counter + 1); 
        }else{
            alert('No hay mas stock');
        }     
    }

    // const buttonResta = document.getElementById('btnResta');
    // buttonResta.disabled = "true"
    const Resta = () => {
        if(counter > 0){
            setCounter(counter - 1); 
        }else{
            alert('Debe seleccionar un producto');
        }
        
    }    
    
    return(  
        <>
        <div className="container border border-dark rounded" id="cajaCounter">
            <button className="btn btn-outline-danger" id="btnResta" onClick={Resta}> - </button>
            <span id="cajaCantidadCounter"> {counter} </span> 
            <button className="btn btn-outline-success" id="btnSuma" disabled= ""  onClick={Suma}> + </button>
            <br/>
            {
                counter > 0 ?
                <button className="btn btn-primary" id="btnAgregar" onClick={() => onAdd(counter)}> 
                Agregar al Carrito 
                </button>
                :
                <button className="btn btn-primary disabled" id="btnAgregar" onClick={() => onAdd}> 
                Agregar al Carrito 
                </button>

            } 
        </div>
        </>
    );
}
export default ItemCount;