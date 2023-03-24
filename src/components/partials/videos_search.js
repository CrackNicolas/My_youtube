import React, {useState} from "react";

import {get_url_player_presentation} from '../../logic/functions.js';
import ComponentNavOptionsVideoSearch from './menus/nav_options_video_search.js';

export default function ComponentSearchVideos({videos}){
    let set_time;
    const [option_selected, setOption_selected] = useState();
    const [key_video_selected,setKey_video_selected] = useState();

    const visibility_option = (e,index) => {
        e.preventDefault();
        setOption_selected( (index===option_selected)? undefined : index);
    }
    const get_style_option = (index) => {
        return (option_selected===index)? { visibility: "visible" } : { visibility: "hidden" };
    }
    const get_style_icon_option = (index) => {
        return (option_selected===index)? { animation: "animate_click_icon_options 0.2s" } : { };
    }
    const play = (id_video,index) => {
        return (key_video_selected==index)? get_url_player_presentation(id_video) : "";
    }
    const mouse_out = () => {
        clearTimeout(set_time);
        setKey_video_selected(undefined);
    }
    const mouse_over = (key) => {
        set_time = setTimeout(() => {
          setKey_video_selected(key)
        }, 1700);
    }

    return (
        <section className="search-videos">
            <section className="filter">
                <button title="Abre los filtros de búsqueda">
                    <ion-icon name="options-outline"></ion-icon>
                    <p>Filtros</p>
                </button>
            </section>
            <section className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <a href={("/watch/"+video.id)} className="video" key={index}>
                                {
                                    (index == key_video_selected)?
                                        <iframe src={play(video.id,index)} className="imagen_frame" allow='autoplay *' onMouseOver={() => mouse_over(index)} onMouseOut={() => mouse_out()}>
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
                                        </iframe>
                                    :
                                        <div className="imagen" onMouseOver={() => mouse_over(index)} onMouseOut={() => mouse_out()}>
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
                                }   
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
                                    {
                                        video.live?
                                            <div className="live">
                                                <ion-icon name="radio-outline"></ion-icon>
                                                <span>EN DIRECTO</span>
                                            </div>
                                        : 
                                            ""
                                    }
                                </div>
                                <div className="icon-options" onClick={(e) => visibility_option(e,index)}>
                                    <ion-icon style={get_style_icon_option(index)} name="ellipsis-vertical"></ion-icon>
                                </div>
                                <ComponentNavOptionsVideoSearch get_style_option={get_style_option} index={index}/>
                            </a>
                        )
                    })
                }
            </section>
        </section>
    )
}