import React, { useContext }  from "react"

import ComponentNavTop from '../partials/nav_top.js';
import ComponentNavLeft from '../partials/nav_left.js';
import ComponentSinInternet from './sin_internet.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentHashtag(){
    const context_global = useContext(Global_context);

    return (
        <React.Fragment>
            <ComponentNavTop search_query={context_global.search_query}/>
            <ComponentNavLeft/>
        </React.Fragment>
    )
}