import axios from 'axios';
import Categorie from '../../schema/categorie.js';
import {get_petition_url} from '../../logic/functions.js';

export default class Categories{
    static async get_all(id){
        let categories = [];
        const promise = await axios.get(get_petition_url("videoCategories?part=snippet&hl=es&regionCode=ES"));
        
        let categorie_all_selected = (id===0 || id===undefined)? "selected" : "no-selected";
        categories.push(new Categorie("0","Todos",categorie_all_selected));
        
        for(let categorie of promise.data.items){
            if(categorie.snippet.assignable && categorie.snippet.title.split(" ")[0]!==undefined){
                let categorie_selected = (categorie.id === id)? "selected" : "no-selected";
                categories.push(new Categorie(categorie.id,categorie.snippet.title.split(" ")[0],categorie_selected));
            }
        }
        return categories;
    }
}