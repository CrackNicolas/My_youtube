import React from "react"

import { get_url_player } from "../../logic/functions.js";

export default function ComponentHeaderVideoSelected({video,channel}){
    
    return (
        <React.Fragment>
            <article className="player">
                <iframe src={get_url_player(video.id)}></iframe>
            </article>
            <p className="title">{video.title}</p>
            <article className="details">
                <div className="btns-izq">
                    <img className="icon" src={channel.logo} alt={channel.title}/>
                    <article className="subscriptions">
                        <div>
                            <p className="autor">{channel.title}</p>
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                        <p className="count">{channel.subscriptions}</p>
                    </article>
                    <button className="btn-subscription" title="Suscribirse" name="Suscribirse">
                        Suscribirse
                    </button>
                </div>
                <div className="btns-der">
                    <button className="btn-likes">
                        <ion-icon name="thumbs-up-outline"></ion-icon>
                        <p>{video.likes}</p>
                    </button>
                    <button className="btn-no-likes">
                        <ion-icon name="thumbs-down-outline"></ion-icon>
                    </button>
                    <button className="share">
                        <ion-icon name="arrow-redo-outline"></ion-icon>
                        <p title="Compartir" name="Compartir">Compartir</p>
                    </button>
                    <button className="option">
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </button>
                </div>
            </article>
            <article className="description-view-video">
                <p>{channel.view_count} .{channel.time_elapsed}</p>
                <p>{video.description}</p>
            </article>
        </React.Fragment>        
    )
}