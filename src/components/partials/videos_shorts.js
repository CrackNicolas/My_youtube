import React, { useState } from "react";

import {get_url_player_short} from '../../logic/functions.js';

export default function ComponentVideosShorts({videos}){
    const [video_selected, setVideo_selected] = useState(0);
    const [selected_like,setSelected_like] = useState(0);
    
    const capture_selected_likes = (item) => {
        /*if(item===1 || (item===1 && selected_like==item)){
            console.log("increase");
            console.log("lower de increase");
        }
        if(item===2 || (item===2 && selected_like==item)){
            console.log("lower");
            console.log("increase de un lower");
        }*/
        setSelected_like((selected_like==item)? 0 : item);
    }
    const get_style = (item) => {
        return (selected_like==item)? { background: "var(--color-text-primary)", color: "var(--color-font-primary)"} : {};
    }

    return (
        <section className="videos-shorts">
            <article className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <div className="video" key={index}>
                                <div className="image">
                                    <iframe allow='autoplay *' src={get_url_player_short(video.id, (video_selected == index)?  1 : 0) } onMouseOver={() => setVideo_selected(index)} ></iframe>
                                </div>
                                <div className="cont-options">
                                    <div className="options">
                                        <div onClick={() => capture_selected_likes(1)} className="option" title="Me gusta este video">
                                            <ion-icon style={get_style(1)} name="thumbs-up"></ion-icon>
                                            <p>{video.likes}</p>
                                        </div>
                                        <div onClick={() => capture_selected_likes(2)} className="option" title="No me gusta este video">
                                            <ion-icon style={get_style(2)} name="thumbs-down"></ion-icon>
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