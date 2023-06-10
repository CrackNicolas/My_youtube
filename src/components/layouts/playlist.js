import { Fragment, useContext, useState } from "react";

import ComponentNavTop from "../partials/menus/top";
import ComponentNavLeft from "../partials/menus/left";
import ComponentVideosPlaylist from "../partials/videos/playlist";
import ComponentSinInternet from "./sin_internet";

import { Global_context } from "../../context/global_context";

export default function ComponentPlaylist(){
    const context_global = useContext(Global_context);

    const [name_icono_selected_nav_left,setName_icono_selected_nav_left] = useState(-3);

    let capture_icono_nav_left = (id) => {
        switch(id){
            case 0:
                window.location.href = "/";
            break;
            case -1:
                window.location.href = "/shorts";
            break;
            case -2:
                window.location.href = "/feed/subscriptions";
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
                <ComponentVideosPlaylist/>
            </Fragment>
        :
            <ComponentSinInternet/>
    )
}