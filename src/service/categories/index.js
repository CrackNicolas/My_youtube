import axios from 'axios';
import Schema_categorie from '../../schema/categorie.js';
import { get_petition_url } from '../../logic/functions.js';

export default class Service_categories{
    static async get_all(id){
        let categories = [];
        const promise = await axios.get(get_petition_url("videoCategories?part=snippet&hl=es&regionCode=ES"));
        
        categories.push(Schema_categorie.push(undefined,id))
        for(let categorie of promise.data.items){
            if(categorie.snippet.assignable && categorie.snippet.title.split(" ")[0]!==undefined){
                categories.push(Schema_categorie.push(categorie,id));
            }
        }
        return categories;
    }
}