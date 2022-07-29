import './Navbar.css'
import Logo from '../../logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="link" to={'/'}>
                    <div className='navbar-brand'>
                        <img src={Logo} alt='logo' className='logo-navbar' />
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link-inicio" to={'/'}>Inicio</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link-generos dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to={'/category/contemporaneo'}>Contemporáneo</Link></li>
                            <li><Link class="dropdown-item" to={'/category/tango'}>Tango</Link></li>
                            <li><Link class="dropdown-item" to={'/category/piano'}>Piano</Link></li>
                            <li><Link class="dropdown-item" to={'/category/ambiental'}>Ambiental</Link></li>
                            <li><Link class="dropdown-item" to={'/category/naturaleza'}>Naturaleza</Link></li>
                            <li><Link class="dropdown-item" to={'/category/experimental'}>Experimental</Link></li>
                            <li><Link class="dropdown-item" to={'/category/minimalista'}>Minimalista</Link></li>
                            <li><Link class="dropdown-item" to={'/category/clásico'}>Clásico</Link></li>
                            <li><Link class="dropdown-item" to={'/category/ópera'}>Ópera</Link></li>
                        </ul>
                        </li>
                    <li className="nav-item">
                        <Link className="nav-link-about active" to={'/about'}>Sobre Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link-contacto active" to={'/contact'}>Contacto</Link>
                    </li>
                </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
        
    );
}

  export default Navbar;
  