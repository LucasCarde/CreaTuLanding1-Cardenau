import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {getProductById} from '../../Data/fakeBackend';
import Button from '../Button/Button';
import './productDetail.css'
import {CartContext} from '../../context/CartContext';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [cart, cartLength, agregarAlCarrito, eliminarDelCarrito] = useContext(
        CartContext
    )

    const handleClick = () => {
        agregarAlCarrito(product)
    }

    useEffect(() => {
        setProduct(getProductById(id))
    }, [])

    return (
        <div className='productDetail'>
            <img src={product.img} className='imgDetail'></img>
            <h1 className='productTitle'>{product.nombre}</h1>
            <p>${product.precio}</p>
            <p>{product.categoria}</p>
            <Button
                variant="primary"
                mensaje='Agregar al carrito'
                fn={handleClick}
                prod={product}
                className='detailButton'></Button>
        </div>

    )
}

export default ProductDetail