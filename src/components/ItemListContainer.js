import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState, useEffect } from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "./ItemList";
import { getProducts } from '../products/Products' //Importamos datos del array en esta F


const ItemListContainer = ({greeting}) => {
    const [ropa, setRopa] = useState([])

    useEffect(() => {
        async function obtenerProducts (){ //Definimos F con Async
            const datosProducts = await getProducts(); //Await para resolver promesa(nos envía el array Products) y lo guardo en datosProducts
            setRopa(datosProducts);//Seteamos el array y modifica estado de [ropa]
        }
        obtenerProducts(); //Llamamos a la F
    }, [])
    // console.log(ropa, 'Soy el array de Products');

    const onAdd = () => {
        console.log('Agregaste ' + {counter} + 'productos')
    }


    return (
        <>
            <h4>{greeting}</h4>
            <ItemCount stock={5} initial={1} onAdd={onAdd}  />
            
            <ItemList  productos = {ropa} />
    
       
        </>
    );
}
export default ItemListContainer;