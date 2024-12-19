import 'react'
import { GiConverseShoe } from "react-icons/gi";
import Filtro from '../Filtro/Filtro';
import Carrito from '../Carrito/Carrito';
import {Link} from 'react-router-dom'

function NavBar(){

  return(
    <div id='navbar'>
      <Link to='/' className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
        <GiConverseShoe className='logoZapas'/>
        <h1 className='nombreTienda'>SneakerPoint</h1>
      </Link>
      <Link to='categoria/hombre' className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
        <Filtro mensaje ='Hombre'/>
      </Link>
      <Link to='categoria/mujer' className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
        <Filtro mensaje ='Mujer'/>
      </Link>
      <Link to='categoria/unisex' className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
        <Filtro mensaje ='Unisex'/>
      </Link>
        <Carrito></Carrito>
    </div>
  )
}

export default NavBar
