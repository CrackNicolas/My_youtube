import React, { useState } from "react";

import ComponentNavToggler from "./nav_toggler.js";

import Schema_styles_nav_top from '../../styles/schema/styles_nav_top.js';

export default function ComponentNavTop({search_query}){
    const [styles, setStyles] = useState(Schema_styles_nav_top.model);
    const [action_menu,setAction_menu] = useState(true);

    const view_menu = () => {
        setStyles( Schema_styles_nav_top.format( (action_menu)? 1 : 2));
        setAction_menu(!action_menu);
    }

    return (
        <nav className="nav-top">
            <div className="logo">
                <div className="menu" onClick={() => view_menu()}>
                    <ion-icon name="menu-outline"></ion-icon>
                    <ComponentNavToggler styles={styles}/>
                </div>
                <a href="/">
                    <img src="/images/youtube.png"/>
                    <p>YouTube</p>
                </a>
            </div>
            <form action="/results" method="GET" className="search" title="Buscar">
                <input type="text" name="search_query" defaultValue={search_query} placeholder="Buscar"/>
                <ion-icon class="buscador-oculto" name="search-outline"></ion-icon>
                <button type="submit" className="buscador">
                    <ion-icon name="search-outline"></ion-icon>
                </button>
                <ion-icon class="micro" name="mic" title="Haz búsquedas por voz"></ion-icon>
            </form>
            <div className="icons">
                <div className="icon-video" title="Crear">
                    <div className="video">+</div>
                </div>
                <div className="notification">
                    <ion-icon name="notifications-outline" title="Notificaciones"></ion-icon>
                </div>
            </div>
            <img className="perfil" src="/images/my_perfil.jpg" alt=""/>
        </nav>
    );
}