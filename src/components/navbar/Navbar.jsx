import React from 'react';
import CarWidget from './CarWidget/CarWidget';
import Categorias from './Categorias/Categorias';
import Sections from './Sections/Sections';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';

const NavBar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
             <a href="/">Plant Base</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <Sections/>
                 <Categorias/>                             
                </ul>               
              </div>
              <CarWidget/>
              <BotonDarkMode/>
            </div>
          </nav>
        </div>
    );
}

export default NavBar;
