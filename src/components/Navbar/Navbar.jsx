import './Navbar.css'
import Logo from '../../icon.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="link" to={'/'}>
                    <div className='navbar-brand'>
                        <img src={Logo} alt='logo' className='logo-navbar' />
                        AudioStore
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Descubre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Publica</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
        
    );
}

  export default Navbar;
  