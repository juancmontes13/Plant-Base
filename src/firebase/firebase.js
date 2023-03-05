import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ06Fpmq0YFHdj3aGXd1nVvhsC6O_Wwmk",
  authDomain: "plant-base-2022.firebaseapp.com",
  projectId: "plant-base-2022",
  storageBucket: "plant-base-2022.appspot.com",
  messagingSenderId: "1003414777103",
  appId: "1:1003414777103:web:f8396ca3ea3ca0a511a27a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore() //consultar la base de datos



/*CRUD productos
  Create
  Read
  Update
  Delete
*/

export const cargarBDD = async () => {
     const promise = await fetch('./json/productos.json')
     const productos = await promise.json()
     productos.forEach( async (prod) => {
      await addDoc(collection(db,"productos"), {
        Nombre: prod.Nombre,
        idCategoria: prod.idCategoria,
        Categoria: prod.Categoria,
        Precio: prod.Precio,
        Imagen: prod.Imagen,
        Stock:prod.Stock,
        Descripcion: prod.Descripcion
      })

     })
}

export const getProductos = async () => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod => {
    return{...prod.data(), id: prod.id}
  })
   return items   
}

export const getProducto = async (id) => {
   const producto = await getDoc(doc(db, "productos", id))
    console.log(producto.data())
   const item = {...producto.data(), id: producto.id}
 
   return item
  }

export const updateProducto = async (id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
  await deleteDoc(doc(db, "productos", id))
}

// crear orde de compra

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    datosCliente: cliente,
    productosComprados: productos,
    precioTotal: precioTotal,
    fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))  
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  return oCompra
 }
