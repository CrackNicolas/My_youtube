import React from 'react'

import ComponentNavTop from '../partials/nav_top.js';
import ComponentNavLeft from '../partials/nav_left.js';

export default function ComponentSinInternet(){
    return (
        <React.Fragment>
            <ComponentNavTop/>
            <ComponentNavLeft/>
            <section className="sin-internet">
                <article className="main">
                    
                    <p className="text-1">Conéctate a Internet</p>
                    <p className="text-2">No tienes Internet. Comprueba la conexion.</p>
                    <a className="reintentar" href="/">Reintentar</a>
                </article>
                <article className="footer">
                    Sin conexion a Internet
                </article>
            </section>
        </React.Fragment>
    )
}