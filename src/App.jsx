import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import './App.css'
import '.././src/components/ProductDetail/productDetail.css'


function App() {
  
  const [carrito, setCarrito] = useState(0);
  const [itemsCarrito, setItemsCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito(carrito+1)
    itemsCarrito.push(producto)
    setItemsCarrito(itemsCarrito)
  }
  
  const eliminarDelCarrito = (index) =>{
    itemsCarrito.splice(index, 1)
    setItemsCarrito(itemsCarrito)
    carrito!=0?setCarrito(carrito-1):carrito;
  }
    
    return (
        <> 
          <BrowserRouter>
            <NavBar carrito = {carrito} productosCarrito = {itemsCarrito} eliminarDelCarrito={eliminarDelCarrito}/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer agregarAlCarrito = {agregarAlCarrito}/>}/>
              <Route exact path='categoria/:sexo' element={<ItemListContainer agregarAlCarrito = {agregarAlCarrito}/>}/>
              <Route exact path='/carrito' element={<></>}/>
              <Route exact path='producto/:id' element={<ProductDetail agregarAlCarrito = {agregarAlCarrito}/>}/>
            </Routes>
          </BrowserRouter>
        </>

    )
}

export default App
