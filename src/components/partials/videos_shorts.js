import React from "react";

import {get_url_player_presentation} from '../../logic/functions.js';

export default function ComponentVideosShorts({videos}){
    return (
        <section className="videos-shorts">
            <article className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <div className="video" key={index}>
                                <div className="image">
                                    <iframe src={get_url_player_presentation(video.id)}></iframe>
                                </div>
                                <div className="cont-options">
                                    <div className="options">
                                        <div className="option" title="Me gusta este video">
                                            <ion-icon name="thumbs-up"></ion-icon>
                                            <p>111</p>
                                        </div>
                                        <div className="option" title="No me gusta este video">
                                            <ion-icon name="thumbs-down"></ion-icon>
                                            <p>No me gusta</p>
                                        </div>
                                        <div className="option" title="Comentarios">
                                            <ion-icon name="chatbox-ellipses"></ion-icon>
                                            <p>167</p>
                                        </div>
                                        <div className="option" title="Compartir">
                                            <ion-icon name="arrow-redo"></ion-icon>
                                            <p>Compartir</p>
                                        </div>
                                        <div className="option">
                                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                                        </div>
                                        <div className="option" title="Sonido original">
                                            <img src={video.channel.logo}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}