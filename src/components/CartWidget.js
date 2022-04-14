import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import cartwidget from "../assets/cartwidget.png"


const CartWidget = () => {
    return (
       <>
            
        <button className="btn btn-outline-success btn-sm" id="btnCarrito" >
            { <FontAwesomeIcon icon={faCartShopping}/> }
            <span>(1)</span>
        </button>  
               
       </>
    );
    

}
export default CartWidget;