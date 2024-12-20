import 'react'
import './button.css'
import {CartContext} from '../../context/CartContext';
import {useContext} from 'react';

const Contador = () => {
  const [ ,  ,  ,  , aumentar, disminuir, cantidad] = useContext(CartContext)

  const clickAumentar = () => {
    aumentar(cantidad)
  }
  const clickDisminuir = () => {
    disminuir(cantidad)
  }
  return (
      <div>
          <button className='botonContador' onClick={clickDisminuir}>-</button>
          <span>{cantidad}</span>
          <button className='botonContador' onClick={clickAumentar}>+</button>
      </div>
  )
}

export default Contador