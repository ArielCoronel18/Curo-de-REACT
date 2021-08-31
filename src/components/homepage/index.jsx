import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Homepage = () => (
    <>
        <div className="welcome-container">
            <img src={Logo} alt="Azul School Logo" />
            <p className="welcome-text">
                Bienvenido(a) a la mejor plataforma de películas en Azul School
            </p>
            <button className="welcome-button">
                <Link to="/peliculas">
                    Ver películas
                </Link>
            </button>
        </div>
    </>
);

export default Homepage;