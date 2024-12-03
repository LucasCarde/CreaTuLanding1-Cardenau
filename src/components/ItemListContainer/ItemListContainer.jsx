import 'react'
import {getProducts, getProductsBySex} from '../../Data/fakeBackend';
import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({agregarAlCarrito}) => {
    const [products, setProducts] = useState([]);
    const {sexo} = useParams()
    useEffect(() => {
            if(sexo != undefined){
                getProductsBySex(sexo)
                .then(res => {
                    console.log(res)                    
                    setProducts(res)
                })
                .catch(e => console.error(e))
            } else {
                getProducts()
                    .then(res => setProducts(res))
                    .catch(e => console.error(e))
            }
    }, [sexo]);
    return (<> < ItemList productos = {
        products
    }
    fn = {
        agregarAlCarrito
    }
    className = 'listaProductos' > </ItemList>
</>)
}

export default ItemListContainer;