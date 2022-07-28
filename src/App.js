import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='(greeting)' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
