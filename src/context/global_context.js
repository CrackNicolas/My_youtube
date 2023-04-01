import React, {useState, useEffect} from "react";

import { useLocation, useParams } from 'react-router-dom';

import Load_categories_general from '../controllers/categories.js';
import Load_videos from '../controllers/videos.js';
import Load_channel_user from '../controllers/config.js';

import {get_search_param} from '../logic/functions.js';

export const Global_context = React.createContext({});

export default function GlobalContextProvider({children}){
    let {search} = useLocation();
    let {channel_user} = useParams();
    let search_query = get_search_param(search);

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('token')));
    const [internet,setInternet] = useState(true);
    const [categories,setCategories] = useState([]);
    const [categorie_selected,setCategorie_selected] = useState();
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        const load_user = async (channel) => {
            let new_channel_user = await Load_channel_user(channel);
            localStorage.setItem('token',JSON.stringify(new_channel_user));
            setUser(new_channel_user);
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
        if(channel_user!=undefined){
            load_user(channel_user);
        }
        load_videos();
    },[categorie_selected])

    let capture_id_categorie = (id) => {
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
        <Global_context.Provider value={{user, search_query, capture_id_categorie, categories, videos, internet}}>
            {children}
        </Global_context.Provider>
    )
}