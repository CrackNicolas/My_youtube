import React, { useContext, useEffect, useState } from 'react'

import ComponentNavTop from '../partials/menus/nav_top.js';
import ComponentNavLeft from '../partials/menus/nav_left.js';
import ComponentVideosShorts from '../partials/videos_shorts.js';
import ComponentSinInternet from './sin_internet.js';

import {Load_videos_shorts} from '../../controllers/videos.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentShorts(){
    const context_global = useContext(Global_context);

    const [videos,setVideos] = useState([]);
    const [name_icono_selected_nav_left,setName_icono_selected_nav_left] = useState(-1);

    useEffect(() => {
        const load_videos = async () => {
            let new_videos = await Load_videos_shorts("shorts",3);
            setVideos(new_videos);
        }   
        load_videos();    
    },[name_icono_selected_nav_left]);

    let capture_icono_nav_left = (id) => {
        (id==0)? window.location.href = "/" : setName_icono_selected_nav_left(id);
    }

    return (
        (context_global.internet)? 
            <React.Fragment>
                <ComponentNavTop search_query={context_global.search_query}/>
                <ComponentNavLeft capture_icono_nav_left={capture_icono_nav_left} item_selected={name_icono_selected_nav_left}/>
                <ComponentVideosShorts videos={videos}/>
            </React.Fragment>
        :
            <ComponentSinInternet/>
    )
}