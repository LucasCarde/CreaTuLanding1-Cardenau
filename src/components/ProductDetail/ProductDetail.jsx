import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../Data/fakeBackend';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(()=> {
        setProduct(getProductById(id))
    },[])

  return (
    <>
    <img src={product.img} className='imgDetail'></img>
    <h1>{product.nombre}</h1>
    <p>{product.precio}</p>
    <p>{product.categoria}</p>
    <p>{product.sexo}</p>
    </>

  )
}

export default ProductDetail