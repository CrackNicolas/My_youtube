import React, { useState } from "react";

import {get_url_player_short} from '../../logic/functions.js';

export default function ComponentVideosShorts({videos}){
    const [video_selected, setVideo_selected] = useState(0);

    const selected_player = (index) => {
        return video_selected == index;
    }
    const mouse_over = (key) => {
        setVideo_selected(key);
    }

    return (
        <section className="videos-shorts">
            <article className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <div className="video" key={index}>
                                <div className="image">
                                    <iframe allow='autoplay *' src={get_url_player_short(video.id, selected_player(index)?  1 : 0) } onMouseOver={() => mouse_over(index)} ></iframe>
                                </div>
                                <div className="cont-options">
                                    <div className="options">
                                        <div className="option" title="Me gusta este video">
                                            <ion-icon name="thumbs-up"></ion-icon>
                                            <p>{video.likes}</p>
                                        </div>
                                        <div className="option" title="No me gusta este video">
                                            <ion-icon name="thumbs-down"></ion-icon>
                                            <p>No me gusta</p>
                                        </div>
                                        <div className="option" title="Comentarios">
                                            <ion-icon name="chatbox-ellipses"></ion-icon>
                                            <p>{video.comments_count}</p>
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