import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../Data/fakeBackend';
import Button from '../Button/Button';
import './productDetail.css'

const ProductDetail = ({agregarAlCarrito}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(()=> {
        setProduct(getProductById(id))
    },[])

  return (
    <div className='productDetail'>
      <img src={product.img} className='imgDetail'></img>
      <h1 className='productTitle'>{product.nombre}</h1>
      <p>${product.precio}</p>
      <p>{product.categoria}</p>
      <Button variant="primary" mensaje='Agregar al carrito' fn={agregarAlCarrito} prod={product} className='detailButton'></Button>
    </div>

  )
}

export default ProductDetail