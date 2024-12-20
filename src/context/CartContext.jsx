import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cantidad, setCantidad] = useState(1)
  const [mostrarContador, setMostrarContador] = useState(true)
  const [total, setTotal] = useState(0)
  const cartLength = cart.length

  useEffect(() => {
        let totalAct = 0
        cart.map(producto => totalAct+=producto.precio)
        setTotal(totalAct)
      }, [cart, total]);
  
  
  const agregarAlCarrito = (producto, cantidad) => {
    setCart((cart) => [
      ...cart,
      ...Array(cantidad).fill(producto)
    ]);
    setCantidad(1)
    setMostrarContador(false)
  };
  
  const eliminarDelCarrito = (indice) =>{
    setCart(cart.filter((producto, index) => index !== indice ))
  }

  const aumentar = (cantidad) =>{
    setCantidad(cantidad+1)
  }
  const disminuir = (cantidad) =>{
    cantidad>1 && setCantidad(cantidad-1);
  }

  return (
    <CartContext.Provider value={[cart, cartLength, agregarAlCarrito, eliminarDelCarrito, aumentar, disminuir, cantidad, mostrarContador,setMostrarContador,total]}>
      {children}
    </CartContext.Provider>
  );
}
