import React, { useState, useEffect } from "react";
import { getProducts } from "../products/Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({}) //Estado para obtener y/o modificar 1 Item

    useEffect(() => { 
        async function getItem() { //F para mostrar un solo item dentro del ItemDetailContainer
        const detalleProducto = await getProducts([]) //Guardamos en detalleProducto 1 solo Producto
        setItem(detalleProducto); //Modificamos el estado de item (osea del producto que quiero mostrar)
      }
      getItem(); //Llamamos a la función 
    
    }, [])
    
    return(
        <>
            <ItemDetail producto = {item}   />
        </>

    );

}
export default ItemDetailContainer;