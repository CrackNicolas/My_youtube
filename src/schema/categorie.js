export default class Schema_categorie{
    constructor(id,title,selected){
        this.id = id;
        this.title = title;
        this.selected = selected;
    }
    static push_special(categorie,id){
        switch(categorie){
            case "Todos":
                return new Schema_categorie(
                    "0",
                    "Todos",
                    (id===0 || id===undefined)? "selected" : "no-selected"
                )
            break;
            case "En directo":
                return new Schema_categorie(
                    -10,
                    "En directo",
                    (id===-10)? "selected" : "no-selected"
                )
            break;
            case "Subidas recientes":
                return new Schema_categorie(
                    -20,
                    "Subidas recientes",
                    (id===-20)? "selected" : "no-selected"
                )
            break;
            case "Novedad para ti":
                return new Schema_categorie(
                    -30,
                    "Novedad para ti",
                    (id===-30)? "selected" : "no-selected"
                )
            break;
        }
    }
    static push(categorie,id){
        return new Schema_categorie(
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