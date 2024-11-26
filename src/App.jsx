import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
          <BrowserRouter>
            <NavBar carrito = {carrito} productosCarrito = {itemsCarrito} eliminarDelCarrito={eliminarDelCarrito} changeSexo = {changeSexo}/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer mensaje ='Bienvenidos!' agregarAlCarrito = {agregarAlCarrito} sexo={sexo}/>}/>
              <Route exact path='/carrito' element={<></>}/>
              <Route exact path='/producto' element={<></>}/>
            </Routes>
          </BrowserRouter>
        </>

    )
}

export default App
