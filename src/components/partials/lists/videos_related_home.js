import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Load_videos_related } from "../../../controllers/videos.js";
import Load_id_playlist from '../../../controllers/playlists.js';

import ComponentNavOptionsVideo from '../menus/options_videos_home.js';

import '../../../styles/partials/lists/videos_related_home.css';

export default function ComponentListVideosRelated({id_playlist}){
    let {id} = useParams();
    const [playlists_channel_video_selected, setPlaylists_channel_video_selected] = useState([]);
    const [option_selected, setOption_selected] = useState();

    useEffect(() => {
        const load_playlist_id = async (id_playlist) => {
            let new_videos = await Load_videos_related(id_playlist);
            setPlaylists_channel_video_selected(new_videos);
        }
        const load_playlist_id_video = async (id_video) => {
            let search_id_playlist = await Load_id_playlist(id_video);
            if(search_id_playlist!==undefined){
                load_playlist_id(search_id_playlist);
            }
        }

        (id_playlist!==undefined)? load_playlist_id(id_playlist) : load_playlist_id_video(id);
        
    },[id_playlist]);

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
        <article className="videos-favorites">
            {
                playlists_channel_video_selected.map((video,index) => {
                    return (
                        <a href={"/watch/"+video.id} className="player-favorite" key={index}>
                            <div className="imagen">
                                <img src={video.url_imagen} alt="Video relacionado con el video seleccionado para reproducir"/>
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
                            <div className="datails">
                                <p>{video.title}</p>
                                <div>
                                    <p>{video.channel.title}</p>
                                    { video.license===true && <ion-icon name="checkmark-circle"></ion-icon> }
                                </div>
                                <p>{video.view_count} .{video.time_elapsed}</p>
                            </div>
                            <div className="icon-options" onClick={(e) => visibility_option(e,index)}>
                                <ion-icon style={get_style_icon_option(index)} name="ellipsis-vertical"></ion-icon>
                            </div>
                            <ComponentNavOptionsVideo videos={playlists_channel_video_selected} get_style_option={get_style_option} index={index}/>
                        </a>
                    )
                })
            }           
        </article>
    )
}