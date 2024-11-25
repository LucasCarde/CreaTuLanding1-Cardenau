import React from 'react'
import { FaTrash } from "react-icons/fa";

const BotonEliminar = ({eliminarDelCarrito, index}) => {
  return (
    <a style={{float: 'right', 'margin-left' : '15px'}} onClick={()=>eliminarDelCarrito(index)}><FaTrash /></a>
  )
}

export default BotonEliminar