import axios from 'axios';

import { get_petition_url } from '../../logic/functions.js';

export default class Service_playlists{
    static get_all(id){
        const promise = axios.get(get_petition_url("playlists?part=snippet&channelId="+id+"&maxResults=1"));
        return promise;
    }
    static async get_all_id(id){
        const promise = await axios.get(get_petition_url("playlistItems?part=contentDetails&playlistId="+id+"&maxResults=2"));
        return promise;
    }
}