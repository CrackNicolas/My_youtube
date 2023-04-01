import Service_subscriptions from '../service/subscriptions/index.js';
import Service_videos from '../service/videos/index.js';
import Service_channels from '../service/channels/index.js';
import Service_search from '../service/searches/index.js';

import Schema_video_presentation from '../schema/video.js';
import Schema_channel from '../schema/channel.js';

export default async function Load_subscriptions(channel_id){
    let videos = [], promises = [];
    
    let search_subscriptions = await Service_subscriptions.get_all(channel_id);
    if(search_subscriptions.data.items!=undefined){
        for(let subscription of search_subscriptions.data.items){
            let channel_subcription = subscription.snippet.resourceId.channelId;
            let channel = Service_channels.get_id(channel_subcription);
            promises.push(channel);
        }

        let response_promises_channels = await Promise.all(promises);
        promises = []
        
        for(let subscription of search_subscriptions.data.items){
            let channel_subcription = subscription.snippet.resourceId.channelId; 
            let search_video = Service_search.get_video_subscription(channel_subcription);
            promises.push(search_video);
        }

        let response_promises_search_videos = await Promise.all(promises);
        promises = []

        for(let search_video of response_promises_search_videos){
            let video = Service_videos.get_all_id(search_video.data.items[0].id.videoId);
            promises.push(video);
        }

        let response_promises_video = await Promise.all(promises);

        for(let item = 0 ; item < search_subscriptions.data.items.length ; item++){
            let channel = response_promises_channels[item];
            let video = response_promises_video[item];
            videos.push(Schema_video_presentation.push(video.data.items[0],Schema_channel.push(channel.data.items[0]),"medium"));
        }
    }
    return videos;
}