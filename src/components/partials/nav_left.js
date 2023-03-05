import React from 'react'

export default function ComponentNavLeft(){
    return (
        <nav className="nav-left">
            <a className="icon" href="/" title="Inicio">
                <ion-icon name="home"></ion-icon>
                <p>Inicio</p>
            </a>
            <a className="icon icon-triangulo" href="" title="Shorts">
                <ion-icon name="triangle-outline"></ion-icon>
                <p>Shorts</p>
            </a>
            <a className="icon icon-cuadrado" href="" title="Supscripciones">
                <ion-icon name="copy-outline"></ion-icon>
                <p>Supscripciones</p>
            </a>
            <a className="icon" href="" title="Biblioteca">
                <ion-icon name="library-outline"></ion-icon>
                <p>Biblioteca</p>
            </a>
        </nav>
    )
}