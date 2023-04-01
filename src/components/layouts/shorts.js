import React, { useContext, useEffect, useState } from 'react'

import { useParams } from "react-router-dom";

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentVideosShorts from '../partials/videos/shorts.js';
import ComponentSinInternet from './sin_internet.js';

import {Load_videos_shorts} from '../../controllers/videos.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentShorts(){
    const context_global = useContext(Global_context);

    const {name,id} = useParams();

    const [videos,setVideos] = useState([]);
    const [name_icono_selected_nav_left,setName_icono_selected_nav_left] = useState(-1);

    useEffect(() => {
        const load_videos = async () => {
            let new_videos = await Load_videos_shorts(name+" shorts",3,id);
            setVideos(new_videos);
        }   
        load_videos();    
    },[name_icono_selected_nav_left]);

    let capture_icono_nav_left = (id) => {
        switch(id){
            case 0:
                window.location.href = "/";
            break;
            case -2:
                window.location.href = "/feed/subscriptions";
            break;
            case -3:
                window.location.href = "/feed/library";
            break;
            default:
                setName_icono_selected_nav_left((id==0)? undefined : id);
            break;
        }
    }

    return (
        (context_global.internet)? 
            <React.Fragment>
                <ComponentNavTop search_query={context_global.search_query} user={context_global.user}/>
                <ComponentNavLeft capture_icono_nav_left={capture_icono_nav_left} item_selected={name_icono_selected_nav_left}/>
                <ComponentVideosShorts videos={videos}/>
            </React.Fragment>
        :
            <ComponentSinInternet/>
    )
}