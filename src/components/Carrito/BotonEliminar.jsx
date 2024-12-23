import { useContext } from 'react'
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const BotonEliminar = ({id}) => {
  const [ ,  ,  , eliminarDelCarrito] = useContext(CartContext)
    const handleClick = () => {
      eliminarDelCarrito(id)
    }

  return (
    <a style={{float: 'right', 'marginLeft' : '15px'}} onClick={handleClick}><FaTrash /></a>
  )
}

export default BotonEliminar