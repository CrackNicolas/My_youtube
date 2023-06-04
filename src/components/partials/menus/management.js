import '../../../styles/partials/menus/management.css';

export default function ComponentNavManagement({style,channel}){
    
    const cesion_close = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }
    
    return (
        <section className="items-management" style={style()}>
            <article className="header">
                <div>
                    <img src={channel.logo}/>
                </div>
                <div>
                    <p>{channel.title}</p>
                    <p>{channel.custom_url}</p>
                    <p>Gestionar tu cuenta de Google</p>
                </div>
            </article>
            <article className="items">
                <a href="" className="item">
                    <ion-icon name="person-outline"></ion-icon>
                    <span>Tu canal</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="caret-forward-circle-outline"></ion-icon>
                    <span>YouTube Studio</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="id-card-outline"></ion-icon>
                    <span>Cambiar de cuenta</span>
                </a>
                <a onClick={() => cesion_close()} className="item">
                    <ion-icon name="log-in-outline"></ion-icon>
                    <span>Cerrar sesíon</span>
                </a>
                <div className="line-nav-options"></div>
                <a href="" className="item">
                    <ion-icon name="cash-outline"></ion-icon>
                    <span>Compras y suscripciones</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="desktop-outline"></ion-icon>
                    <span>Tus datos en YouTube</span>
                </a>
                <div className="line-nav-options"></div>
                <a href="" className="item">
                    <ion-icon name="moon-outline"></ion-icon>
                    <span>Aspecto: tema del dispositivo</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="language-outline"></ion-icon>
                    <span>Idioma: Español</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="bag-handle-outline"></ion-icon>
                    <span>Modo Restringido: desactivado</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="globe-outline"></ion-icon>
                    <span>Ubicación: Argentina</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="keypad-outline"></ion-icon>
                    <span>Combinaciones de teclas</span>
                </a>
                <div className="line-nav-options"></div>
                <a href="" className="item">
                    <ion-icon name="settings-outline"></ion-icon>
                    <span>Configuracion</span>
                </a>
                <div className="line-nav-options"></div>
                <a href="" className="item">
                    <ion-icon name="help-circle-outline"></ion-icon>
                    <span>Ayuda</span>
                </a>
                <a href="" className="item">
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    <span>Enviar sugerencias</span>
                </a>
            </article>
        </section>
    )
}