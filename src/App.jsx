import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import './App.css'
import '.././src/components/ProductDetail/productDetail.css'
import { ProductsProvider } from './context/ProductsContext.jsx';
import { CartProvider } from './context/CartContext.jsx';


function App() {
    return (
        <>
            <BrowserRouter>
              <CartProvider>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<ProductsProvider><ItemListContainer /></ProductsProvider>}/>
                    <Route exact path='categoria/:sexo' element={<ProductsProvider> <ItemListContainer /></ProductsProvider>}/>
                    <Route exact path='/carrito' element={<></>}/>
                    <Route exact path='producto/:id' element={<ProductsProvider><ProductDetail /></ProductsProvider>}/>
                </Routes>
              </CartProvider>
            </BrowserRouter>
        </>

    )
}

export default App
