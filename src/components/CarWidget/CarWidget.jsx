import React from 'react';

const CarWidget = ({canCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'>Carrito</button>
            <p>{canCarrito}</p>
        </>
    );
}

export default CarWidget;
