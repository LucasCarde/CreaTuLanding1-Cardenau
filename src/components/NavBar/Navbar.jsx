import 'react'
import { GiConverseShoe } from "react-icons/gi";
import Link from '../Link/Link';
import Carrito from '../Carrito/Carrito';

function NavBar({carrito, productosCarrito, eliminarDelCarrito, changeSexo}){
  return(
    <div id='navbar'>
      <GiConverseShoe className='logoZapas' onClick={()=>changeSexo('')}/>
      <h1 className='nombreTienda' onClick={()=>changeSexo('')}>SneakerPoint</h1>
      <a onClick={()=>changeSexo('hombre')}><Link mensaje ='Hombre'/></a>
      <a onClick={()=>changeSexo('mujer')}><Link mensaje ='Mujer'/></a>
      <a onClick={()=>changeSexo('unisex')}><Link mensaje ='Unisex'/></a>
      <Carrito mensaje = {carrito} productosCarrito = {productosCarrito} eliminarDelCarrito={eliminarDelCarrito}></Carrito>
    </div>
  )
}

export default NavBar
