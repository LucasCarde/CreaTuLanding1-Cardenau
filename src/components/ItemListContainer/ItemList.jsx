/* eslint-disable react/prop-types */
import 'react'
import CartaProducto from '../Card/Card';

const ItemList = ({productos, fn}) => {
   let prods = productos.map(producto => 
        <CartaProducto nombre={producto.nombre} img={producto.img} precio={producto.precio} categoria={producto.categoria} fn={fn}></CartaProducto> 
    )
    return (
        <div className='divProductos'>
            {prods}
        </div>
    )    
}

export default ItemList;
