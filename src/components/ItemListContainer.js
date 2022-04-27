import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
// import { getProducts } from '../products/Products' //Importamos datos del array Products en esta F
import { useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where} from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { async } from "@firebase/util";
import {  } from "firebase/firestore";



const ItemListContainer = ({ }) => {
    const [ropa, setRopa] = useState([]);
    const { categoryName } = useParams();
 
    useEffect(() => {
        let q;
        const getDataFirestore = async (categoryName) => {

            if(categoryName) {
                q = query(collection(db, "products"), where("categoryName", "==", categoryName));
                console.log('Existe la categoria', categoryName);
            } else {
                q = query(collection(db, "products"), orderBy ("categoryName"));
            }
            const querySnapshot = await getDocs(q);
            const dataFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
                // console.log(`${doc.id} => ${doc.data()}`);
            }));
            return dataFirestore;
        }
        getDataFirestore(categoryName)
            .then(result => setRopa(result))
            .catch(err => console.log(err))
        
    }, [categoryName]); //Lo ponemos entre [] para que vuelva a renderizar el array al momento de filtrar la categoria
   
    return (
        <>
            
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}  /> */}
            <div className="container mt-2" >
                <div className='titulosPaginas mb-3'>
                <h2>Productos Disponibles</h2>
                </div>
            </div>

            <ItemList  productos = {ropa} />
        </>
    );
}
export default ItemListContainer;


   // console.log(ropa, 'Soy el array de Products');
    // console.log(categoryName); //Me muestra categoryName seleccionada en URL
    // const onAdd = () => {
    //     console.log('Agregaste ' + {counter} + 'productos')
    // }
