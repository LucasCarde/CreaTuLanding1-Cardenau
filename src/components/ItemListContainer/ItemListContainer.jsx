/* eslint-disable react/prop-types */
import 'react'
import Button from '../Button/Button';

const ItemListContainer = ({mensaje, fn}) => {
    return (
    <>
        <div>{mensaje}</div>
        <Button mensaje='Agregar al carrito' fn={fn}></Button>
    </>
    )
}

export default ItemListContainer;