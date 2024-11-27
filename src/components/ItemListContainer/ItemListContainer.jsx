import 'react'
import {getProducts, getProductsBySex} from '../../Data/fakeBackend';
import {useEffect, useState} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({agregarAlCarrito, eliminarDelCarrito, sexo}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (sexo) {
            getProductsBySex(sexo)
                .then(res => setProducts(res))
                .catch(e => console.error(e))
            } else {
            getProducts()
                .then(res => setProducts(res))
                .catch(e => console.error(e))
            }
    }, [sexo]);
    return (<> < ItemList productos = {
        products
    }
    fn = {
        agregarAlCarrito
    }
    className = 'listaProductos' > </ItemList>
</>)
}

export default ItemListContainer;