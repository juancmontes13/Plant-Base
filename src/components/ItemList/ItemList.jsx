import React from 'react';
import Item  from '../Item/Item'
import ItemCart from '../ItemCart/ItemCart';

const ItemList = ({products, plantilla}) => {
    return (
        <>
        { 
          plantilla === 'Item' 
          ? 
          products.map(producto => <Item item={producto} key={producto.id}/>) 
          :
          products.map(producto => <ItemCart item={producto} key={producto.id}/>) 

        }     
        </>
    )
}

export default ItemList;
