export default function ComponentAddComment({icono}){
    return (
        <article className="body">
            <div className="add-comment">
                <img src="/images/my_perfil.jpg" alt="Imagen de perfil del autor de la cuenta youtube"/>
                <textarea type="text" placeholder="Añade un comentario..."></textarea>
                <div className="push-comment">
                    {
                        (icono)? <ion-icon name="happy-outline"></ion-icon> : ""
                    }
                    <div className="buttons">
                        <button className="close" title="Cancelar" name="Cancelar">Cancelar</button>
                        <button className="add" title="Comentar" name="Comentar">Comentar</button>
                    </div>
                </div>
            </div>
        </article>
    )
}