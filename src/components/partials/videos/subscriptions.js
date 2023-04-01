import '../../../styles/partials/videos/subscriptions.css';

export default function ComponentVideosSubscriptions({videos}){
    return (
        <section className="subscriptions">
            <article className="header">
                <span>Esta semana</span>
                <div className="iconos">
                    <span>Gestionar</span>
                    <ion-icon name="grid"></ion-icon>
                    <ion-icon name="list-outline"></ion-icon>
                </div>
            </article>
            <article className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <a href={"/watch/"+video.id} className="video" key={index}>
                                <div className="imagen">
                                    <img src={video.url_imagen} alt={video.title}/>
                                    <div className="duration">
                                        <span>
                                            {video.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="description">
                                    <div>
                                        <p>{video.title}</p>
                                        <ion-icon name="ellipsis-vertical"></ion-icon>
                                    </div>
                                    <div className="name-autor">
                                        <p>{video.channel.title}</p>
                                        {
                                            video.license? <ion-icon name="checkmark-circle"></ion-icon> : ""
                                        }
                                    </div>
                                    <div className="visualizaciones">
                                        <p>{video.view_count} .{video.time_elapsed}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </article>
        </section>
    )
}