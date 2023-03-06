import axios from 'axios';

import {get_petition_url} from '../../logic/functions.js';

export default class Service_comments{
    static get_video_id(id){
        let promise = axios.get(get_petition_url("commentThreads?part=replies&part=snippet&hl=es&maxResults=100&videoId="+id));
        return promise;
    }
}