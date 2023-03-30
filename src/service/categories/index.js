import axios from 'axios';
import Schema_categorie from '../../schema/categorie.js';
import { get_petition_url } from '../../logic/functions.js';

export default class Service_categories{
    static names_categories_no_disponibles = ["Viajes","Formación"]
    static async get_all(id){
        let categories = [];
        const promise = await axios.get(get_petition_url("videoCategories?part=snippet&hl=es&regionCode=ES"));

        categories.push(Schema_categorie.push_special("Todos",id))
        categories.push(Schema_categorie.push_special("En directo",id))
        for(let categorie of promise.data.items){
            let name_categorie = categorie.snippet.title.split(" ")[0];
            if(categorie.snippet.assignable && name_categorie!==undefined && !Service_categories.names_categories_no_disponibles.includes(name_categorie) ){
                categories.push(Schema_categorie.push(categorie,id));
            }
        }
        categories.push(Schema_categorie.push_special("Subidas recientes",id))
        categories.push(Schema_categorie.push_special("Novedad para ti",id))
        return categories;
    }
}