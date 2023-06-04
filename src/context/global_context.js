import {useState, useEffect, createContext} from "react";

import { useLocation, useParams } from 'react-router-dom';

import Load_categories_general from '../controllers/categories.js';
import Load_videos from '../controllers/videos.js';
import Load_channel from '../controllers/config.js';

import {get_search_param} from '../logic/functions.js';

export const Global_context = createContext({});

export default function GlobalContextProvider({children}){
    let {search} = useLocation();
    let {id_channel} = useParams();
    let search_query = get_search_param(search);

    const [channel,setChannel] = useState((localStorage.getItem('token'))? JSON.parse(localStorage.getItem('token')) : undefined);
    const [internet,setInternet] = useState(true);
    const [categories,setCategories] = useState([]);
    const [categorie_selected,setCategorie_selected] = useState();
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        const load_channel = async (id_channel) => {
            let new_channel = await Load_channel(id_channel);
            localStorage.setItem('token',JSON.stringify(new_channel));
            setChannel(new_channel);
            window.location.href = "/";
        }
        const load_categories = async () => {
            try{
                let new_categories = await Load_categories_general(categorie_selected);
                setCategories(new_categories);
            }catch(error){
                if(!error.response){
                    setInternet(false);
                }
            }
        }
        const load_videos = async () => {
            try{
                let new_videos = await Load_videos(search_query,categorie_selected,10,"medium");
                setVideos(new_videos);
            }catch(error){
                if(!error.response){
                    setInternet(false);
                }
            }
        }
 
        if(search_query===null){
            load_categories();
        }
        if(id_channel!=undefined){
            load_channel(id_channel);
        }
        load_videos();
    },[categorie_selected])

    const capture_id_categorie = (id) => {
        switch(id){
            case -1:
                window.location.href = "/shorts";
            break;
            case -2:
                window.location.href = "/feed/subscriptions";
            break;
            case -3:
                window.location.href = "/feed/library";
            break;
            default:
                setCategorie_selected((id==0)? undefined : id);
            break;
        }
    }

    return (
        <Global_context.Provider value={{channel, search_query, capture_id_categorie, categories, videos, internet}}>
            {children}
        </Global_context.Provider>
    )
}