import React, { useState } from "react";

import {get_url_player_short} from '../../../logic/functions.js';

import ComponentNavOptionsVideoShort from '../menus/options_videos_short.js';
import ComponentListCommentsShorts from '../lists/comments_shorts.js';

import '../../../styles/partials/videos/shorts.css';

export default function ComponentVideosShorts({videos}){
    const [video_selected, setVideo_selected] = useState(0);
    const [selected_like,setSelected_like] = useState(0);
    const [option_selected, setOption_selected] = useState();

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
    const visibility_option = (e,index) => {
        e.preventDefault();
        setOption_selected( (index===option_selected)? undefined : index);
    }
    const get_style_option = (index) => {
        return (option_selected===index)? { visibility: "visible" } : { visibility: "hidden" };
    }

    return (
        <section className="videos-shorts">
            <article className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <React.Fragment>
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
                                                <ion-icon onClick={(e) => visibility_option(e,"2")} name="chatbox-ellipses"></ion-icon>
                                                <p>{video.comments_count}</p>
                                            </div>
                                            <div className="option" title="Compartir">
                                                <ion-icon name="arrow-redo"></ion-icon>
                                                <p>Compartir</p>
                                            </div>
                                            <div className="option">
                                                <ion-icon onClick={(e) => visibility_option(e,"1")} name="ellipsis-horizontal"></ion-icon>
                                            </div>
                                            <div className="option" title="Sonido original">
                                                <img src={video.channel.logo}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ComponentNavOptionsVideoShort get_style_option={get_style_option} index="1"/>
                                <ComponentListCommentsShorts video={video} get_style_option={get_style_option} index="2" visibility_option={visibility_option}/>
                            </React.Fragment>
                        )
                    })
                }
            </article>
        </section>
    )
}