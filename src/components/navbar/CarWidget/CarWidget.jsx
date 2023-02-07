import React from 'react';

const CarWidget = ({canCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'><ion-icon name="cart-outline"></ion-icon></button>
            <p>{canCarrito}</p>
        </>
    );
}

export default CarWidget;
