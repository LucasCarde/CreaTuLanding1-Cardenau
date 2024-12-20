import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Button from '../Button/Button';
import Contador from '../Button/Contador';
import './productDetail.css'
import {CartContext} from '../../context/CartContext';
import {getSingleProduct} from '../../firebase/firebase';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    const [cart, cartLength, agregarAlCarrito, eliminarDelCarrito, aumentar, disminuir, cantidad, mostrarContador, setMostrarContador] = useContext(CartContext)

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
        {product && (
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
                    prod={product}
                    className='detailButton'></Button>
            </>
        )}
        </div>
    )
}

export default ProductDetail