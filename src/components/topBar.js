import React from "react";
import logo from "../assets/images/isologomoradosmall.png";

function TopBar() {
    return (
        <header>
            <div className="contenedor">
                <img className="logo" src={logo} alt="gutenberg logo" />
                <label className="icon-menu"></label>
                <nav className="menu">
                    <a className="active" href="/">Inicio</a>
                    <a href="/ofertas">Ofertas</a>
                    <a href="/product/listado-productos">Listado de Productos</a>
                    <a className="nav-link active" aria-current="page" href="/user/perfil">Perfil</a>
                    <a href="/product/carrito-compras/3">Carrito de compras</a>
                    <a className="nav-link active" aria-current="page" href="/user/login">Login</a>
                    <a className="nav-link active" aria-current="page" href="/user/registro">Registro</a>
                </nav>
            </div>
        </header>
    )
}
export default TopBar;