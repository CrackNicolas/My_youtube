import React from "react";

export default function ComponentSearchVideos({videos}){
    let watch_video = (id) => {
        return "/watch/"+id;
    }

    return (
        <section className="search-videos">
            <section className="filter">
                <button title="Abre los filtros de búsqueda">
                    <ion-icon name="list-outline"></ion-icon>
                    <p>Filtros</p>
                </button>
            </section>
            <section className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <a href={watch_video(video.id)} className="video" key={index}>
                                <div className="imagen">
                                    <img src={video.url_imagen} alt={video.title}/>
                                    <div className="content-icons">
                                        <div className="icons">
                                            <ion-icon name="timer-outline"></ion-icon>
                                            <ion-icon name="play-outline"></ion-icon>
                                        </div>
                                    </div>
                                    <div className="icon-player">
                                        <ion-icon name="play-sharp"></ion-icon>
                                    </div>
                                    <div className="duration">
                                        <span>
                                            {video.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="description">
                                    <p className="title">{video.title}</p>
                                    <div className="visualizaciones">
                                        <p>{video.view_count} .{video.time_elapsed}</p>
                                    </div>
                                    <div className="icon-autor">
                                        <img src={video.channel.logo} alt={video.channel.title}/>
                                        <p>{video.title}</p>
                                    </div>
                                    <p className="description-video">
                                        {video.description}
                                    </p>
                                </div>
                                <button>
                                    <ion-icon name="ellipsis-vertical"></ion-icon>
                                </button>
                            </a>
                        )
                    })
                }
            </section>
        </section>
    )
}