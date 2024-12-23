import 'react'
import {FaShoppingCart} from "react-icons/fa";

const CartWidget = ({mensaje, fn}) => {
    return (
        <p className='carrito' onClick={fn}>
            <FaShoppingCart className='logoCarrito'/>{mensaje}</p>
    )
}

export default CartWidget