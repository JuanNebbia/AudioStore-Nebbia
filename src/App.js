import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import GenresListContainer from './components/GenresListContainer/GenresListContainer';
import Footer from './components/Footer/Footer';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';
import ArtistsListContainer from './components/ArtistsListContainer/ArtistsListContainer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/artist/:artist' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/about' element={<About/>} />  
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<CartContainer/>} />
            <Route path='/genres' element={<GenresListContainer />} />
            <Route path='/artists' element={<ArtistsListContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
