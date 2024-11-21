/* eslint-disable react/prop-types */
import 'react'
import {getProducts} from '../../Data/fakeBackend';
import {useEffect, useState} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({mensaje, agregarAlCarrito, eliminarDelCarrito}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
            .then(res => setProducts(res))
            .catch(e => console.error(e))
    }, []);
    return (
        <> 
            <ItemList productos = {products} fn={agregarAlCarrito} className='listaProductos'></ItemList>
        </>
    )
}

export default ItemListContainer;