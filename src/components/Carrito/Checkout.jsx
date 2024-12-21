import {useState, useEffect, useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import Button from '../Button/Button';
import {CartContext} from '../../context/CartContext';
import {sendOrder} from '../../firebase/firebase';



const CheckOut = () => {
    const {id} = useParams()
    const [ ,  ,  ,  ,  ,  ,  ,  ,  , , getCartProduct] = useContext(CartContext)
    const [product, setProduct] = useState(null)
    const [orderId, setOrderId] = useState(null);
    const [emailForm, setEmail] = useState("");
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [telefono, setTelefono] = useState("");
    
    useEffect(() => {
         setProduct(getCartProduct(id))
    }, [id])

    const handleClick = () => {
        const newOrder = {
          comprador: {
            email: emailForm,
            nombre: nombreCompleto,
            telefono: telefono,
          },
          fecha: new Date(),
          productos: [
            {
              id: id,
              categoria: product.categoria,
              nombre: product.nombre,
              precioUnitario: product.precio,
              cantidad: product.cantidad,
            }
          ],
          total: product.precio*product.cantidad,
        };
        console.log(newOrder);
        sendOrder(newOrder).then((id) => setOrderId(id));

      };

    return (
        <div className='productDetail'>
        {orderId ? (<>
            <p>Su venta fue realizada con exito!</p>
            <p>El id de su compra es {orderId}</p>
            <Link to='/' className='links' style={{'textDecoration': 'none', color: 'inherit'}}><Button
                    variant="primary"
                    mensaje='Seguir Comprando'
                    className='detailButton'/></Link>
        </>): 
        <>{product ? (
            <>
                <img src={product.img} className='imgDetail'></img>
                <h1 className='productTitle'>Comprar {product.cantidad} {product.nombre}</h1>
                <p>Precio total ${product.precio*product.cantidad}</p>
                <input type="email" placeholder='Email' name="email" id="emailForm" value={emailForm} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder='Nombre' name="nombreCompleto" id="nombreCompleto" value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)}/>
                <input type="text" placeholder='Telefono' name="telefono" id="telefonoForm" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                <Button variant="primary" mensaje='Comprar' fn={handleClick} className='detailButton'/>
            </>): 
        (<p>Cargando...</p>)}</>}
        </div>
    )
}

export default CheckOut