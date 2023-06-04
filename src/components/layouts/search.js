import { useContext, Fragment } from "react";

import ComponentSinInternet from './sin_internet.js';
import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentSearchVideos from "../partials/videos/search.js";

import { Global_context } from "../../context/global_context.js";

export default function ComponentSearch(){
    const context_global = useContext(Global_context);

    return (
        (context_global.internet)? 
            <Fragment>
                <ComponentNavTop search_query={context_global.search_query} channel={context_global.channel}/>
                <ComponentNavLeft capture_icono_nav_left={context_global.capture_id_categorie} item_selected="0"/>
                <ComponentSearchVideos videos={context_global.videos}/>
            </Fragment>
        :
            <ComponentSinInternet/>
    );
}