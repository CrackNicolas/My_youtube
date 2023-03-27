import '../../../styles/partials/menus/toggler.css';

export default function ComponentNavToggler({styles}){
    return (
        <div className="items-menu" style={styles}>
            <div className="logo">
                <button className="menu">
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
                <a href="/">
                    <img src="/images/youtube.png" title="Página de inicio de YouTube"/>
                    <p title="Página de inicio de YouTube">YouTube</p>
                </a>
            </div>
            <div className="items">
                <div className="item">
                    <ion-icon name="home"></ion-icon>
                    <a href="/">Inicio</a>
                </div>
                <div className="item">
                    <ion-icon name="color-filter-outline"></ion-icon>
                    <a href="/shorts">Shorts</a>
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
    )
}