export default class Comment{
    constructor(id,autor,logo,description,likes,time_elapsed,replies,replies_count){
        this.id = id;
        this.autor = autor;
        this.logo = logo;
        this.description = description;
        this.likes = likes;
        this.time_elapsed = time_elapsed;
        this.replies = replies;
        this.replies_count = replies_count;
    }
}