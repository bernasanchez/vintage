import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import cartwidget from "../assets/cartwidget.png"


const CartWidget = () => {
    return (
       <>
            
        <button class="btn btn-outline-success btn-sm" id="btnCarrito" >
            { <FontAwesomeIcon icon={faCartShopping}/> }
            <span>(1)</span>
        </button>  
               
       </>
           
        // <button class="btn btn-outline-light btn-sm" >
        // <img className="imgCarrito" src={cartwidget}></img>
        // </button> 
    );
    

}
export default CartWidget;