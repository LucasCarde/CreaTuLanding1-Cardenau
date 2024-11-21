import Button from '../Button/Button';
import Card from 'react-bootstrap/Card';

function CartaProducto({nombre, img, precio, categoria, fn}) {
  return (
    <Card style={{ width: '18rem', 'padding':'30px 10px', backgroundColor:'#E5E1DA', borderRadius:'10px'}}>
      <Card.Img  id='imgProductos' variant="top" src={img} style={{ height: '250px', objectFit: 'cover', borderRadius:'10px'}}/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{categoria}</Card.Text>
        <Button variant="primary" mensaje='Agregar al carrito' fn={fn}></Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;