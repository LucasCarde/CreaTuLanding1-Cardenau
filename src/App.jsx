import 'react'
import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/Navbar'

function App() {

    return (
        <> 
          <NavBar></NavBar>
          <ItemListContainer mensaje ='Bienvenidos!'></ItemListContainer>
        </>

    )
}

export default App
