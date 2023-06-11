import '../../../styles/partials/videos/playlist.css';

export default function ComponentVideosPlaylist({channel,videos}){
    return (
        <section className='playlist'>
            <article className='presentation' style={{backgroundImage: "url("+videos[0].url_imagen+")"}}>
                <img src={videos[0].url_imagen}/>
                <article>
                    <div className='header'>
                        <span className='title'>Ver más tarde</span>
                        <span className='name'>{channel.title}</span>
                    </div>
                    <div>
                        <span>6 videos</span>
                        <span>0 visualizaciones</span>
                        <span>Actualizada hoy</span>
                    </div>
                    <div>
                        <a href="">
                            <ion-icon name="play"></ion-icon>
                            <span>Reproducir todo</span>
                        </a>
                        <a href="">
                            <ion-icon name="shuffle-outline"></ion-icon>
                            <span>Aleatorio</span>
                        </a>
                    </div>
                </article>
            </article>
            <article className='list'>
                <div className='header'>
                    <div className='title'>
                        <ion-icon name="options-outline"></ion-icon>
                        <span>Ordenar</span>
                    </div>
                </div>
                <div className='body'>
                    <div className='items'>
                        {
                            videos.map((video,index) => {
                                return (
                                    <div className='item'>
                                        <div className='icon-left'>
                                            <ion-icon name="reorder-two-outline"></ion-icon>
                                        </div>
                                        <a href="" key={index} className='video'>
                                            <div className="imagen">
                                                <img src={video.url_imagen} alt={video.title}/>
                                                <div className="duration">
                                                    <span>
                                                        {video.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="title">{video.title}</p>
                                                <div className="data">
                                                    <span>{video.channel.title}</span>
                                                    <span>. {video.view_count}</span>
                                                    <span>. {video.time_elapsed}</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className='icon-right'>
                                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </article>
        </section>
    )
}