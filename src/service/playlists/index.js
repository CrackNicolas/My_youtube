import axios from 'axios';

import { get_petition_url } from '../../logic/functions.js';

export default class Service_playlists{
    static get_all(id){
        const promise = axios.get(get_petition_url("playlists?channelId="+id+"&maxResults=1"));
        return promise;
    }
    static get_datails_playlits(id_playlist){
        const promise = axios.get(get_petition_url("playlistItems?part=snippet&playlistId="+id_playlist));
        return promise;
    }
}