import React from 'react';

const Sections = () => {
    return (
        <>
             <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><button className='btn btn-dark'>Inicio</button></a>
             </li>
             <li className="nav-item">
                <a className="nav-link" href="#"><button className='btn btn-dark'>Contacto</button></a>
             </li>
        </>
    );
}

export default Sections;
