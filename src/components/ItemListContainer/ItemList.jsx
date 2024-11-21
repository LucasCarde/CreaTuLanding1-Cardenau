/* eslint-disable react/prop-types */
import 'react'
import CartaProducto from '../Card/Card';

const ItemList = ({productos, fn}) => {
   let prods = productos.map((producto, index) => 
        <CartaProducto key={index} producto={producto} fn={fn}></CartaProducto> 
    )
    return (
        <div className='divProductos' >
            {prods}
        </div>
    )    
}

export default ItemList;
