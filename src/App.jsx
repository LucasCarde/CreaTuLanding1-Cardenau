import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/Navbar'
import './App.css'



function App() {
  
  const [carrito, setCarrito] = useState(0);
  const [itemsCarrito, setItemsCarrito] = useState([])
  const [sexo, setSexo] = useState('');

  const changeSexo = (sex) => {
    setSexo(sex)
  }

  const agregarAlCarrito = (producto) => {
    setCarrito(carrito+1)
    itemsCarrito.push(producto)
    setItemsCarrito(itemsCarrito)
    console.log(itemsCarrito)
  }
  
  const eliminarDelCarrito = (index) =>{
    itemsCarrito.splice(index, 1)
    setItemsCarrito(itemsCarrito)
    carrito!=0?setCarrito(carrito-1):carrito;
    console.log(carrito)
  }
    
    return (
        <> 
          <NavBar carrito = {carrito} productosCarrito = {itemsCarrito} eliminarDelCarrito={eliminarDelCarrito} changeSexo = {changeSexo}></NavBar>
          <ItemListContainer mensaje ='Bienvenidos!' agregarAlCarrito = {agregarAlCarrito} sexo={sexo}></ItemListContainer>
        </>

    )
}

export default App
