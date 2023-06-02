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
                    <img src="/images/youtube.png"></img>
                </p>
                <p>Acceder</p>
                <p>Continuar con YouTube</p>
                <input type="text" onChange={(e) => capture_channel(e)} placeholder="Id de su canal..."></input>
                <div className='button'>
                    <a href={"/"+id_channel}>
                        <ion-icon name="send-outline"></ion-icon>
                        <span>Acceder</span>
                    </a>
                </div>
            </article>
        </section>
    )
}