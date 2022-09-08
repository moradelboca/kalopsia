import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar />
      <ItemCount stock="5" initial="0" onAdd="onAdd" />
    </div>
  );
}

export default App;
