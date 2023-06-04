import { useContext, useEffect, useState, Fragment } from 'react';

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentVideosSubscriptions from '../partials/videos/subscriptions.js';
import ComponentCover from '../partials/session_cover/cover.js';
import ComponentSinInternet from './sin_internet.js';

import Load_subscriptions from '../../controllers/subscriptions.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentSubscriptions(){
    const context_global = useContext(Global_context);

    const [name_icono_selected_nav_left,setName_icono_selected_nav_left] = useState(-2);
    const [videos,setVideos] = useState();

    useEffect(() => {
        const load_subscriptions = async () => {
            let new_videos = await Load_subscriptions(context_global.channel.id);
            setVideos(new_videos);
        }
        load_subscriptions();
    },[]);

    let capture_icono_nav_left = (id) => {
        switch(id){
            case 0:
                window.location.href = "/";
            break;
            case -1:
                window.location.href = "/shorts";
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
            <Fragment>
                <ComponentNavTop search_query={context_global.search_query} channel={context_global.channel}/>
                <ComponentNavLeft capture_icono_nav_left={capture_icono_nav_left} item_selected={name_icono_selected_nav_left}/>
                {
                    (context_global.channel===undefined)?
                        <ComponentCover icono="albums" texto="Subscriptions"/>
                    :
                        <ComponentVideosSubscriptions videos={videos}/>
                }
            </Fragment>
        :
            <ComponentSinInternet/>
    )
}