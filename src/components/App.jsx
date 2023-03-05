import './App.css'
import 'react-toastify/dist/ReactToastify.css'
//Toastify
import { ToastContainer } from 'react-toastify';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import Navbar from './navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Contacto from './Contacto/Contacto';
import Checkout from './Checkout/Checkout';
//Contexto
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';

import { updateProducto, deleteProducto } from '../firebase/firebase';


const App = () => {

  
  return (
    <>
      <BrowserRouter>
       <CarritoProvider>
        <DarkModeProvider>
         <Navbar/>
          <Routes>
           <Route path='/' element={<ItemListContainer/>}/> 
           <Route path='/item/:id' element={<ItemDetailContainer/>}/>
           <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/contacto' element={<Contacto/>}/>
           <Route path='/checkout' element={<Checkout/>}/> 
 

         </Routes>
         <ToastContainer/>
        </DarkModeProvider> 
       </CarritoProvider>            
      </BrowserRouter>
    </>
  )
}



export default App;
