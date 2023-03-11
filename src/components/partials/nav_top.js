import React, { useState } from "react";

import ComponentNavToggler from "./nav_toggler.js";
import ComponentNavOptionsCreateVideo from './nav_options_create_video.js';
import ComponentSearchMicro from './search_micro.js';
import ComponentNavOptionsNotification from "./nav_options_notification.js";

import Schema_styles_nav_top from '../../styles/schema/styles_nav_top.js';

export default function ComponentNavTop({search_query}){
    const [styles, setStyles] = useState(Schema_styles_nav_top.model);
    const [action_menu,setAction_menu] = useState(true);
    const [name_selected_icon, setName_selected_icon] = useState();

    const view_menu = () => {
        setStyles( Schema_styles_nav_top.format( (action_menu)? 1 : 2));
        setAction_menu(!action_menu);
    }
    const prevent_event = (e) => {
        if(search_query===null){
            e.preventDefault();
        }
    }
    const capture_chart = (e) => {
        search_query = e.target.value
    }
    const visibility_options = (e) => {
        setName_selected_icon(e.target.name);
    }
    const get_style = (name) => {
        if(name === name_selected_icon){
            return {visibility : "visible"};
        }
        return {};
    }

    return (
        <nav className="nav-top">
            <div className="logo">
                <div className="menu" onClick={() => view_menu()}>
                    <ion-icon name="menu-outline"></ion-icon>
                    <ComponentNavToggler styles={styles}/>
                </div>
                <a href="/">
                    <img src="/images/youtube.png" title="Página de inicio de YouTube"/>
                    <p title="Página de inicio de YouTube">YouTube</p>
                </a>
            </div>
            <form action="/results" method="GET" className="search" title="Buscar">
                <input type="text" name="search_query" onChange={(e) => capture_chart(e)} defaultValue={search_query} placeholder="Buscar"/>
                <ion-icon class="buscador-oculto" name="search-outline"></ion-icon>
                <button type="submit" className="buscador" onClick={(e) => prevent_event(e)}>
                    <ion-icon name="search-outline"></ion-icon>
                </button>
                <ion-icon onClick={(e) => visibility_options(e)} class="micro" name={(name_selected_icon==="mic-outline")? "mic":"mic-outline"} title="Haz búsquedas por voz"></ion-icon>
            </form>
            <ComponentSearchMicro get_style={get_style} visibility_options={visibility_options}/>            
            <div className="icons">
                <div className="create-video">
                    <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="videocam-outline")? "videocam":"videocam-outline" } title="Crear"></ion-icon>
                </div>
                <ComponentNavOptionsCreateVideo get_style={get_style}/>
                <div className="notification">
                    <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="notifications-outline")? "notifications":"notifications-outline" } title="Notificaciones"></ion-icon>
                </div>
                <img className="perfil" src="/images/my_perfil.jpg" alt=""/>                
                <ComponentNavOptionsNotification get_style={get_style}/>
            </div>
        </nav>
    );
}