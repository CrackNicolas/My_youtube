import {get_convert_cantidad, get_time_elapsed} from '../logic/functions.js';

export default class Channel{
    constructor(id,autor,title,subscriptions,logo,view_count,time_elapsed,description){
        this.id = id;
        this.autor = autor;
        this.title = title;
        this.subscriptions = subscriptions;
        this.logo = logo;
        this.view_count = view_count;
        this.time_elapsed = time_elapsed;
        this.description = description;
    }
    static push(video,item){
        return new Channel(
            video.snippet.channelId,
            item.snippet.channelTitle,
            item.snippet.title,
            get_convert_cantidad(item.statistics.subscriberCount) + " de suscriptores",
            item.snippet.thumbnails.default.url,
            get_convert_cantidad(item.statistics.viewCount) + " de visitas",
            get_time_elapsed(item.snippet.publishedAt),
            item.snippet.description
        )
    }
}