import React from "react";
import './areaPersonal.css';
import {Link} from 'react-router-dom';

export default function AreaPersonal () {
    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <div className="header__img">
                        <a href="internos.html"><img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/logoSinFondo_lbttlj.png" alt=""/></a>
                    </div>
                    <div id="navbar" className="abierto header__enlaces navbar">
                        <Link to="/login">
                            <a href="">Inicio</a>
                        </Link>
                        <Link to="/contact">
                            <a href="">Contacto</a>
                        </Link>
                        <a className='navbar__img abierto' id='btnNavNormal'>
                            <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/menu_inpu5v.png" alt="menu"/>
                        </a>
                    </div>
                </div>
                <div className="contenedor__Responsive" id="contenedor"> </div>
                <div className="containerNormal" id="containerNormal"> </div>
                <div className="header__user">
                    <div id="datosContainer" className="header__datos">
                        <div className="profilePic" ></div>
                        <h1>USUARIO X</h1>
                    </div>
                    <div className="header__msjBtn">
                        <button id="btnMensajes"> <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/mensaje_dnkfbc.png" alt="" /> </button>
                        <div id="containerMsj"></div>
                    </div>
                </div>
            </header>
            <main>
                <section className="main">
                    <div className="main__container">
                        <div className="proyectos__container">
                            <h2>Mis ultimos proyectos</h2>
                            <div id="proyectosContainer">
                            </div>
                            <div className="proyectos__button">
                                <button id="btnVer">Ver todos</button>
                                <button id="btnUpload">Subir nuevo proyecto</button>
                                <div id="backgroundTodos">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="cardStats" className="card">    
                                {/* <div class="card"> */}
                                    <div className="item item--1">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(149,149,255,1)" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                                    <span className="quantity"> 90+ </span>
                                    <span className="text text--1"> Icons </span>
                                    </div>
                                    <div className="item item--2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0L24 0 24 24 0 24z"></path><path d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z" fill="rgba(252,161,71,1)"></path></svg>    <span class="quantity"> 70+ </span>
                                    <span className="text text--2"> Illustrations </span>
                                    </div>
                                    <div className="item item--3">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(66,193,110,1)" d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path></svg>
                                    <span className="quantity"> 150+ </span>
                                    <span className="text text--3"> Components </span>
                                    </div>
                                    <div className="item item--4">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(220,91,183,1)" d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                                    <span className="quantity"> 30+ </span>
                                    <span className="text text--4"> Animations </span>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <footer class="footer">
                <div class="footer__container d-flex">
                    <h4>"La unidad vale por su entorno"</h4>
                    <a href="./terminosYcondiciones.html">Términos y Condiciones</a>
                </div>
            </footer>
            <script src="../js/navbar.js"></script>
            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <script src="../js/areaPersonal.js"></script>
        </div>
    );
};