import {get_convert_cantidad, get_time_elapsed, get_duration_video, get_description} from '../logic/functions.js';

export default class Schema_video_presentation{
    constructor(id,title,url_imagen,duration,time_elapsed,description,license,view_count,live,channel){
        this.id = id;
        this.title = title;
        this.url_imagen = url_imagen;
        this.duration = duration;
        this.time_elapsed = time_elapsed;
        this.description = description;
        this.license = license;
        this.view_count = view_count;
        this.live = live;
        this.channel = channel;
    }
    static push(video,channel,format_imagen){
        return new Schema_video_presentation(
            video.id,
            video.snippet.title,
            (format_imagen==="medium")? video.snippet.thumbnails.medium.url : video.snippet.thumbnails.standard.url,
            get_duration_video(video.contentDetails.duration),
            get_time_elapsed(video.snippet.publishedAt),
            video.snippet.localized.description,
            video.contentDetails.licensedContent,
            get_convert_cantidad(video.statistics.viewCount)+" de visitas",
            (video.snippet.liveBroadcastContent=="live")? true : false,
            channel
        )
    }
}
export class Schema_video_watch{
    constructor(id,title,channel_id,likes,description,comments_count){
        this.id = id;
        this.title = title;
        this.channel_id = channel_id;
        this.likes = likes;
        this.description = description;
        this.comments_count = comments_count;
    }
    static push(video){
        return new Schema_video_watch(
            video.id,
            video.snippet.title,
            video.snippet.channelId,
            get_convert_cantidad(video.statistics.likeCount),
            get_description(video.snippet.localized.description),
            get_convert_cantidad(video.statistics.commentCount),
        )  
    }
}
export class Schema_video_short{
    constructor(id,likes,comments_count,channel){
        this.id = id;
        this.likes = likes;
        this.comments_count = comments_count;
        this.channel = channel;
    }
    static push(video,channel){
        return new Schema_video_short(
            video.id,
            get_convert_cantidad(video.statistics.likeCount),
            get_convert_cantidad(video.statistics.commentCount),
            channel
        )
    }   
}