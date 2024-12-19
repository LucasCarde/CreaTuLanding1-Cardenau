import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const cartLength = cart.length
  const agregarAlCarrito = (producto) => {
    setCart((cart) => [...cart, producto])
  }
  const eliminarDelCarrito = (indice) =>{
    setCart(cart.filter((producto, index) => index !== indice ))
  }

  return (
    <CartContext.Provider value={[cart, cartLength, agregarAlCarrito, eliminarDelCarrito]}>
      {children}
    </CartContext.Provider>
  );
}
