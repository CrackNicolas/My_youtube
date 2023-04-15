import React, { useEffect, useState } from "react"

import { get_url_player } from "../../../logic/functions.js";

import ComponentVideoSelectedLoad from '../before_load/video_selected_home.js';
import ComponentNavOptionsVideoSelected from "../menus/options_video_selected.js";
import ComponentShareVideo from "../menus/share_video.js";

export default function ComponentHeaderVideoSelected({video,channel}){
    const [name_id_description,setName_id_description] = useState("description");
    const [options_selected_video,setOptions_selected_video] = useState(false);
    const [option_selected_share,setOption_selected_share] = useState(false);
    const [selected_like,setSelected_like] = useState(0);
    
    const hidden_description = () => {
        setName_id_description((name_id_description==="hidden_description")? "description":"hidden_description");
    }

    useEffect(() => {
        const replace_description = () => {
            let element = window.document.querySelector("."+name_id_description);
            if(element!=null){
                element.innerHTML = video.description;
            }
        }
        replace_description();
    },[video,channel]);

    const options_video = () => {
        setOptions_selected_video(!options_selected_video);
    }
    const get_style_options_video = () => {
        return (options_selected_video)? { display: "block" } : { display: "none" };
    }

    const get_style_option_share = (index) => {
        return (option_selected_share===index)? { display: "block" } : { display: "none" };
    }
    const visibility_option_share = (e,index) => {
        e.preventDefault();
        setOption_selected_share( (index===option_selected_share)? undefined : index);
    }
    const capture_selected_likes = (item) => {
        setSelected_like((selected_like==item)? 0 : item);
    }

    return (
        <React.Fragment>
            <article className="player">
                <iframe src={get_url_player(video.id)} allow="autoplay *"></iframe>
            </article>
            {   
                (channel.logo===undefined)?
                    <ComponentVideoSelectedLoad/>
                :
                    <React.Fragment>
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
                                <button onClick={() => capture_selected_likes(1)} className="btn-likes">
                                    <ion-icon name={(selected_like===1)? "thumbs-up" : "thumbs-up-outline"}></ion-icon>
                                    <p>{video.likes}</p>
                                </button>
                                <button onClick={() => capture_selected_likes(2)} className="btn-no-likes">
                                    <ion-icon name={(selected_like===2)? "thumbs-down" : "thumbs-down-outline"}></ion-icon>
                                </button>
                                <button className="share" onClick={(e) => visibility_option_share(e,video.id)}>
                                    <ion-icon name="arrow-redo-outline"></ion-icon>
                                    <p title="Compartir" name="Compartir">Compartir</p>
                                </button>
                                <button className="dowload">
                                    <ion-icon name="download-outline"></ion-icon>
                                    <p title="Descargar" name="Descargar">Descargar</p>
                                </button>
                                <button className="tranks">
                                    <ion-icon name="heart-circle-outline"></ion-icon>
                                    <p title="Muestra tu apodo con super Tranks" name="Muestra tu apodo con super Tranks">Gracias</p>
                                </button>
                                <button className="video-option" onClick={() => options_video()}>
                                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                </button>
                            </div>
                            <ComponentNavOptionsVideoSelected get_style_option={get_style_options_video}/>
                            <ComponentShareVideo get_style_option={get_style_option_share} index={video.id} visibility_option={visibility_option_share}/>
                        </article>
                        <article className="description-view-video">
                            <p>{channel.view_count} .{channel.time_elapsed}</p>
                            <p className={name_id_description}></p>
                            <button onClick={() => hidden_description()}>Mostrar {(name_id_description==="hidden_description")? "menos" : "más"}</button>
                        </article>
                    </React.Fragment>    
            }
        </React.Fragment>        
    )
}