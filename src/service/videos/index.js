import axios from 'axios';
import {get_petition_url} from '../../logic/functions.js';

export default class Videos{
    static async get_all(search,id_categorie,cantidad){
        let promise;
        if(search==="" || search===undefined || search===null){
            let id = (id_categorie!==undefined)? "&videoCategoryId="+id_categorie : "";
            promise = await axios.get(get_petition_url("videos?part=status&part=statistics&part=snippet&part=contentDetails"+id+"&chart=mostPopular&hl=es&regionCode=ES&maxResults="+cantidad));
        }else{
            promise = await axios.get(get_petition_url("search?part=snippet&q="+search+"&type=video&hl=es&regionCode=ES&maxResults="+cantidad));
        }
        return promise;
    }
    static get_all_id(id){
        let promise = axios.get(get_petition_url("videos?part=snippet&part=contentDetails&part=statistics&id="+id+"&maxResults=1"));
        return promise;
    } 
    static get_all_id_datails(id){
        let promise = axios.get(get_petition_url("videos?part=contentDetails&part=snippet&part=statistics&id="+id));
        return promise;
    } 
}