import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';

const Item = ({item}) => {
   const {darkMode} = useDarkModeContext()
    return (
        <div>
            <div className= {`card mb-3 cardProducto ${darkMode ? 'text-white bg-secondary': 'border-light'}`} >
              <img src={item.Imagen} className="card-img-top" alt={"producto"} />
              <div className="card-body cardBody">
              <h5 className="card-title">{item.Nombre}</h5>
              <p className="card-text">
                 {item.Categoria}
              </p>
              <p className="card-text">
                 $ {new Intl.NumberFormat('de-DE').format(item.Precio)}
              </p>
              <button className='btn btn-dark'><Link className='nav-link' to={`/item/${item.id}`}>Ver Producto</Link></button>
              </div>
           </div>
        </div>
    );
}

export default Item;
