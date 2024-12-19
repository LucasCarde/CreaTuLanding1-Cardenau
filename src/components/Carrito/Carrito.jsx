import {useState, useRef, useContext} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import CartWidget from './CartWidget';
import ProductoCarrito from './ProductoCarrito';
import { CartContext } from '../../context/CartContext';

function Carrito() {
    const [cart, cartLength, agregarAlCarrito, eliminarDelCarrito] = useContext(CartContext)
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={ref}>
            <CartWidget mensaje={cart.length} fn={handleClick}></CartWidget>
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
                        position: 'relative'
                    }}>
                    <Popover.Header as="h3">Carrito</Popover.Header>
                    {
                        cartLength < 1
                            ?   <Popover.Body style={{ 'minWidth' : '280px' }}>
                                    <strong>No tienes productos en el carrito</strong>
                                </Popover.Body>
                            : cart.map((producto, index) => (
                                <ProductoCarrito
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