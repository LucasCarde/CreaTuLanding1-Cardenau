import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/Navbar'
import './App.css'



function App() {
  
  const [carrito, setCarrito] = useState(0);
  const [itemsCarrito, setItemsCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito(carrito+1)
    itemsCarrito.push(producto)
    setItemsCarrito(itemsCarrito)
    console.log(itemsCarrito)
  }
  
  const eliminarDelCarrito = () =>{
    carrito!=0?setCarrito(carrito-1):carrito;
    console.log(carrito)
  }
    
    return (
        <> 
          <NavBar carrito = {carrito}></NavBar>
          <ItemListContainer mensaje ='Bienvenidos!' agregarAlCarrito = {agregarAlCarrito} eliminarDelCarrito = {eliminarDelCarrito}></ItemListContainer>
        </>

    )
}

export default App
