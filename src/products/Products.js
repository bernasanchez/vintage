import React from 'react'

const Products = [
    {
      id: 1,
      title: "Remera Hombre",
      description: "Remera Nike SB Talle S",
      price: 200,
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-Fka-w6b9mr-LvQItShFewAAAA%26pid%3DApi&f=1",
      stock: 30,
    },
    {
        id: 2,
        title: "Remera Hombre",
        description: "Remera Nike Air Talle M",
        price: 500,
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jUn9Em9vpKEIUuARu7X1mQAAAA%26pid%3DApi&f=1",
        stock: 10,
    },
    {
      id: 3,
      title: "Remera Hombre",
      description: "Remera Nike DriFit Talle M",
      price: 200,
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.fenicio.app%2Fimgs%2F2d8619%2Fmenpi.uy%2Fmenpuy%2Fa1dc%2Foriginal%2Fcatalogo%2FCU5438064-0-1%2F460x460%2Fremera-nike-hombre-running-brth-rise-365-ss-ff-gx-color-unico.jpg&f=1&nofb=1",
      stock: 30,
    },
    {
        id: 4,
        title: "Remera Hombre",
        description: "Remera Nike SB Tale L",
        price: 600,
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.z67g4HO7C0oVVASvEG-sEQAAAA%26pid%3DApi&f=1",
        stock: 10,
    },
   
]

//Funcion donde: 
//1 creamos una Promise - 
//2 Resolvemos con un SetTimeout que nos devuelva el array en dos seg
export const getProducts = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(Products)
      }, 2000);
  });
} 




// const getProducts = () =>{
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(products)
//     }, 2000);
//   });
// }

// async function obtenerProducts() {
//   const datosProducts = await getProducts();
//   console.log(datosProducts);
// }

// obtenerProducts();

// getProducts()
//   .then((products) => console.log(products)); 