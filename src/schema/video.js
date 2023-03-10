import {get_convert_cantidad, get_time_elapsed, get_duration_video} from '../logic/functions.js';

export default class Schema_video_presentation{
    constructor(id,title,url_imagen,duration,time_elapsed,description,license,view_count,channel){
        this.id = id;
        this.title = title;
        this.url_imagen = url_imagen;
        this.duration = duration;
        this.time_elapsed = time_elapsed;
        this.description = description;
        this.license = license;
        this.view_count = view_count;
        this.channel = channel;
    }
    static push(video,channel){
        return new Schema_video_presentation(
            video.id,
            video.snippet.title,
            video.snippet.thumbnails.medium.url,
            get_duration_video(video.contentDetails.duration),
            get_time_elapsed(video.snippet.publishedAt),
            video.snippet.description,
            video.contentDetails.licensedContent,
            get_convert_cantidad(video.statistics.viewCount)+" de visitas",
            channel
        )
    }
}
export class Schema_video_watch{
    constructor(id,title,channel_id,likes,comments_count){
        this.id = id;
        this.title = title;
        this.channel_id = channel_id;
        this.likes = likes;
        this.comments_count = comments_count;
    }
    static push(video){
        return new Schema_video_watch(
            video.id,
            video.snippet.title,
            video.snippet.channelId,
            get_convert_cantidad(video.statistics.likeCount),
            get_convert_cantidad(video.statistics.commentCount)
        )  
    }
}