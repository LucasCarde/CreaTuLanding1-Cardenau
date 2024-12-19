import { createContext, useState } from 'react';

export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [Carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito([...Carrito, producto])
  }
  
  // const eliminarDelCarrito = (index) =>{
  // }

  return (
    <CartContext.Provider value={[Carrito, agregarAlCarrito]}>
      {children}
    </CartContext.Provider>
  );
}
