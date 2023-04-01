import axios from 'axios';
import {get_petition_url} from '../../logic/functions.js';

export default class Service_subscriptions{
    static async get_all(channel_id){
        let promise = await axios.get(get_petition_url("subscriptions?part=snippet&channelId="+channel_id+"&maxResults=50"));
        return promise;
    }
}