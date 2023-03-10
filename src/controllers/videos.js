import Service_videos from '../service/videos/index.js';
import Service_channels from '../service/channels/index.js';

import Schema_video_presentation, {Schema_video_watch} from '../schema/video.js';
import Schema_channel from '../schema/channel.js';

export default async function Load_videos(search_query,categorie_selected,count_video){
    let new_videos = [], promises = [], channel;
    const videos_search = await Service_videos.get_all(search_query,categorie_selected,count_video);
            
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
                new_videos.push(Schema_video_presentation.push(item,channel))
            ))
        }
    }else{
        for(let video of videos_search.data.items){
            result_promises_channels[new_videos.length].data.items.find(item => (
                channel = Schema_channel.push(item)
            ))
            new_videos.push(Schema_video_presentation.push(video,channel));
        }
    }
    return new_videos;
}
export async function Load_video(id_video){
    let search_video_selected = await Service_videos.get_all_id(id_video);   
    return Schema_video_watch.push(search_video_selected.data.items[0]);
}