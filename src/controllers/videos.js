import Service_videos from '../service/videos/index.js';
import Service_channels from '../service/channels/index.js';
import Service_playlists from '../service/playlists/index.js';

import Schema_video_presentation, {Schema_video_watch, Schema_video_short} from '../schema/video.js';
import Schema_channel from '../schema/channel.js';

export default async function Load_videos(search_query,categorie_selected,count_video,format_imagen,page){
    let new_videos = [], promises = [], channel;
    const videos_search = await Service_videos.get_all(search_query,categorie_selected,count_video,page);
            
    for(let video of videos_search.data.items){
        let new_channel = Service_channels.get_id(video.snippet.channelId);
        promises.push(new_channel);
    }
    const result_promises_channels = await Promise.all(promises);
    promises = [];

    if(videos_search.data.items[0].contentDetails === undefined){
        for(let video of videos_search.data.items){
            const new_video = Service_videos.get_all_id(video.id.videoId); 
            promises.push(new_video);
        }
        const result_promises_videos = await Promise.all(promises);
              
        for(let item = 0 ; item < videos_search.data.items.length ; item++){
            result_promises_channels[new_videos.length].data.items.find(item => (
                channel = Schema_channel.push(item)
            ))
            result_promises_videos[new_videos.length].data.items.find(item => (
                new_videos.push(Schema_video_presentation.push(item,channel,format_imagen))
            ))
        }
    }else{
        for(let video of videos_search.data.items){
            result_promises_channels[new_videos.length].data.items.find(item => (
                channel = Schema_channel.push(item)
            ))
            new_videos.push(Schema_video_presentation.push(video,channel,format_imagen));
        }
    }
    return {
        videos : new_videos,
        page : videos_search.data.nextPageToken
    }
}
export async function Load_video(id_video){
    let search_video_selected = await Service_videos.get_all_id(id_video);
    return Schema_video_watch.push(search_video_selected.data.items[0]);
}
export async function Load_videos_related(id_playlist){
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
            new_videos.push(Schema_video_presentation.push(video,channel,"medium"));
        }
    }
    return new_videos;
}
export async function Load_suggestions(search){
    let new_suggestions = [];
    const result_suggestions = await Service_videos.get_suggestions(search);
    for(let suggestion of result_suggestions.data.items){
        new_suggestions.push(suggestion.snippet.title.toLowerCase().substring(0,70));
    }
    return new_suggestions;
}
export async function Load_videos_shorts(search_query,count_video,id_video_primary){
    let new_videos = [], promises = [], channel;
    const videos_search = await Service_videos.get_all(search_query,"",count_video);
            
    for(let video of videos_search.data.items){
        let new_channel = Service_channels.get_id(video.snippet.channelId);
        promises.push(new_channel);
    }
    const result_promises_channels = await Promise.all(promises);
    promises = [];

    if(videos_search.data.items[0].contentDetails === undefined){
        if(id_video_primary!=undefined){
            const new_video = Service_videos.get_all_id(id_video_primary); 
            promises.push(new_video);
        }
        for(let video of videos_search.data.items){
            if(video.id.videoId!=id_video_primary){
                const new_video = Service_videos.get_all_id(video.id.videoId); 
                promises.push(new_video);
            }
        }
        const result_promises_videos = await Promise.all(promises);
              
        for(let item = 0 ; item < videos_search.data.items.length ; item++){
            result_promises_channels[new_videos.length].data.items.find(item => (
                channel = Schema_channel.push(item)
            ))
            result_promises_videos[new_videos.length].data.items.find(item => (
                new_videos.push(Schema_video_short.push(item,channel))
            ))
        }
    }else{
        for(let video of videos_search.data.items){
            result_promises_channels[new_videos.length].data.items.find(item => (
                channel = Schema_channel.push(item)
            ))
            new_videos.push(Schema_video_short.push(video,channel));
        }
    }
    return new_videos;
}