import React from "react";
import Item from './Item'

//Recibimos productos de ItemListContainer
const ItemList = ({ productos }) => {

    // console.log(productos, 'Productos llegaron a ItemList')
    return (
     <>
        
        <div className="row">
                { productos.map( item => 
                        (<Item  key={item.id} 
                                title={item.title} 
                                description={item.description} 
                                price={item.price} 
                                picture={item.picture} 
                                stock={item.stock} />
                        )) 
                }
        </div>
        
    
    </>

    );

}
export default ItemList;