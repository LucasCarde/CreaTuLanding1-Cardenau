import 'react'

function NavBar({carrito}){
  return(
    <div className='navbar'>
      <h1 id='nombreTienda'>Este es mi NavBar</h1>
      <p id='logoCarrito'>🛒{carrito}</p>
    </div>
  )
}

export default NavBar