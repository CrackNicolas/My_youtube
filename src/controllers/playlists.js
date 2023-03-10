import Service_videos from '../service/videos/index.js';
import Service_playlists from '../service/playlists/index.js';

export default async function Load_id_playlist(id_video){
    const search_video = await Service_videos.get_id(id_video);   
    let id_channel = search_video.data.items[0].snippet.channelId;
    const search_videos_channel = await Service_playlists.get_all(id_channel);
            
    return (search_videos_channel.data.items[0]!==undefined)? search_videos_channel.data.items[0].id : undefined;
}