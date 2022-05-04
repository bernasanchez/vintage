import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'


const ItemCount = ({stock, initial, item, addItem}) => {
    // console.log('Producto en ItemCount', item); 
    
    const [counter, setCounter] = useState(initial);
   
    const Suma = () => {
        // console.log(counter);
        if(counter < stock ){
            setCounter(counter + 1); 
        }else{
            alert('No hay mas stock');
        }     
    }

    const Resta = () => {
        if(counter > 0){
            setCounter(counter - 1); 
        }else{
            alert('Debe seleccionar un producto');
        }
        
    } 
    
    const alertAgregarCarrito = () => {
        Swal.fire('Producto Agregado!','Agregaste'+ ' ' + item.title + ' ' + 'al carrito', 'success');
    } 
    
    return(  
        <>
        <div id="cajaCounter">
            <button className="btn btn-outline-danger" id="btnResta" onClick={Resta}> - </button>
            <span id="cajaCantidadCounter"> {counter} </span> 
            <button className="btn btn-outline-success" id="btnSuma" disabled= ""  onClick={Suma}> + </button>
        </div>  
            <br/>
            {
                counter > 0 ?
                <button className="btn btn-dark" id="btnAgregar" onClick={() => addItem({item, counter}, alertAgregarCarrito())}>
                    { <FontAwesomeIcon icon={faCartPlus} style={{marginRight:'5px'}} />}
                    Agregar al Carrito 
                </button>
                :
                <button className="btn btn-secondary disabled" id="btnAgregar"> 
                    { <FontAwesomeIcon icon={faCartPlus} style={{marginRight:'5px'}} />}
                    Agregar al Carrito 
                </button>
            }
        </>
    );
}
export default ItemCount;