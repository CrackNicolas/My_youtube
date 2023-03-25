import React from 'react'

export default function ComponentNavLeft({capture_icono_nav_left,item_selected}){
    return (
        <nav className="nav-left">
            <a onClick={() => capture_icono_nav_left(0)} className="icon" title="Inicio">
                <ion-icon name={(item_selected!=0)? "home-outline":"home"}></ion-icon>
                <p>Inicio</p>
            </a>
            <a onClick={() => capture_icono_nav_left(-1)} className="icon" title="Shorts">
                <ion-icon name={(item_selected!=-1)? "color-filter-outline":"color-filter"}></ion-icon>
                <p>Shorts</p>
            </a>
            <a onClick={() => capture_icono_nav_left(-2)} className="icon" title="Supscripciones">
                <ion-icon name={(item_selected!=-2)? "copy-outline":"copy"}></ion-icon>
                <p>Supscripciones</p>
            </a>
            <a onClick={() => capture_icono_nav_left(-3)} className="icon" title="Biblioteca">
                <ion-icon name={(item_selected!=-3)? "library-outline":"library"}></ion-icon>
                <p>Biblioteca</p>
            </a>
        </nav>
    )
}