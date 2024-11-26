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
    // id: 1,
    //     nombre: 'Dunk Low Retro',
    //     precio: 239.999,
    //     categoria: 'Zapatillas de Moda para Hombre',
    //     sexo: 'hombre',
    //     img: 'https://nikearprod.vtexassets.com/arquivos/ids/1054908-1200-1200?width=1200&he' +
    //             'ight=1200&aspect=true'
    <>
    <h1>{product.nombre}</h1>
    <p>{product.precio}</p>
    <p>{product.categoria}</p>
    <p>{product.sexo}</p>
    </>

  )
}

export default ProductDetail