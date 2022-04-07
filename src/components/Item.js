import React from "react";


const Item = ({ id, title, description, price, picture }) =>{
    // console.log(title,  'Productos estan en Item') 
    return (
        <>
            <div className="col-xl-3" >
                <div key={id} className="card text-center ">
                <div className="card-body">
                <img src={picture} className="card-img-top img-thumbnail" id="imgCard"/>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> $ {price}</p>
                    <a href="#" class="btn btn-dark d-grid gap-2">Ver Detalle del Producto</a>
                </div>
                </div>
            </div>
        </>

    );
    
}

export default Item; 
