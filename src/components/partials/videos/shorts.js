import { useState, useContext, Fragment } from "react";

import { get_url_player_short } from '../../../logic/functions.js';

import ComponentNavOptionsVideoShort from '../menus/options_videos_short.js';
import ComponentListCommentsShorts from '../lists/comments_shorts.js';
import ComponentShareVideo from "../menus/share_video.js";
import ComponentVideosLoadShorts from "../before_load/videos_shorts.js";

import '../../../styles/partials/videos/shorts.css';

import {Global_context} from '../../../context/global_context.js';

export default function ComponentVideosShorts({videos}){
    const context_global = useContext(Global_context);

    const [video_selected, setVideo_selected] = useState(0);
    const [selected_like,setSelected_like] = useState(0);
    const [option_selected, setOption_selected] = useState();

    const capture_selected_likes = (item) => {
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
                { (videos.length==0) && <ComponentVideosLoadShorts/> }
                {
                    videos.map((video,index) => {
                        return (
                            <Fragment key={index}>
                                <div className="video">
                                    <div className="image">
                                        <iframe allow='autoplay *' src={get_url_player_short(video.id, (video_selected == index)?  1 : 0) } onMouseOver={() => setVideo_selected(index)} ></iframe>
                                    </div>
                                    <div className="cont-functions">
                                        <div className="functions">
                                            <div onClick={() => capture_selected_likes(1)} className="function" title="Me gusta este video">
                                                <ion-icon style={get_style(1)} name="thumbs-up"></ion-icon>
                                                <p>{video.likes}</p>
                                            </div>
                                            <div onClick={() => capture_selected_likes(2)} className="function" title="No me gusta este video">
                                                <ion-icon style={get_style(2)} name="thumbs-down"></ion-icon>
                                                <p>No me gusta</p>
                                            </div>
                                            <div className="function" title="Comentarios">
                                                <ion-icon onClick={(e) => visibility_option(e,(index+1))} name="chatbox-ellipses"></ion-icon>
                                                <p>{video.comments_count}</p>
                                            </div>
                                            <div className="function" title="Compartir">
                                                <ion-icon onClick={(e) => visibility_option(e,video.id)} name="arrow-redo"></ion-icon>
                                                <p>Compartir</p>
                                            </div>
                                            <div className="function">
                                                <ion-icon onClick={(e) => visibility_option(e,(index-index*2))} name="ellipsis-horizontal"></ion-icon>
                                            </div>
                                            <div className="function" title="Sonido original">
                                                <img src={video.channel.logo}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ComponentNavOptionsVideoShort get_style_option={get_style_option} index={(index-index*2)}/>
                                <ComponentListCommentsShorts video={video} get_style_option={get_style_option} index={(index+1)} visibility_option={visibility_option} channel={context_global.channel}/>
                                <ComponentShareVideo get_style_option={get_style_option} index={video.id} visibility_option={visibility_option}/>
                            </Fragment>
                        )
                    })
                }
            </article>
        </section>
    )
}