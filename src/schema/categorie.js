export default class Schema_categorie{
    constructor(id,title,selected){
        this.id = id;
        this.title = title;
        this.selected = selected;
    }
    static push(categorie,id){
        return (categorie===undefined)?
            new Schema_categorie(
                "0",
                "Todos",
                (id===0 || id===undefined)? "selected" : "no-selected"
            )
        :
            new Schema_categorie(
                categorie.id,
                categorie.snippet.title.split(" ")[0],
                (categorie.id === id)? "selected" : "no-selected"
            )
    }
    static push_categorie_playlist(new_categorie_playlist){
        return new Schema_categorie(
            new_categorie_playlist.data.items[0].snippet.playlistId,
            new_categorie_playlist.data.items[0].snippet.channelTitle.split(" ")[0],
            "no-selected"
        )
    }
}