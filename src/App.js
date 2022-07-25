import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='ItemListContainer con props' />
      <Main />
    </div>
  );
}

export default App;
