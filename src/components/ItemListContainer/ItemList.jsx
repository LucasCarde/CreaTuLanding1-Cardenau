/* eslint-disable react/prop-types */
import 'react'
import CartaProducto from '../Card/Card';

const ItemList = ({productos}) => {
    let prods = productos.map(
        (producto, index) => <CartaProducto key={index} producto={producto}></CartaProducto>
    )
    return (<div className='divProductos'>
        {prods}
    </div>)
}

export default ItemList;
