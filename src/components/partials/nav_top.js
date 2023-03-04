import React, { Component } from "react";

export default class NavTop extends Component{
    render(){
        return (
            <nav className="nav-top">
                <button className="menu">
                <ion-icon name="menu-outline"></ion-icon>
                <div className="items-menu">
                    <div className="items">
                        <div className="item">
                            <ion-icon name="home"></ion-icon>
                            <a>Inicio</a>
                        </div>
                        <div className="item">
                            <ion-icon name="triangle-outline"></ion-icon>
                            <a>Shorts</a>
                        </div>
                        <div className="item">
                            <ion-icon name="copy-outline"></ion-icon>
                            <a>Supscripciones</a>
                        </div>
                        <div className="linea-item">__________________________</div>
                        <div className="item">
                            <ion-icon name="library-outline"></ion-icon>
                            <a>Mi biblioteca</a>
                        </div>
                        <div className="item">
                            <ion-icon name="stopwatch-outline"></ion-icon>
                            <a>Historial</a>
                        </div>
                        <div className="item">
                            <ion-icon name="caret-forward-circle-outline"></ion-icon>
                            <a>Mis videos</a>
                        </div>
                        <div className="item">
                            <ion-icon name="alarm-outline"></ion-icon>
                            <a>Ver mas tarde</a>
                        </div>
                        <div className="item">
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                            <a>Videos que me gustan</a>
                        </div>
                        <div className="item">
                            <ion-icon name="play-circle-outline"></ion-icon>
                            <a>Videos importantes</a>
                        </div>
                        <div className="linea-item">__________________________</div>
                        <p className="sub-title-item">Suscripciones</p>
                        <div className="item item-subscription">
                            <img src="/images/my_perfil.jpg" alt=""/>
                            <a>Canales</a>
                        </div>
                        <div className="item item-subscription">
                            <img src="/images/my_perfil.jpg" alt=""/>
                            <a>Canales</a>
                        </div>
                        <div className="linea-item">__________________________</div>
                        <p className="sub-title-item">Explorar</p>
                        <div className="item">
                            <ion-icon name="bonfire-outline"></ion-icon>
                            <a>Tendencias</a>
                        </div>
                        <div className="item">
                            <ion-icon name="musical-note-outline"></ion-icon>
                            <a>Musica</a>
                        </div>
                        <div className="item">
                            <ion-icon name="film-outline"></ion-icon>
                            <a>Peliculas</a>
                        </div>
                        <div className="item">
                            <ion-icon name="radio-outline"></ion-icon>
                            <a>En directo</a>
                        </div>
                        <div className="item">
                            <ion-icon name="game-controller-outline"></ion-icon>
                            <a>Videojuegos</a>
                        </div>
                        <div className="item">
                            <ion-icon name="newspaper-outline"></ion-icon>
                            <a>Noticias</a>
                        </div>
                        <div className="item">
                            <ion-icon name="trophy-outline"></ion-icon>
                            <a>Deportes</a>
                        </div>
                        <div className="item">
                            <ion-icon name="bulb-outline"></ion-icon>
                            <a>Aprendizaje</a>
                        </div>
                        <div className="linea-item">__________________________</div>
                        <div className="item">
                            <ion-icon name="settings-outline"></ion-icon>
                            <a>Configuracion</a>
                        </div>
                        <div className="item">
                            <ion-icon name="flag-outline"></ion-icon>
                            <a>Historial de denuncias</a>
                        </div>
                        <div className="item">
                            <ion-icon name="help-circle-outline"></ion-icon>
                            <a>Ayuda</a>
                        </div>
                        <div className="item">
                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                            <a>Enviar sugerencias</a>
                        </div>
                        <div className="linea-item">__________________________</div>
                        <p className="sub-title-footer-item">Informacion Prensa Derechos de autor Contactar Creadores Publicidad Desarrolladores</p>
                        <p className="sub-title-footer-item">Terminos Privacidad Politica y seguridad Como funciona YouTube Probar funciones nuevas</p>
                        <p className="item-footer">
                            <ion-icon name="reload-circle-outline"></ion-icon>
                            2023 Google LLC
                        </p>
                    </div>
                </div>
                </button>
                <a className="logo" href="/">
                    <div className="content-logo" title="Página de inicio de YouTube">
                        <ion-icon name="logo-youtube" title="Página de inicio de YouTube"></ion-icon>
                    </div>
                    <p title="Página de inicio de YouTube">YouTube</p>
                </a>
                <form action="/results" method="GET" className="search" title="Buscar">
                    <input type="text" name="search_query" placeholder="Buscar"/>
                    <ion-icon className="buscador-oculto" name="search-outline"></ion-icon>
                    <button type="submit" className="buscador">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                    <ion-icon className="micro" name="mic" title="Haz búsquedas por voz"></ion-icon>
                </form>
                <div className="icons">
                    <div className="icon-video" title="Crear">
                        <div className="video">+</div>
                    </div>
                    <div className="notification">
                        <ion-icon name="notifications-outline" title="Notificaciones"></ion-icon>
                    </div>
                </div>
                <img className="perfil" src="/images/my_perfil.jpg" alt=""/>
            </nav>
        )
    }
}