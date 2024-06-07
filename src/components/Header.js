import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/men-shoes">Hombre</Link></li>
                    <li><Link to="/women-shoes">Mujer</Link></li>
                    <li><Link to="/cart">Carrito</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                    <li><Link to="/terms">Términos</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li><Link to="/signup">Registrarse</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
