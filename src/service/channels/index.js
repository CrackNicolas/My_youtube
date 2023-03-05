import axios from 'axios';
import {get_petition_url} from '../../logic/functions.js';

export default class Service_channels{
    static get_id(id){
        const promise = axios.get(get_petition_url("channels?part=snippet&part=statistics&id="+id+"&hl=es&maxResults=1"));
        return promise;
    }
}