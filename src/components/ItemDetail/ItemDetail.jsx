import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(item, cantidad)
       
    }
    return (
        <div className='col.md-4'>
             <div className='row g-0'>
                <img className='img-fluid rounded-start' src={item.Imagen} alt={"productos"} />            
            </div>
            <div className='col-med-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.Nombre}</h5>
                    <p className='card-text'>{item.Descripcion}</p>
                    <p className='card-text'>{item.Categoria}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.Precio) }</p>
                    <p className='card-text'>Stock: {item.Stock}</p>
                    <ItemCount valInicial={1} stock={item.Stock} onAdd={onAdd}/>
                    <Link className='nav-link' to={'/cart'}><button className='btn btn-secondary'>Finalizar Compra</button></Link>
                </div>
            
            </div>
        </div>
    );
}

export default ItemDetail;
