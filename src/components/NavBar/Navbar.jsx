import 'react'
import { GiConverseShoe } from "react-icons/gi";
import Filtro from '../Filtro/Filtro';
import Carrito from '../Carrito/Carrito';
import {Link} from 'react-router-dom'

function NavBar({carrito, productosCarrito, eliminarDelCarrito, changeSexo}){
  return(
    <div id='navbar'>
      <Link to='/' className='links' style={{'text-decoration': 'none', color: 'inherit'}}>
        <GiConverseShoe className='logoZapas' onClick={()=>changeSexo('')}/>
        <h1 className='nombreTienda' onClick={()=>changeSexo('')}>SneakerPoint</h1>
      </Link>
      <Link to='categoria/hombre' className='links' style={{'text-decoration': 'none', color: 'inherit'}}>
        <a onClick={()=>changeSexo('hombre')}><Filtro mensaje ='Hombre'/></a>
      </Link>
      <Link to='categoria/mujer' className='links' style={{'text-decoration': 'none', color: 'inherit'}}>
        <a onClick={()=>changeSexo('mujer')}><Filtro mensaje ='Mujer'/></a>
      </Link>
      <Link to='categoria/unisex' className='links' style={{'text-decoration': 'none', color: 'inherit'}}>
        <a onClick={()=>changeSexo('unisex')}><Filtro mensaje ='Unisex'/></a>
      </Link>
        <Carrito mensaje = {carrito} productosCarrito = {productosCarrito} eliminarDelCarrito={eliminarDelCarrito}></Carrito>
    </div>
  )
}

export default NavBar
