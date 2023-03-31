import React from 'react';
import '../../../styles/partials/menus/toggler.css';

export default function ComponentNavToggler({styles,user}){
    return (
        <div className="items-menu" style={styles}>
            <div className="logo">
                <button className="menu">
                    <ion-icon id="icon-menu" name="menu-outline"></ion-icon>
                </button>
                <a href="/">
                    <img src="/images/youtube.png" title="Página de inicio de YouTube"/>
                    <p title="Página de inicio de YouTube">YouTube</p>
                </a>
            </div>
            <div className="items">
                <a href="/" className="item">
                    <ion-icon name="home"></ion-icon>
                    <span>Inicio</span>
                </a>
                <a href="/shorts" className="item">
                    <ion-icon name="color-filter-outline"></ion-icon>
                    <span>Shorts</span>
                </a>
                <a href="/feed/subscriptions" className="item">
                    <ion-icon name="albums-outline"></ion-icon>
                    <span>Supscripciones</span>
                </a>
                <div className="linea-item">__________________________</div>
                {
                    (user==undefined)?
                        <React.Fragment>
                            <a href="/feed/library" className="item">
                                <ion-icon name="library-outline"></ion-icon>
                                <span>Biblioteca</span>
                            </a>
                            <a className="item">
                                <ion-icon name="stopwatch-outline"></ion-icon>
                                <span>Historial</span>
                            </a>
                            <div className="linea-item">__________________________</div>
                            <div className="acceder-toggle">
                                <p>
                                    Accede para dar "Me gusta" a los videos, realizar comentarios y suscribirte.
                                </p>
                                <a href="/logaut">
                                    <ion-icon name="person-circle-outline"></ion-icon>
                                    <span>Acceder</span>
                                </a>
                            </div>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <a className="item">
                                <ion-icon name="library-outline"></ion-icon>
                                <span>Mi biblioteca</span>
                            </a>
                            <a className="item">
                                <ion-icon name="stopwatch-outline"></ion-icon>
                                <span>Historial</span>
                            </a>
                            <a className="item">
                                <ion-icon name="caret-forward-circle-outline"></ion-icon>
                                <span>Mis videos</span>
                            </a>
                            <a className="item">
                                <ion-icon name="alarm-outline"></ion-icon>
                                <span>Ver mas tarde</span>
                            </a>
                            <a className="item">
                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                <span>Videos que me gus...</span>
                            </a>
                            <a className="item">
                                <ion-icon name="play-circle-outline"></ion-icon>
                                <span>Videos importantes</span>
                            </a>
                            <div className="linea-item">__________________________</div>
                            <p className="sub-title-item">Suscripciones</p>
                            <a className="item item-subscription">
                                <img src="/images/my_perfil.jpg" alt=""/>
                                <span>Canales</span>
                            </a>
                            <a className="item item-subscription">
                                <img src="/images/my_perfil.jpg" alt=""/>
                                <span>Canales</span>
                            </a>
                        </React.Fragment>
                }
                <div className="linea-item">__________________________</div>
                <p className="sub-title-item">Explorar</p>
                <a className="item">
                    <ion-icon name="bonfire-outline"></ion-icon>
                    <span>Tendencias</span>
                 </a>
                 <a className="item">
                    <ion-icon name="musical-note-outline"></ion-icon>
                    <span>Musica</span>
                 </a>
                 <a className="item">
                    <ion-icon name="film-outline"></ion-icon>
                    <span>Peliculas</span>
                </a>
                <a className="item">
                    <ion-icon name="radio-outline"></ion-icon>
                    <span>En directo</span>
                </a>
                <a className="item">
                    <ion-icon name="game-controller-outline"></ion-icon>
                    <span>Videojuegos</span>
                </a>
                <a className="item">
                    <ion-icon name="newspaper-outline"></ion-icon>
                    <span>Noticias</span>
                </a>
                <a className="item">
                    <ion-icon name="trophy-outline"></ion-icon>
                    <span>Deportes</span>
                </a>
                <a className="item">
                    <ion-icon name="bulb-outline"></ion-icon>
                    <span>Aprendizaje</span>
                </a>
                <div className="linea-item">__________________________</div>
                <a className="item">
                    <ion-icon name="settings-outline"></ion-icon>
                    <span>Configuracion</span>
                </a>
                <a className="item">
                    <ion-icon name="flag-outline"></ion-icon>
                    <span>Historial de denun...</span>
                </a>
                <a className="item">
                    <ion-icon name="help-circle-outline"></ion-icon>
                    <span>Ayuda</span>
                </a>
                <a className="item">
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    <span>Enviar sugerencias</span>
                </a>
                <div className="linea-item">__________________________</div>
                <p className="sub-title-footer-item">Informacion Prensa Derechos de autor Contactar Creadores Publicidad Desarrolladores</p>
                <p className="sub-title-footer-item">Terminos Privacidad Politica y seguridad Como funciona YouTube Probar funciones nuevas</p>
                <p className="item-footer">
                    <ion-icon name="reload-circle-outline"></ion-icon>
                    2023 Google LLC
                </p>
            </div>
        </div>
    )
}