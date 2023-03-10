import Service_categories from '../service/categories/index.js';
import Service_playlists from "../service/playlists/index.js";
import Service_channels from '../service/channels/index.js';

import Schema_categorie from "../schema/categorie.js";

export default function Load_categories_general(categorie_selected){
    return Service_categories.get_all(categorie_selected);
}
export async function Load_categories_playlist(channel_id){
    let new_categories = [], no_repeat;
    let search_list_id_playlist = await Service_channels.get_details(channel_id);
            
    new_categories.push(new Schema_categorie("0","Todos","selected"));

    for(let item of search_list_id_playlist.data.items){
        if(item.contentDetails !== undefined && item.contentDetails.playlists !== undefined){
            const new_categorie_playlist = await Service_playlists.get_datails_playlits(item.contentDetails.playlists[0]);
            if(new_categorie_playlist.data.items[0]!==undefined){
                if(no_repeat != new_categorie_playlist.data.items[0].snippet.channelTitle){
                    new_categories.push(Schema_categorie.push_categorie_playlist(new_categorie_playlist));
                }
                no_repeat = new_categorie_playlist.data.items[0].snippet.channelTitle
            }                
        }
    }
    new_categories.push(new Schema_categorie("0","Relacionados","no-selected"));
    return new_categories;
}