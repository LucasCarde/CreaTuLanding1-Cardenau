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
            . finally(console.log('se resolvio la promesa'))
    }, []);
    console.log(products)
    return (
        <> 
            <ItemList productos = {products} fn={agregarAlCarrito}></ItemList>
        </>
    )
}

export default ItemListContainer;