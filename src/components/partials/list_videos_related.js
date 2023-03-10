import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Load_videos_related } from "../../controllers/videos.js";
import Load_id_playlist from '../../controllers/playlists.js';

export default function ComponentListVideosRelated({id_playlist}){
    let {id} = useParams();
    const [playlists_channel_video_selected, setPlaylists_channel_video_selected] = useState([]);

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

    return (
        <article className="videos-favorites">
            {
                playlists_channel_video_selected.map((video,index) => {
                    return (
                        <article className="player-favorite" key={index}>
                            <div className="imagen">
                                <img src={video.url_imagen} alt="Video relacionado con el video seleccionado para reproducir"/>
                                <div className="icons">
                                    <ion-icon name="timer-outline"></ion-icon>
                                    <ion-icon name="play-outline"></ion-icon>
                                </div>
                                <div className="duration">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="datails">
                                <p>{video.title}</p>
                                <p>{video.channel.title}</p>
                                <p>{video.view_count} de visitas .{video.time_elapsed}</p>
                            </div>
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                        </article>
                    )
                })
            }           
        </article>
    )
}