import Button from '../Button/Button';
import Card from 'react-bootstrap/Card';

function CartaProducto({producto, fn}) {
  return (
    <Card style={{ width: '18rem', 'padding':'30px 10px', backgroundColor:'#E5E1DA', borderRadius:'10px'}}>
      <Card.Img  id='imgProductos' variant="top" src={producto.img} style={{ height: '250px', objectFit: 'cover', borderRadius:'10px'}}/>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.categoria}</Card.Text>
        <Button variant="primary" mensaje='Agregar al carrito' fn={fn} prod={producto}></Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;