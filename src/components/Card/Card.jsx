import { useContext } from 'react';
import Button from '../Button/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';


function CartaProducto({producto}) {
  const [cart,cartLength, agregarAlCarrito, eliminarDelCarrito] = useContext(CartContext)
  const handleClick = () => {
    agregarAlCarrito(producto)
  }

  return (
    <Card className='cardProducto'>
      
      <Link to={`/producto/${producto.id}`} className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
      <Card.Img  id='imgProductos' variant="top" src={producto.img} style={{ height: '250px', objectFit: 'cover', borderRadius:'10px'}}/>
      </Link>
      <Card.Body>
        <Link to={`/producto/${producto.id}`} className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text className='textProductCard'>${producto.precio}</Card.Text>
        </Link>
        <Button variant="primary" mensaje='Agregar al carrito' fn={handleClick} prod={producto} className='cardButton'></Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;