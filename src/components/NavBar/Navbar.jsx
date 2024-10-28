import 'react'
import CartWidget from '../CartWidget/CartWidget'
import { GiConverseShoe } from "react-icons/gi";
import Link from '../Link/Link';

function NavBar({carrito}){
  return(
    <div id='navbar'>
      <GiConverseShoe className='logoZapas'/>
      <h1 className='nombreTienda'>SneakerPoint</h1>
      <Link mensaje ='Hombre' url=''></Link>
      <Link mensaje ='Mujer' url=''></Link>
      <Link mensaje ='Niños' url=''></Link>
      <CartWidget mensaje = {carrito}></CartWidget>
    </div>
  )
}

export default NavBar