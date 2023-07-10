import { useContext, useEffect, useState, Fragment }  from "react"
import { useParams } from "react-router-dom";

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentVideosLayouts from '../partials/videos/home.js';
import ComponentVideosHashtagShorts from '../partials/videos/hashtag_shorts.js';
import ComponentHeaderHashtag from '../partials/headers/hashtag.js';
import ComponentSinInternet from './sin_internet.js';

import Load_videos from '../../controllers/videos.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentHashtag(){
    const context_global = useContext(Global_context);

    const [videos,setVideos] = useState([]);
    const [page,setPage] = useState("");
    const [loading,setLoading] = useState(false);

    let {name,shorts} = useParams();

    const load_videos = async (page) => {
        let search = (shorts!=undefined)? name+" "+shorts : name;
        let new_videos = await Load_videos(search,"",5,(shorts!=undefined)? "standard":"medium",page);
        setPage(new_videos.page);
        if(videos.length>=5){
            setVideos((prev) => [...prev,...new_videos.videos]);
        }else{
            setVideos(new_videos.videos);
        }
        setLoading(false);
    }

    const handle_scroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            load_videos(page);    
            setLoading(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handle_scroll);
        return () => window.removeEventListener('scroll',handle_scroll);
    },[page])

    return (
        (context_global.internet)?
            <Fragment>
                <ComponentNavTop search_query={context_global.search_query} channel={context_global.channel}/>
                <ComponentNavLeft capture_icono_nav_left={context_global.capture_id_categorie} item_selected="0"/>
                <ComponentHeaderHashtag videos={videos} name_hashtag={name} option_selected={shorts}/>
                {
                    (shorts===undefined)?
                        <ComponentVideosLayouts videos={videos} loading={loading}/>
                    :
                        <ComponentVideosHashtagShorts videos={videos} name={name}/>
                }
            </Fragment>
        :
            <ComponentSinInternet/>
    )
}