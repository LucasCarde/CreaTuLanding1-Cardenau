/* eslint-disable react/prop-types */
import 'react'
import Button from '../Button/Button';

const ItemListContainer = ({mensaje, agregarAlCarrito, eliminarDelCarrito}) => {
    return (
    <>
        <h3>{mensaje}</h3>
        <Button mensaje='Agregar al carrito' fn={agregarAlCarrito}></Button>
        <Button mensaje='Eliminar del carrito' fn={eliminarDelCarrito}></Button>
    </>
    )
}

export default ItemListContainer;