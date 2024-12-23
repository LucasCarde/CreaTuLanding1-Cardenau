import 'react'
import {useContext} from 'react';
import ItemList from './ItemList';
import {ProductsContext} from '../../context/ProductsContext';
import { CircularProgress } from '@mui/material';

const ItemListContainer = () => {
    const [products,  , loading] = useContext(ProductsContext);

    return (<> 
    {   
        loading? (<CircularProgress />):(
        < ItemList productos = { products } className = 'listaProductos' /> 
            )
    } 
    </>)
}

export default ItemListContainer;