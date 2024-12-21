import React from 'react'
import Popover from 'react-bootstrap/Popover';
import BotonEliminar from './BotonEliminar';
import {Link} from 'react-router-dom';


const ProductoCarrito = ({producto, index}) => {
    return (
        <Popover.Body style={{ 'minWidth' : '280px'}}>
            <Link to={`/carrito/${producto.id}`} className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
                <strong>{producto.cantidad}x </strong>
                <strong>{producto.nombre}</strong>
            </Link>
            <BotonEliminar index={index}></BotonEliminar>
            <Link to={`/carrito/${producto.id}`} className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
                <p style={{ float: 'right', 'margin' : 'auto' }}>${producto.precio*producto.cantidad}</p>
            </Link>
        </Popover.Body>
    )
}

export default ProductoCarrito