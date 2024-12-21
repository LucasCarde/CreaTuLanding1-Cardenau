import {useState, useEffect, useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import Button from '../Button/Button';
import Contador from '../Button/Contador';
import './productDetail.css'
import {CartContext} from '../../context/CartContext';
import {getSingleProduct} from '../../firebase/firebase';
import { CircularProgress } from '@mui/material';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    const [ ,  , agregarAlCarrito,  ,  ,  , cantidad, mostrarContador, setMostrarContador] = useContext(CartContext)

    const handleClick = () => {
        agregarAlCarrito(product, cantidad)
    }

    useEffect(() => {
        getSingleProduct(id).then((product) => setProduct(product))
    }, [])

    useEffect(() => {
        setMostrarContador(true)
    }, [id])

    return (
        <div className='productDetail'>
        {product ? (
            <>
                <img src={product.img} className='imgDetail'></img>
                <h1 className='productTitle'>{product.nombre}</h1>
                <p>${product.precio}</p>
                <p>{product.categoria}</p>
                {mostrarContador && (<Contador></Contador>)}
                <Button
                    variant="primary"
                    mensaje='Agregar al carrito'
                    fn={handleClick}
                    className='detailButton'></Button>
                <Link to={`/`} className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
                  <Button variant="primary" mensaje='Seguir comprando' className='detailButton'/>
                </Link>
            </>
        ): (<CircularProgress />)}
        </div>
    )
}

export default ProductDetail