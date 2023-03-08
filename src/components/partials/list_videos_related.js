import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Schema_video_presentation from '../../schema/video.js';
import Schema_channel from '../../schema/channel.js';

import Service_videos from '../../service/videos/index.js';
import Service_channels from "../../service/channels/index.js";
import Service_playlists from '../../service/playlists/index.js';

export default function ComponentListVideosRelated({id_playlist}){
    let {id} = useParams();
    const [playlists_channel_video_selected, setPlaylists_channel_video_selected] = useState([]);

    useEffect(() => {
        const load_playlist_id = async (id_playlist) => {
            let new_videos = [], promises = [];
            const new_playlists = await Service_playlists.get_datails_playlits(id_playlist);
            for(let playlist of new_playlists.data.items){
                let search_video = Service_videos.get_all_id(playlist.snippet.resourceId.videoId);
                promises.push(search_video);
            }

            const result_search_videos = await Promise.all(promises);
            promises = [];

            for(let result_videos of result_search_videos){
                for(let video of result_videos.data.items){
                    let search_channel = Service_channels.get_id(video.snippet.channelId);
                    promises.push(search_channel);
                }
            }
            
            const result_search_channels = await Promise.all(promises);
            for(let result_videos of result_search_videos){
                for(let video of result_videos.data.items){
                    let channel;
                    for(let result_channel of result_search_channels){
                        channel = Schema_channel.push(result_channel.data.items[0]);
                    }
                    new_videos.push(Schema_video_presentation.push(video,channel));
                }
            }
            setPlaylists_channel_video_selected(new_videos);
        }

        const load_playlist_id_video = async (id_video) => {
            const search_video = await Service_videos.get_id(id_video);            
            let id_channel = search_video.data.items[0].snippet.channelId;
            const search_videos_channel = await Service_playlists.get_all(id_channel);
            let new_id_playlist = search_videos_channel.data.items[0].id;
            load_playlist_id(new_id_playlist);
        }

        if(id_playlist!=undefined){
            load_playlist_id(id_playlist);
        }else{
            load_playlist_id_video(id);
        }

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