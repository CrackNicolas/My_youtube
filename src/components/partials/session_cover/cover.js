import '../../../styles/partials/session_cover/cover.css';

export default function ComponentCover({icono,texto}){
    const get_texto = (texto,grado) => {
        switch(texto){
            case "Subscriptions":
                return (grado==1)? "No te pierdas los nuevos videos" : "Accede para ver las actualizaciones de tus canales de YouTube favoritos";
            break;
            case "Biblioteca":
                return (grado==1)? "Disfruta de tus videos favoritos" : "Accede para mirar los videos que te gustaron o que guardaste";
            break;
        }
    }
    
    return (
        <section className="cover">
            <article>
                <div className={(icono==="albums")? "icono-subscription" : "icono"}>
                    <ion-icon name={icono+"-outline"}></ion-icon>
                </div>
                <h3>{get_texto(texto,1)}</h3>
                <p>{get_texto(texto,2)}</p>
                <div>
                    <a href="/logaut">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <span>Acceder</span>
                    </a>
                </div>
            </article>
        </section>
    )
}