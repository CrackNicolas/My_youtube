import { useState } from 'react';
import '../../../styles/partials/videos/video.css';
import ComponentNavOptionsVideo from '../menus/options_videos_home';

export default function ComponentVideo({video,index}){
    const [option_selected, setOption_selected] = useState();

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

    return (
        <a href={"/watch/"+video.id} className="video-uniq" key={index}>
            <div className="imagen">
                <img src={video.url_imagen} alt={video.title}/>
                <div className="icons">
                    <ion-icon name="timer-outline"></ion-icon>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="duration">
                    <span>
                        {video.duration}
                    </span>
                </div>
            </div>
            <div className="description">
                <div>
                    <p>{video.title}</p>
                    <div className="icon-options" onClick={(e) => visibility_option(e,index)}>
                        <ion-icon style={get_style_icon_option(index)} name="ellipsis-vertical"></ion-icon>
                    </div>
                    <ComponentNavOptionsVideo get_style_option={get_style_option} index={index}/>
                </div>
                <div className="name-autor">
                    <p>{video.channel.title}</p>
                    { video.license && <ion-icon name="checkmark-circle"></ion-icon> }
                </div>
                <div className="visualizaciones">
                    <p>{video.view_count} .{video.time_elapsed}</p>
                </div>
            </div>
        </a>
    )
}