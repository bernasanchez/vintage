import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import cartwidget from "../assets/cartwidget.png"


const CartWidget = () => {
    return (
       <>
        <button class="btn btn-outline-light btn-sm" >
        <img className="imgCarrito" src={cartwidget}></img>
        </button>
       </>
       
        //PROFE: Prefiero usar el codigo de abajo para el carrito, pero para cumplir con la consigna
        //                      puse una imagen adentro de un btn. 
        // <button class="btn btn-outline-success btn-sm" id="btnCarrito" >
        //     {/* <FontAwesomeIcon icon={faCartShopping} /> */}
        // </button>      
    );
    

}
export default CartWidget;