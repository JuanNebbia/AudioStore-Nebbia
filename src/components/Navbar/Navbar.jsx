import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Logo from '../../img/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

const Navbarr = () => {
  const { cart } = useContext(CartContext)

  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand>
            <Link to={'./'}>
              <img src={Logo} alt='logo' className='logo-navbar' />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-content">
            <Link to={"/"} className="nav-section" id="nav-section-products">Productos</Link>
            <NavDropdown title="Géneros" id="nav-section-genres" className="nav-section"> 
              <Link to={"/category/contemporaneo"} className="dropdown-item">Contemporáneo</Link>
              <Link to={"/category/tango"} className="dropdown-item">Tango</Link>
              <Link to={"/category/piano"} className="dropdown-item">Piano</Link>
              <Link to={"/category/ambiental"} className="dropdown-item">Ambiental</Link>
              <Link to={"/category/naturaleza"} className="dropdown-item">Naturaleza</Link>
              <Link to={"/category/experimental"} className="dropdown-item">Experimental</Link>
              <Link to={"/category/minimalista"} className="dropdown-item">Minimalista</Link>
              <Link to={"/category/clasico"} className="dropdown-item">Clásico</Link>
              <Link to={"/category/opera"} className="dropdown-item">Ópera</Link>
              <Link to={"/category/acustico"} className="dropdown-item">Acústico</Link>
            </NavDropdown>
            <Link to={"/about"} className="nav-section" id="nav-section-about">Sobre Nosotros</Link>
            <Link to={"/contact"} className="nav-section" id="nav-section-contact">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        {cart.length > 0 && <CartWidget />}
      </Container>
    </Navbar>
  );
}

export default Navbarr;