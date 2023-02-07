import React from 'react';
import { Link } from 'react-router-dom';

const Sections = () => {
    return (
        <>
             <li className="nav-item">
                <Link className="nav-link" to={"/"} ><button className='btn btn-dark'>Inicio</button></Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}><button className='btn btn-dark'>Contacto</button></Link>
             </li>
        </>
    );
}

export default Sections;
