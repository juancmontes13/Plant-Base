import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';

const Cart = () => {

        const {carrito, totalPrice, emptyCart} = useCarritoContext()
        return (
            <>
            {carrito.length === 0 
               ? // Si carrito esta vacio
               <>
                 <h2>Tu carrito está vacío</h2>
                 <Link className='nav-link' to={'/'} ><button className='btn btn-dark'> Continuar comprando</button></Link>
               </>
               : // Si carrito tiene productos
               <>
                <div className='container carContainer'>
                    {
                        <ItemList products={carrito} plantilla={'itemCart'}/>
                    }
                    <div className="divButtons">
                        <p>Resumen de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>

                </div>
               </>
            }
            </>
        )
    
}


export default Cart;
