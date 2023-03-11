import React, {useState, useEffect} from "react";

import { useLocation } from 'react-router-dom';

import Load_categories_general from '../controllers/categories.js';
import Load_videos from '../controllers/videos.js';

import {get_search_param} from '../logic/functions.js';

export const Global_context = React.createContext({});

export default function GlobalContextProvider({children}){
    let {search} = useLocation();
    let search_query = get_search_param(search);

    const [categories,setCategories] = useState([]);
    const [categorie_selected,setCategorie_selected] = useState();
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        const load_categories = async () => {
            let new_categories = await Load_categories_general(categorie_selected);
            setCategories(new_categories);
        }
        const load_videos = async () => {
            let new_videos = await Load_videos(search_query,categorie_selected,10);
            setVideos(new_videos);
        }
 
        if(search_query===null){
            load_categories();
        }
        load_videos(search_query);

    },[categorie_selected])

    let capture_id_categorie = (id) => {
        setCategorie_selected((id==0)? undefined : id);
    }

    return (
        <Global_context.Provider value={{search_query, capture_id_categorie, categories, videos}}>
            {children}
        </Global_context.Provider>
    )
}