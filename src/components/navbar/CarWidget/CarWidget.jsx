import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../../context/CarritoContext';

const CarWidget = () => {
    const{getItemQuantity} = useCarritoContext()
    return (

        <>
            <Link className='nav-link' to={'/cart'}>
                <button className='btn btn-dark'><ion-icon name="cart-outline"></ion-icon></button>
                {getItemQuantity() > 0 && <span className='canCarrito'>{getItemQuantity()}</span>}
            </Link>
        </>
    );
}

export default CarWidget;
