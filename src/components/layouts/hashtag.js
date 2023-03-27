import React, { useContext, useEffect, useState }  from "react"

import { useParams } from "react-router-dom";

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentVideosLayouts from '../partials/videos/home.js';
import ComponentHeaderHashtag from '../partials/headers/hashtag.js';
import ComponentSinInternet from './sin_internet.js';

import Load_videos from '../../controllers/videos.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentHashtag(){
    const context_global = useContext(Global_context);

    const [videos,setVideos] = useState([]);

    let {name,shorts} = useParams();

    useEffect(() => {
        const load_videos = async () => {
            let search = (shorts!=undefined)? name+" "+shorts : name;
            let new_videos = await Load_videos(search,"",5);
            setVideos(new_videos);
        }   
        load_videos();    
    },[]);

    return (
        (context_global.internet)?
            <React.Fragment>
                <ComponentNavTop search_query={context_global.search_query}/>
                <ComponentNavLeft/>
                <ComponentHeaderHashtag videos={videos} name_hashtag={name}/>
                <ComponentVideosLayouts videos={videos}/>
            </React.Fragment>
        :
            <ComponentSinInternet/>
    )
}