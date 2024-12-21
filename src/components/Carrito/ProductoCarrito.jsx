import React from 'react'
import Popover from 'react-bootstrap/Popover';
import BotonEliminar from './BotonEliminar';

const ProductoCarrito = ({producto, index}) => {
    return (
        <Popover.Body style={{ 'minWidth' : '280px'}}>
            <strong>{producto.cantidad}x </strong>
            <strong>{producto.nombre}</strong>
            <BotonEliminar index={index}></BotonEliminar>
            <a style={{ float: 'right', 'margin' : 'auto' }}>${producto.precio*producto.cantidad}</a>
        </Popover.Body>
    )
}

export default ProductoCarrito