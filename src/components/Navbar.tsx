import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark p-5 m-3 border rounded-5" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Daniel Henrique</Link>
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
                    <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link  active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projetos">Projetos</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Minha Galeria 
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}