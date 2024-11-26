import Button from '../Button/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function CartaProducto({producto, fn}) {
  return (
    <Card style={{ width: '18rem', 'padding':'30px 10px', backgroundColor:'#E5E1DA', borderRadius:'10px'}}>
      <Link to='/carrito' className='links' style={{'text-decoration': 'none', color: 'inherit'}}>
      <Card.Img  id='imgProductos' variant="top" src={producto.img} style={{ height: '250px', objectFit: 'cover', borderRadius:'10px'}}/>
      </Link>
      <Card.Body>
        <Link to='/carrito' className='links' style={{'text-decoration': 'none', color: 'inherit'}}>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text className='textProductCard'>{producto.categoria}</Card.Text>
        </Link>
        <Button variant="primary" mensaje='Agregar al carrito' fn={fn} prod={producto}></Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;