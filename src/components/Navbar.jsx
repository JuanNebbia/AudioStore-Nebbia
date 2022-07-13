import './Navbar.css'

const Navbar = () =>{
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div className='navbar-brand'>
                    <img src='/icon.png' alt='logo' className='logo-navbar' />
                    AudioStore
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
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
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Artistas, géneros..." aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
        </nav>
        
    );
}

  export default Navbar;
  