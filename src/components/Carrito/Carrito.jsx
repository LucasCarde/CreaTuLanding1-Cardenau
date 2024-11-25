import {useState, useRef} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import CartWidget from './CartWidget';
import ProductoCarrito from './ProductoCarrito';

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
                <Popover
                    id="popover-contained"
                    style={{
                        backgroundColor: 'rgb(229, 225, 218)',
                        position: 'relative',
                    }}>
                    <Popover.Header as="h3">Carrito</Popover.Header>
                    {
                        productosCarrito.map((producto, index) => (
                            <ProductoCarrito
                                eliminarDelCarrito={eliminarDelCarrito}
                                producto={producto}
                                key={index}
                                index={index}/>
                        ))
                    }
                </Popover>
            </Overlay>
        </div>
    );
}

export default Carrito;