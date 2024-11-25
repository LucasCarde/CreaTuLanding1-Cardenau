import {useState, useRef} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import CartWidget from '../CartWidget/CartWidget';
import BotonEliminar from './BotonEliminar';

function Carrito({mensaje, productosCarrito, eliminarDelCarrito}) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={ref}>
            <CartWidget mensaje={mensaje} fn={handleClick}></CartWidget>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}>
                <Popover id="popover-contained"
                    style={{
                        backgroundColor: 'rgb(229, 225, 218)',
                        position: 'relative',
                        'z-index' : '10000'
                    }}>
                    <Popover.Header as="h3">Carrito</Popover.Header>
                    {
                        productosCarrito.map((producto, index) => (
                            <Popover.Body key={index} style={{'min-width': '280px'}}>
                                <strong>{producto.nombre}</strong>
                                <BotonEliminar eliminarDelCarrito={eliminarDelCarrito} index={index}></BotonEliminar>
                                <a style={{float: 'right', 'margin' : 'auto'}}>${producto.precio}</a>  
                            </Popover.Body>
                        ))
                    }
                </Popover>
            </Overlay>
        </div>
    );
}

export default Carrito;