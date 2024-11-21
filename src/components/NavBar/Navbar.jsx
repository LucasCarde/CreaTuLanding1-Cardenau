import 'react'
import { GiConverseShoe } from "react-icons/gi";
import Link from '../Link/Link';
import Carrito from '../Dropdown/Dropdown';

function NavBar({carrito}){
  return(
    <div id='navbar'>
      <GiConverseShoe className='logoZapas'/>
      <h1 className='nombreTienda'>SneakerPoint</h1>
      <Link mensaje ='Hombre' url=''></Link>
      <Link mensaje ='Mujer' url=''></Link>
      <Link mensaje ='Niños' url=''></Link>
      <Carrito mensaje = {carrito}></Carrito>
    </div>
  )
}

export default NavBar
