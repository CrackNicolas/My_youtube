import { Fragment, useContext, useState, useEffect } from 'react';

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentListSubscriptions from '../partials/lists/manage_subscriptions.js';
import ComponentSinInternet from './sin_internet.js';

import {Load_channels_subscriptions} from '../../controllers/subscriptions.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentChannels(){
    const context_global = useContext(Global_context);

    const [channels,setChannels] = useState();

    useEffect(() => {
        const load_channels = async (id_channel) => {
            let new_channels = await Load_channels_subscriptions(id_channel);
            setChannels(new_channels);
        }
        load_channels(context_global.channel.id);
    },[]);

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
            case -3:
                window.location.href = "/feed/library";
            break;
        }
    }

    return (
        (context_global.internet)?
            <Fragment>
                <ComponentNavTop search_query={context_global.search_query} channel={context_global.channel}/>
                <ComponentNavLeft capture_icono_nav_left={capture_icono_nav_left} item_selected="-4"/>
                <ComponentListSubscriptions channels={channels}/>
            </Fragment>
        :
            <ComponentSinInternet/>
    )
}