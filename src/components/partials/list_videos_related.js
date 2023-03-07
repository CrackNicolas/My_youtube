import React from "react";

export default function ComponentListVideosRelated({videos,categories}){
    return (
        <React.Fragment>
            <article className="nav-categories-two">
                <button className="prev-two">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <article className="categories">
                    {
                        categories.map((categorie,index) => {
                            return (
                                <a key={index} href="">{categorie.title}</a>
                            )
                        })
                    }
                </article>
                <button className="next-two">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </article>
            <article className="videos-favorites">
                {
                    videos.map((video,index) => {
                        return (
                            <article className="player-favorite" key={index}>
                                <div className="imagen">
                                    <img src={video.url_imagen} alt="Imagen de video relacionado"/>
                                    <div className="icons">
                                        <ion-icon name="timer-outline"></ion-icon>
                                        <ion-icon name="play-outline"></ion-icon>
                                    </div>
                                    <div className="duration">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="datails">
                                    <p>{video.title}</p>
                                    <p>{video.channel.title}</p>
                                    <p>{video.view_count} de visitas .{video.time_elapsed}</p>
                                </div>
                                <ion-icon name="ellipsis-vertical"></ion-icon>
                            </article>
                        )
                    })
                }
            </article>
        </React.Fragment>
    )
}