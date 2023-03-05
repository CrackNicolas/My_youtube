import { get_time_elapsed, get_convert_cantidad } from "../logic/functions";

export default class Schema_comment{
    constructor(id,autor,logo,description,likes,time_elapsed,replies){
        this.id = id;
        this.autor = autor;
        this.logo = logo;
        this.description = description;
        this.likes = likes;
        this.time_elapsed = time_elapsed;
        this.replies = replies;
    }
    static push_general(comment,replies){
        return new Schema_comment(
            comment.id,
            comment.snippet.topLevelComment.snippet.authorDisplayName,
            comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
            comment.snippet.topLevelComment.snippet.textOriginal,
            get_convert_cantidad(comment.snippet.topLevelComment.snippet.likeCount),
            get_time_elapsed(comment.snippet.topLevelComment.snippet.publishedAt),
            replies
        )
    }
    static push_replies(comment,replies){
        return new Schema_comment(
            comment.id,
            comment.snippet.authorDisplayName,
            comment.snippet.authorProfileImageUrl,
            comment.snippet.textOriginal,
            get_convert_cantidad(comment.snippet.likeCount),
            get_time_elapsed(comment.snippet.publishedAt),
            replies
        )
    }
}