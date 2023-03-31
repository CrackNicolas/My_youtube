import { useState } from 'react';

import '../../styles/layouts/logaut.css';

export default function ComponentLogaut(){
    const [id_channel,setId_channel] = useState();

    const capture_channel = (e) => {
        setId_channel(e.target.value);
    }

    return (
        <section className="logaut">
            <article className="main">
                <p>
                    <img src="/images/google.png"></img>
                </p>
                <p>Acceder</p>
                <p>Continuar con YouTube</p>
                <input type="text" onChange={(e) => capture_channel(e)} placeholder="Correo electrónico o teléfono"></input>
                <span>¿Olvidaste el correo electrónico?</span>
                <p className="description">
                    ¿Esta no es tu computadora? Usa el modo de invitado para navegar de forma privada.
                    <strong>Más información</strong>
                </p>
                <div className='buttons'>
                    <a href="">Crear cuenta</a>
                    <a href={"/"+id_channel}>Siguiente</a>
                </div>
            </article>
            <article className="footer">
                <a>
                    <span>Español (Latinoamérica)</span>
                    <ion-icon name="caret-down-outline"></ion-icon>
                </a>
                <a>Ayuda</a>
                <a>Privacidad</a>
                <a>Condiciones</a>
            </article>
        </section>
    )
}