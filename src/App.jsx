import './App.css'
import NavBar from './componentes/NavBar/Navbar'
import './componentes/NavBar/NavBar.css';
import ItemListContainer from './componentes/pages/ItemListCointainer/ItemListContainer';
import './componentes/pages/ItemListCointainer/ItemListContainer.css'


function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
      greeting={"Aca irian los productos"}
      />
    </div>
  )
}

export default App
