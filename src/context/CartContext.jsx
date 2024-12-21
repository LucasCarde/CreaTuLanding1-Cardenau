import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cantidad, setCantidad] = useState(1)
  const [mostrarContador, setMostrarContador] = useState(true)
  const [total, setTotal] = useState(0)
  const [cartLength, setCartLength] = useState(0)

  useEffect(() => {
        let totalAct = 0
        let largoAct = 0
        cart.map(producto => totalAct+=(producto.precio*producto.cantidad))
        setTotal(totalAct)
        cart.map(producto => largoAct+=(producto.cantidad))
        setCartLength(largoAct)
      }, [cart, total]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    const productoExistente = cart.find(item => item.id === producto.id);
    let verificaStock = (productoExistente && productoExistente.cantidad)? (productoExistente.cantidad + cantidad)>5 : cantidad>5;
    verificaStock? alert('No hay stock suficiente, solo puedes comprar 5 unidades de este producto.'):
    (setCart((cart) => {
      const productoExistente = cart.find(item => item.id === producto.id);
      if (productoExistente) {
        return cart.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad? item.cantidad + cantidad: cantidad }
            : item
        );
      } else {
        return [...cart, { ...producto, cantidad }];
      }
    }));
    setCantidad(1);
    setMostrarContador(false);
  };
  
  const getCartProduct = (id) => {
    const productoExistente = cart.find(item => item.id === id);
    return productoExistente
  }

  const eliminarDelCarrito = (id) =>{
    setCart(cart.filter((producto, index) => producto.id !== id ))
  }

  const aumentar = (cantidad) =>{
    setCantidad(cantidad+1)
  }
  const disminuir = (cantidad) =>{
    cantidad>1 && setCantidad(cantidad-1);
  }

  return (
    <CartContext.Provider value={[cart, cartLength, agregarAlCarrito, eliminarDelCarrito, aumentar, disminuir, cantidad, mostrarContador,setMostrarContador,total, getCartProduct]}>
      {children}
    </CartContext.Provider>
  );
}
