/* eslint-disable react/prop-types */
import 'react'
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = ({mensaje, fn}) => {
  return (
    <p className='carrito' onClick={fn}><FaShoppingCart className='logoCarrito'></FaShoppingCart>{mensaje}</p>
  )
}

export default CartWidget