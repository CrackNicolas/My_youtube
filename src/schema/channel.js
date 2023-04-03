import {get_convert_cantidad, get_time_elapsed} from '../logic/functions.js';

export default class Schema_channel{
    constructor(id,title,subscriptions,logo,view_count,time_elapsed,description){
        this.id = id;
        this.title = title;
        this.subscriptions = subscriptions;
        this.logo = logo;
        this.view_count = view_count;
        this.time_elapsed = time_elapsed;
        this.description = description;
    }
    static push(channel){
        return new Schema_channel(
            channel.id,
            channel.snippet.title,
            get_convert_cantidad(channel.statistics.subscriberCount) + " suscriptores",
            channel.snippet.thumbnails.default.url,
            get_convert_cantidad(channel.statistics.viewCount) + " de visitas",
            get_time_elapsed(channel.snippet.publishedAt),
            channel.snippet.description
        )
    }
}
export class Schema_channel_subscriptions{
    constructor(id,title,logo,subscriptions,coun_videos,description){
        this.id = id;
        this.title = title;
        this.logo = logo;
        this.subscriptions = subscriptions;
        this.coun_videos = coun_videos;
        this.description = description;
    }
    static push(channel){
        return new Schema_channel_subscriptions(
            channel.id,
            channel.snippet.title,
            channel.snippet.thumbnails.default.url,
            get_convert_cantidad(channel.statistics.subscriberCount) + " suscriptores",
            get_convert_cantidad(channel.statistics.videoCount) + " videos",
            channel.snippet.description
        )
    }
}