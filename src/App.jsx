import {useState} from 'react'
import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/Navbar'

function App() {
  const [carrito, setCarrito] = useState(0);
  const agregarAlCarrito = () =>{
    setCarrito(carrito+1)
    console.log(carrito)
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
