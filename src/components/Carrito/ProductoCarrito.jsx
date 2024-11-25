import React from 'react'
import Popover from 'react-bootstrap/Popover';
import BotonEliminar from './BotonEliminar';

const ProductoCarrito = ({producto, index, eliminarDelCarrito}) => {
    return (
        <Popover.Body style={{
                'min-width' : '280px'
            }}>
            <strong>{producto.nombre}</strong>
            <BotonEliminar eliminarDelCarrito={eliminarDelCarrito} index={index}></BotonEliminar>
            <a
                style={{
                    float: 'right',
                    'margin' : 'auto'
                }}>${producto.precio}</a>
        </Popover.Body>
    )
}

export default ProductoCarrito