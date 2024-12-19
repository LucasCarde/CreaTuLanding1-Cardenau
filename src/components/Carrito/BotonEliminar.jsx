import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const BotonEliminar = ({index}) => {
  const [cart, cartLength, agregarAlCarrito, eliminarDelCarrito] = useContext(CartContext)
    const handleClick = () => {
      eliminarDelCarrito(index)
    }

  return (
    <a style={{float: 'right', 'marginLeft' : '15px'}} onClick={handleClick}><FaTrash /></a>
  )
}

export default BotonEliminar