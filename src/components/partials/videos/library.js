import '../../../styles/partials/videos/library.css';

export default function ComponentVideosLibrary({channel}){
    return (
        <section className='library'>
            <article className='main'>
                <div className='history'>
                    <div className='title'>
                        <ion-icon name="time-outline"></ion-icon>
                        <span>Historial</span>
                    </div>
                    <p>Los vídeos que veas aparecerán aquí. Buscar vídeos</p>
                </div>
                <div className='see-later'>
                    <div className='title'>
                        <div>
                            <ion-icon name="time-outline"></ion-icon>
                            <span>Ver mas tarde</span>
                            <span>3</span>
                        </div>
                        <div>
                            <a>Ver todo</a>
                        </div>
                    </div>
                </div>
                <div className='play-list'>
                    <div className='title'>
                        <div>
                            <ion-icon name="time-outline"></ion-icon>
                            <span>Lista de reproduccion</span>
                        </div>
                        <div>
                            <a>Añadido recientemente</a>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className='video-likes'>
                    <div className='title'>
                        <div>
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                            <span>Ver que me gustan</span>
                            <span>99</span>
                        </div>
                        <div>
                            <a>Ver todo</a>
                        </div>
                    </div>
                </div>
                <div className='clips'>
                    <div className='title'>
                        <ion-icon name="cut-outline"></ion-icon>
                        <span>Tus clips</span>
                    </div>
                    <p>Crea clips y comparte tus momentos favoritos. Tu lista aparecerá aquí.</p>
                </div>
            </article>
            <article className='details'>
                <div className='content'>
                    <div className='header'>
                        <img src={channel.logo} className="perfil"/>
                        <span className='name'>{channel.title}</span>
                    </div>
                    <div className='description'>
                        <div className='item'>
                            <span>Suscripciones</span>
                            <span>7</span>
                        </div>
                        <div className='item'>
                            <span>Subidas</span>
                            <span>0</span>
                        </div>
                        <div className='item'>
                            <span>Me gusta</span>
                            <span>99</span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}