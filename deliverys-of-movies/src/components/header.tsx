import React, { Component } from "react"
import logo from '../assets/img/banner.png';
    
class Header extends Component {
    /**
     * Estructura del header
     * @returns Header
     */
    render(){
        return(
        <div id="header">
            <header className="header">
            <h1 className="logo"><img src={logo} alt="Delivery's of Movies logo"/></h1>
                <ul className="main-nav">
                    <li><a href="#1">Inicio</a></li>
                    <li><a href="#2">Sobre nosotros</a></li>
                    <li><a href="#4">Contacto</a></li>
                </ul>
            </header>
        </div>
        )
    }
}

export default Header;