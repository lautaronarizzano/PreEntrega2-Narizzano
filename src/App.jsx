import NavBar from './componentes/NavBar/Navbar'
import ItemListContainer from './componentes/pages/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './componentes/pages/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './componentes/NavBar/NavBar.css'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={ <ItemListContainer /> }/>
      <Route path='/detail' element={ <ItemDetailContainer/> }/>
      <Route path='/cart' element={ <cart /> }/>

      <Route path='*' element={ <Navigate to='/' /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
