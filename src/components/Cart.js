import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { increment, serverTimestamp, updateDoc, doc, collection, setDoc  } from 'firebase/firestore';
import { async } from '@firebase/util';
import db from '../utils/firebaseConfig';



const Cart = () => {
   
    const [{ items, removeItem, clearItems, totalPrenda, subTotalProductos, impuestos, costoEnvio, totalCompra }] = useContext(CartContext);
    console.log('Item en cart', items);
   
    const sendOrder = () => { //F para enviar orden a Firestore
        const sendItemDb = items.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price,
            counter: item.counter 
        }));

        items.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.counter)
            });
        });

        let order = { //Creamos la orden con los campos que necesitamos
            buyer: {
                name: 'Bernardo Sanchez',
                email: 'bernasanchez@gmail.com',
                phone: '3513077123',
            },
            date: serverTimestamp(), //Mostrar date con funcion de Firebase
            items: sendItemDb,
            total: totalCompra()
        }
        console.log(order); //Mostramos orden creada por consola

        const createOrderFirestore = async () => { //Creamos la nueva coleccion que almacena las ordenes enviadas
            const newOrderRef = doc(collection(db, "orders")); //La coleccion se llama "orders"
            await setDoc(newOrderRef, order); //Aqui agregamos la orden (order) creada anteriormente
            return newOrderRef;
        }

        createOrderFirestore()
            .then(result => alert('Tu orden esta creada!' + ' ' + 'Tu N° de seguimiento es:' + ' ' + ' ' + result.id ))
            .catch(err => console.log(err))

    
        clearItems(); //Enviada la orden, eliminamos todos los items del carrito

    }
    
 
    return(
        <>
        
        <div className="container mt-2" >
            <div className='titulosPaginas mb-3'>
                <h2>Mi Carrito</h2>
            </div>
            {
                items.length > 0 ?
                <div className='subtitleCarrito mb-2'>
                    <Link to='/' style={{color: 'black'}}> Seguir Comprando </Link>
                    <span style={{marginLeft: '800px'}}>
                    <button className="btn btn-dark btn-sm "  onClick={() => clearItems()}>
                    { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
                    Vaciar Carrito
                    </button> 
                    </span>
                </div>
                :
                <div className="alert alert-danger" role="alert">
                   Tu carrito está vacío... <Link to='/' style={{textDecoration: 'none', color: 'black', paddingLeft:'700px'}}> Volver a Home </Link>
                </div>
            }
            
        </div>
       
        <div className="row">
        {
            items.length > 0 &&
            items.map((item) => (
                <div className="container mt-5" >
                    <div className="row" >
                        <div className="col-sm-8">
                            <div key={item.id} className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.picture} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title h1">{item.name}</h5>
                                        <br></br>
                                        <p className="card-text h4 "> Precio $ {item.price}</p>
                                        <p className="card-text h4">Cantidad: {item.counter}</p>
                                        <p className="card-text h4">Total Producto/s $ {totalPrenda(item.id)} </p>
                                        <br></br>
                                        {/* <p className="card-text h4">Total: {items.totalPrenda(item.id)} </p> */}
                                        <br></br>
                                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                            { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
                                            Eliminar Producto 
                                        </button>  
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            ))   
        }

        {
            items.length > 0 &&
             <div className="col-sm-4" style={{position: 'relative'}}>
                <div className="row" >
                         <div className="col-12 mb-2 h5" >
                         Subtotal $ {subTotalProductos()}
                         </div>
                         <br></br>
                         <div className="col-12 mb-2 h5" >
                         Impuestos (IVA 21%)  $ {impuestos()}
                         </div>
                         <br></br>
                         <div className="col-12 mb-2 h5" >
                         Costo de Envío $ {costoEnvio()}
                         </div>
                         <br></br>
                         <div className="col-12 mb-2 h4" >
                         TOTAL  $ {totalCompra()}
                         </div>
                         <br></br>
                         <button className="btn btn-success btn-sm mb-2" onClick={sendOrder}>
                             { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
                             Finalizar Compra
                         </button> 
                </div>
            </div>
        }
               

           

        </div>
        </>

    );
}
export default Cart; 