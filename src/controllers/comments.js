import Service_comments from '../service/comments/index.js';
import Schema_comments from '../schema/comment.js';

export default async function Load_comments(id_video){
    let comments = [], replies_comment = [];
    let search_comments = await Service_comments.get_video_id(id_video);
    
    for(let comment of search_comments.data.items){
        if(comment.snippet.totalReplyCount > 0){
            for(let repli_comment of comment.replies.comments){
                replies_comment.push(Schema_comments.push_replies(repli_comment,undefined,undefined));
            }
        }
        let replies_count = (comment.snippet.totalReplyCount==0)? undefined : (comment.snippet.totalReplyCount>1)? comment.snippet.totalReplyCount+" respuestas" : comment.snippet.totalReplyCount+" respuesta";
        comments.push(Schema_comments.push_general(comment,replies_count,replies_comment));
        replies_comment = [];
    }
    return comments;
}