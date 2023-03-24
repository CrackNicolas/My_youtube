import React, { useContext, useEffect, useState } from 'react'

import ComponentNavTop from '../partials/menus/nav_top.js';
import ComponentNavLeft from '../partials/menus/nav_left.js';
import ComponentVideosShorts from '../partials/videos_shorts.js';
import ComponentSinInternet from './sin_internet.js';

import Load_videos from '../../controllers/videos.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentShorts(){
    const context_global = useContext(Global_context);

    const [videos,setVideos] = useState([]);

    useEffect(() => {
        const load_videos = async () => {
            let new_videos = await Load_videos("shorts","",10);
            setVideos(new_videos);
        }   
        load_videos();    
    },[]);

    return (
        (context_global.internet)? 
            <React.Fragment>
                <ComponentNavTop search_query={context_global.search_query}/>
                <ComponentNavLeft/>
                <ComponentVideosShorts videos={videos}/>
            </React.Fragment>
        :
            <ComponentSinInternet/>
    )
}