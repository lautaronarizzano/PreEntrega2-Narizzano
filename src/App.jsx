import NavBar from './componentes/NavBar/Navbar'
import ItemListContainer from './componentes/pages/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './componentes/pages/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './componentes/NavBar/NavBar.css'
import './App.css'
import { CartContextProvider } from './Context/CartContext';


function App() {

    return (
        <BrowserRouter>
            <CartContextProvider>

                <NavBar />

                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:id' element={<ItemListContainer />} />
                    <Route path='/item/:productId' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<cart />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App
