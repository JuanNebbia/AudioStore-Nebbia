import './Navbar.css'
import Logo from '../icon.png'
import CartWidget from './CartWidget'

const Navbar = () =>{
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div className='navbar-brand'>
                    <img src={Logo} alt='logo' className='logo-navbar' />
                    AudioStore
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Descubre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Publica</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
        
    );
}

  export default Navbar;
  