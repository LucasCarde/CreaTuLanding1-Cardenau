import 'react'
// import {getProducts, getProductsBySex} from '../../Data/fakeBackend'; import
// { useParams } from 'react-router-dom';
import {useEffect, useState, useContext} from 'react';
import ItemList from './ItemList';
import {ProductsContext} from '../../context/ProductsContext';

const ItemListContainer = () => {
    const [products, setProducts, loading, sexo] = useContext(ProductsContext);

    return (<> 
    {   
        loading? (<p>Cargando...</p>):(
        < ItemList productos = { products } className = 'listaProductos' /> 
            )
    } 
    </>)
}

export default ItemListContainer;