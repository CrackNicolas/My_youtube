import React, {useState, useEffect} from "react";

import { useLocation, useParams } from 'react-router-dom';

import Load_categories_general from '../controllers/categories.js';
import Load_videos from '../controllers/videos.js';

import {get_search_param} from '../logic/functions.js';

export const Global_context = React.createContext({});

export default function GlobalContextProvider({children}){
    let {search} = useLocation();
    let {channel_user} = useParams();
    let search_query = get_search_param(search);

    const [user,setUser] = useState();
    const [internet,setInternet] = useState(true);
    const [categories,setCategories] = useState([]);
    const [categorie_selected,setCategorie_selected] = useState();
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        const load_user = async () => {
            try{
                
            }catch(error){
                if(!error.response){
                    setInternet(false);
                }
            }
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
        load_user(channel_user);
        load_videos();

    },[categorie_selected])

    let capture_id_categorie = (id) => {
        (id==-1)? window.location.href = "/shorts" : setCategorie_selected((id==0)? undefined : id);
    }

    return (
        <Global_context.Provider value={{user, search_query, capture_id_categorie, categories, videos, internet}}>
            {children}
        </Global_context.Provider>
    )
}