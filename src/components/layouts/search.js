import React, { useContext } from "react";

import ComponentSinInternet from './sin_internet.js';
import ComponentNavTop from '../partials/nav_top.js';
import ComponentNavLeft from '../partials/nav_left.js';
import ComponentSearchVideos from "../partials/videos_search.js";

import { Global_context } from "../../context/global_context.js";

export default function ComponentSearch(){
    const context_global = useContext(Global_context);

    return (
        (context_global.internet)? 
            <React.Fragment>
                <ComponentNavTop search_query={context_global.search_query}/>
                <ComponentNavLeft/>
                <ComponentSearchVideos videos={context_global.videos}/>
            </React.Fragment>
        :
            <ComponentSinInternet/>
    );
}