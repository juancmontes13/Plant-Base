import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({item}) => {
    return (
        <div className='row g-0'>
             <div className='col.md-4'>
                <img className='img-fluid rounded-start' src={`../images/${item.Imagen}`}  alt={"productos"} />            
            </div>
            <div className='col-med-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.Nombre}</h5>
                    <p className='card-text'>{item.Descripcion}</p>
                    <p className='card-text'>{item.Categoria}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.Precio) }</p>
                    <p className='card-text'>Stock: {item.Stock}</p>
                    <ItemCount valInicial={1} stock={item.Stock}/>
                    <button className='btn btn-secondary'>Finalizar Compra</button>
                </div>
            
            </div>
        </div>
    );
}

export default ItemDetail;
