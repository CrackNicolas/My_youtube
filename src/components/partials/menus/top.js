import { useState } from "react";

import ComponentNavManagement from './management.js';
import ComponentNavToggler from "./toggler.js";
import ComponentNavOptionsCreateVideo from './options_create_video.js';
import ComponentSearchMicro from '../search/micro.js';
import ComponentNavOptionsNotification from "./options_notification.js";
import ComponentSearchSuggestions from "../search/suggestions.js";

import Schema_styles_nav_top from '../../../styles/schema/styles_nav_top.js';

import {Load_suggestions} from '../../../controllers/videos.js';

import '../../../styles/partials/menus/top.css';

export default function ComponentNavTop({search_query,channel,style}){
    const [styles, setStyles] = useState(Schema_styles_nav_top.model);
    const [action_menu,setAction_menu] = useState(true);
    const [name_selected_icon, setName_selected_icon] = useState();
    const [style_seggestions,setStyle_seggestions] = useState();
    const [list_suggestions,setList_suggestions] = useState([]);
    const [search,setSearch] = useState();
    const [visibility_management,setVisibility_management] = useState(false);

    const view_menu = () => {
        setStyles(Schema_styles_nav_top.format( (action_menu)? 1 : 2));
        setAction_menu(!action_menu);
    }
    const prevent_event = (e) => {
        if(search===undefined){
            e.preventDefault();
        }
    }
    const capture_chart = async (e) => {
        setSearch(e.target.value);
        setStyle_seggestions((e.target.value=="")? {} : {visibility : "visible"});
        let new_list_suggestions = await Load_suggestions(search);
        setList_suggestions(new_list_suggestions);
    }
    const visibility_options = (e) => {
        setName_selected_icon(e.target.name);
    }
    const get_style = (name) => {
        return (name === name_selected_icon)? {visibility : "visible"} : {};
    }
    const suggestion_selected = (search) => {
        setSearch(search);
    }
    const style_management = () => {
        return (visibility_management)? {visibility : "visible"} : {visibility : "hidden"};
    }

    return (
        <nav className="nav-top" style={style}>
            <div className="logo">
                <div className="menu" onClick={() => view_menu()}>
                    <ion-icon id="icon-menu" name="menu-outline"></ion-icon>
                    <ComponentNavToggler styles={styles} channel={channel}/>
                </div>
                <a href="/">
                    <img src="/images/youtube.png" title="Página de inicio de YouTube"/>
                    <p title="Página de inicio de YouTube">YouTube</p>
                </a>
            </div>
            <form action="/results" method="GET" className="search" title="Buscar">
                <input type="text" name="search_query" onChange={(e) => capture_chart(e)} defaultValue={search_query} placeholder="Buscar" autoComplete="off"/>
                <ion-icon class="buscador-oculto" name="search-outline"></ion-icon>
                <button type="submit" className="buscador" onClick={(e) => prevent_event(e)}>
                    <ion-icon name="search-outline"></ion-icon>
                </button>
                <ComponentSearchSuggestions suggestion_selected={suggestion_selected} list_suggestions={list_suggestions} style={style_seggestions}/>
                <ion-icon onClick={(e) => visibility_options(e)} class="micro" name={(name_selected_icon==="mic-outline")? "mic":"mic-outline"} title="Haz búsquedas por voz"></ion-icon>
            </form>
            <ComponentSearchMicro get_style={get_style} visibility_options={visibility_options}/>            
            {
                (channel==undefined)?
                    <div className="acceder">
                        <ion-icon className="option" name="ellipsis-vertical-outline"></ion-icon>
                        <a href="/logaut">
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <span>Acceder</span>
                        </a>
                    </div>
                :
                    <div className="icons">
                        <ion-icon class="connect-dispositivo" name="desktop-outline"></ion-icon>
                        <ion-icon class="icono-buscador-oculto" name="search-outline"></ion-icon>
                        <ion-icon onClick={(e) => visibility_options(e)} class="micro-oculto" name={(name_selected_icon==="mic-outline")? "mic":"mic-outline"} title="Haz búsquedas por voz"></ion-icon>
                        <div className="create-video">
                            <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="videocam-outline")? "videocam":"videocam-outline" } title="Crear"></ion-icon>
                        </div>
                        <ComponentNavOptionsCreateVideo get_style={get_style}/>
                        <div className="notification">
                            <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="notifications-outline")? "notifications":"notifications-outline" } title="Notificaciones"></ion-icon>
                        </div>
                        <img onClick={() => setVisibility_management(!visibility_management)} className="perfil" src={channel.logo} alt="Perfil del autor"/>          
                        <ComponentNavManagement style={style_management} channel={channel}/>     
                        <ComponentNavOptionsNotification get_style={get_style}/>
                    </div>
            }
        </nav>
    );
}