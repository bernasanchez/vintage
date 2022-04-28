import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';



const ItemDetailContainer = () => {
    const [item, setItem] = useState([]) //Estado para obtener y/o modificar 1 Item
    const { id } = useParams();
    
    useEffect(() => { 
        
        const getItemFirestore = async (id) => { //F para mostrar detalle de 1 item
            const docRef = doc(db, "products", id); //Solicitamos el item de la db (products) por el id 
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) { //Si existe lo retornamos al elemento entero
                return{
                    id: id, 
                    ...docSnap.data()
                    // console.log("Document data:", docSnap.data());
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getItemFirestore(id) 
            .then(result => setItem(result)) //Tomamos el item.id y seteamos el resultado en el estado (setItem)
            .catch(err => console.log(err))
    }, [id])
    console.log('Id de product en ItemDetailContainer', id);

    return(
        <>
            <ItemDetail producto = {item}   />
        </>

    );

}
export default ItemDetailContainer;