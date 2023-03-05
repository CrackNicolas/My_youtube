import {get_convert_cantidad, get_time_elapsed} from '../logic/functions.js';

export default class Schema_channel{
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
    static push(channel){
        return new Schema_channel(
            channel.id,
            channel.snippet.channelTitle,
            channel.snippet.title,
            get_convert_cantidad(channel.statistics.subscriberCount) + " de suscriptores",
            channel.snippet.thumbnails.default.url,
            get_convert_cantidad(channel.statistics.viewCount) + " de visitas",
            get_time_elapsed(channel.snippet.publishedAt),
            channel.snippet.description
        )
    }
}