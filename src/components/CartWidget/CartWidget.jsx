/* eslint-disable react/prop-types */
import 'react'
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = ({mensaje}) => {
  return (
    <p className='carrito'><FaShoppingCart className='logoCarrito'></FaShoppingCart>{mensaje}</p>
  )
}

export default CartWidget