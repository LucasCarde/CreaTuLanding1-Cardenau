/* eslint-disable react/prop-types */
import 'react'
import Button from '../Button/Button';
import {getProducts} from '../../Data/fakeBackend';
import {useEffect, useState} from 'react';

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
        <> < h3 > {
            mensaje
        }</h3> < Button mensaje = 'Agregar al carrito' fn = {
            agregarAlCarrito
        } > </Button>
    <Button mensaje='Eliminar del carrito' fn={eliminarDelCarrito}></Button>
</>
    )
}

export default ItemListContainer;