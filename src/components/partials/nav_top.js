import React, { useState } from "react";

import ComponentNavToggler from "./nav_toggler.js";
import ComponentNavOptionsCreateVideo from './nav_options_create_video.js';

import Schema_styles_nav_top from '../../styles/schema/styles_nav_top.js';

export default function ComponentNavTop({search_query}){
    const [styles, setStyles] = useState(Schema_styles_nav_top.model);
    const [action_menu,setAction_menu] = useState(true);
    const [selected_icon_video,setSelected_icon_video] = useState(false);
    const [selected_icon_micro,setSelected_icon_micro] = useState(false);

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
    const visibility_option_video = () => {
        setSelected_icon_video(!selected_icon_video);
    }
    const visibility_option_micro_search_video = () => {
        setSelected_icon_micro(!selected_icon_micro);
    }
    const get_style_icon_video = () => {
        return (selected_icon_video)? 
            {
                background: "var(--color-text-icon-youtube)",
                color: "var(--color-font-primary)"
            }: 
            {
                background: "var(--color-font-primary)",
                color: "var(--color-text-icon-youtube)"
            }
    }
    const get_style_icon_video_options = () => {
        return (selected_icon_video)? {visibility : "visible"} : {visibility : "hidden"};
    }
    const get_style_micro_search_videos = () => {
        return (selected_icon_micro)? {visibility: "visible" } : {visibility: "hidden"};
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
                <ion-icon onClick={() => visibility_option_micro_search_video()} class="micro" name="mic" title="Haz búsquedas por voz"></ion-icon>
            </form>
            <div style={get_style_micro_search_videos()} className="search-video-micro">
                <p>
                    Haz búsquedas por voz 
                </p>
                <p>
                    Para hacer búsquedas por voz, ve a la configuración del navegador y permite el acceso al micrófono.
                </p>
                <p>
                    <ion-icon name="mic" title="Haz búsquedas por voz"></ion-icon>  
                </p>              
            </div>
            <div className="icons">
                <div onClick={() => visibility_option_video()} className="icon-video" title="Crear">
                    <div style={get_style_icon_video()} className="video">+</div>
                </div>
                <ComponentNavOptionsCreateVideo get_style_icon_video_options={get_style_icon_video_options}/>
                <div className="notification">
                    <ion-icon name="notifications-outline" title="Notificaciones"></ion-icon>
                </div>
            </div>
            <img className="perfil" src="/images/my_perfil.jpg" alt=""/>
        </nav>
    );
}