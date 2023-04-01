import axios from 'axios';

import { get_petition_url } from '../../logic/functions.js';

export default class Service_search{
    static get_video_subscription(id){
        const promise = axios.get(get_petition_url("search?channelId="+id+"&type=video&order=date&maxResults=1"));
        return promise;
    }
}