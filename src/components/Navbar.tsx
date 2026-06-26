import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg p-5 m-3 rounded-5 text-white" data-bs-theme="dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Sobre">SOBRE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projetos">PROJETOS</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                MINHA GALERIA
                            </a>
                            <ul className="dropdown-menu rounded-3 text-center">
                                <li><a className="dropdown-item" href="#">Websites</a></li>
                                <li><a className="dropdown-item" href="#">Edições</a></li>
                                <li><a className="dropdown-item" href="#">Currículo</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <Link className="navbar-brand ms-auto" to="/"><h1>DH</h1></Link>
            </div>
            
        </nav>
    )
}