import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

//FireBase
import { getProductos } from '../../firebase/firebase';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    const {darkMode} = useDarkModeContext()
    console.log(darkMode);
    useEffect(() => {
        if (idCategoria){
            getProductos()
            .then(items => {
                const products =  items.filter(prod => prod.Stock > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = <ItemList products={products} plantilla={'Item'}/> //Array de productos en jsx
                console.log(productsList)
                setProductos(productsList)
          })
        } else {
        getProductos()
        .then(items => {
            const products = items.filter(prod => prod.Stock >0)
            const productsList = <ItemList products={products} plantilla={'Item'}/> //Array de productos en JSX
            setProductos(productsList)
        })}
        

    }, [idCategoria])
    return (        
            <div className='d-flex align-content-start flex-wrap carProductos'>
            {productos}
            </div>    
    )
};


export default ItemListContainer;
