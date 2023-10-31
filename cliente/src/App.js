import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';

function App() {
  return (
    <div className="App">
      <h1> CRUD MERN STACK</h1>
      <ListaUsuarios/>
      <AgregarUsuario/>
      <EditarUsuario/>
    </div>
  );
}

export default App;
