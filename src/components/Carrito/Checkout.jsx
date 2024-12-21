import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Button from '../Button/Button';
import Contador from '../Button/Contador';
import {CartContext} from '../../context/CartContext';
import {sendOrder} from '../../firebase/firebase';


const CheckOut = () => {
    const {id} = useParams()
    const [ ,  ,  ,  ,  ,  ,  , mostrarContador,  , , getCartProduct] = useContext(CartContext)
    const [product, setProduct] = useState(null)
    useEffect(() => {
         setProduct(getCartProduct(id))
    }, [id])

    const handleClick = () => {
        console.log('hola');    
    }

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
                    prod={product}
                    className='detailButton'></Button>
            </>
        ): (<p>Cargando...</p>)}
        </div>
    )
}

export default CheckOut