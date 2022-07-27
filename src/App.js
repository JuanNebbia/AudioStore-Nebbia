import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <ItemListContainer greeting='ItemListContainer con props' />
      <ItemDetailContainer />
      <Main />
    </div>
  );
}

export default App;
