export default function ComponentAddComment({icono,channel}){
    return (
        <article className="body">
            <div className="add-comment">
                <img src={(channel!=undefined)? channel.logo : "/images/spiner.jpg"} alt="Imagen de perfil del autor de la cuenta youtube"/>
                <div className="content-add-comment">
                    <textarea type="text" placeholder="Añade un comentario..."></textarea>
                    <div className="push-comment">
                        {(icono) && <ion-icon name="happy-outline"></ion-icon> }
                        <div className="buttons">
                            <button className="close" title="Cancelar" name="Cancelar">Cancelar</button>
                            <button className="add" title="Comentar" name="Comentar">Comentar</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}