import React, { useContext, useState } from 'react';

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentCover from '../partials/session_cover/cover.js';
import ComponentSinInternet from './sin_internet.js';

import {Global_context} from '../../context/global_context.js';

import '../../styles/layouts/subscriptions.css';

export default function ComponentSubscriptions(){
    const context_global = useContext(Global_context);

    const [name_icono_selected_nav_left,setName_icono_selected_nav_left] = useState(-2);

    let capture_icono_nav_left = (id) => {
        (id==-2)?
            setName_icono_selected_nav_left(id)
        :   
            window.location.href = (id==0)? "/" : (id==-1)? "/shorts" : "/feed/library";
    }

    return (
        (context_global.internet)?
            <React.Fragment>
                <ComponentNavTop search_query={context_global.search_query} user={context_global.user}/>
                <ComponentNavLeft capture_icono_nav_left={capture_icono_nav_left} item_selected={name_icono_selected_nav_left}/>
                <ComponentCover icono="albums" texto="Subscriptions"/>
            </React.Fragment>
        :
            <ComponentSinInternet/>
    )
}