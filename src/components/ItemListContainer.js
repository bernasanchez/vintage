import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
// import { getProducts } from '../products/Products' //Importamos datos del array Products en esta F
import { useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where} from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { async } from "@firebase/util";




const ItemListContainer = ({ }) => {
    const [ropa, setRopa] = useState([]);
    const { categoryName } = useParams();
 
    useEffect(() => {
        let q; //Creamos 1 variable nueva para las categorias

        const getDataFirestore = async (categoryName) => { //F para obtener las categorias

            if(categoryName) { 
                q = query(collection(db, "products"), where("categoryName", "==", categoryName)); //Si existe categoryName lo buscamos en db(products) y comparamos categName == categoryName
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
            <div className="container mt-2" >
                <div className='titulosPaginas mb-3'>
                <h3>Productos Disponibles</h3>
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
