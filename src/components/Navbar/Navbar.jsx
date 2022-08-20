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
      <Container style={{backgroundColor: '#0a0a0f'}}> 
        <Navbar.Brand>
            <Link to={'./'}>
              <img src={Logo} alt='logo' className='logo-navbar' />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-content">
            <Link to={"/"} className="nav-section" id="nav-section-home">Inicio</Link>
            <Link to={"/artists"} className="nav-section" id="nav-section-artists">Artistas</Link>
            <NavDropdown title="Géneros" id="nav-section-genres" className="nav-section"> 
              <Link to={"/category/acústico"} className="dropdown-item">Acústico</Link>
              <Link to={"/category/electrónico"} className="dropdown-item">Electrónico</Link>
              <Link to={"/category/clásico"} className="dropdown-item">Clásico</Link>
              <Link to={"/category/contemporáneo"} className="dropdown-item">Contemporáneo</Link>
              <Link to={"/category/experimental"} className="dropdown-item">Experimental</Link>
              <Link to={"/category/ambiental"} className="dropdown-item">Ambiental</Link>
              <Link to={"/category/rock"} className="dropdown-item">Rock</Link>
              <NavDropdown.Divider />
                <Link to={"/genres"} id="see-all-genres" className="dropdown-item">Ver todos</Link>
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