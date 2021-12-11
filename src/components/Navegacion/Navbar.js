import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <Link to='/'>
                            <img src="img/LOGO ENERGIAS.png" width="100" />
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item align-text-top">
                                <Link className="nav-link" to='/'>Nuestro Cluster</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Directorio'>Directorio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Noticias'>Noticias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Registro'>Registrar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar