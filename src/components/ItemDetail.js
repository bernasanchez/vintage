import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
    console.log(producto, 'Este es el Detalle de Producto'); 
    //Aca se muestra el Detalle del Producto
    return ( 
        <>
        <div className="container mt-5">
            <div key={producto.id} className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={producto.picture} className="img-fluid rounded-start" alt="imagenProducto" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body"> 
                        <h5 className="card-title fs-1">{producto.title}</h5>
                        <p className="card-text fs-6 fst-italic">{producto.description}</p>
                        <p className="card-text fs-3">$ {producto.price}</p>
                        <ItemCount stock={5} initial={1}  />
                        <p className="card-text"><small className="text-muted">Stock Disponible {producto.stock}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
export default ItemDetail;