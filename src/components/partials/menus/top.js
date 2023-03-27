import { useState } from "react";

import ComponentNavToggler from "./toggler.js";
import ComponentNavOptionsCreateVideo from './options_create_video.js';
import ComponentSearchMicro from '../search/micro.js';
import ComponentNavOptionsNotification from "./options_notification.js";
import ComponentSearchSuggestions from "../search/suggestions.js";

import Schema_styles_nav_top from '../../../styles/schema/styles_nav_top.js';

import {Load_suggestions} from '../../../controllers/videos.js';

import '../../../styles/partials/menus/top.css';

export default function ComponentNavTop({search_query}){
    const [styles, setStyles] = useState(Schema_styles_nav_top.model);
    const [action_menu,setAction_menu] = useState(true);
    const [name_selected_icon, setName_selected_icon] = useState();
    const [style_seggestions,setStyle_seggestions] = useState();
    const [list_suggestions,setList_suggestions] = useState([]);
    const [search,setSearch] = useState();

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
                (name_selected_icon!=undefined)?
                    <div className="load-icons">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                :
                <div className="icons">
                    <div className="create-video">
                        <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="videocam-outline")? "videocam":"videocam-outline" } title="Crear"></ion-icon>
                    </div>
                    <ComponentNavOptionsCreateVideo get_style={get_style}/>
                    <div className="notification">
                        <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="notifications-outline")? "notifications":"notifications-outline" } title="Notificaciones"></ion-icon>
                    </div>
                    <img className="perfil" src="/images/my_perfil.jpg" alt="Perfil del autor"/>                
                    <ComponentNavOptionsNotification get_style={get_style}/>
                </div>
            }
        </nav>
    );
}