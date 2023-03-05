export default function Comments(){
    return (
        <article className="comments">
            <div className="top">
                comentarios
                <button className="order">
                    <ion-icon name="list-outline"></ion-icon>
                    Ordenar por
                </button>
            </div>
            <div className="body">
                <div className="add-comment">
                    <img src="/images/my_perfil.jpg" alt=""/>
                    <textarea type="text" placeholder="Añade un comentario..."></textarea>
                    <div className="push-comment">
                        <ion-icon name="happy-outline"></ion-icon>
                        <div className="buttons">
                            <button className="close">Cancelar</button>
                            <button className="add">Comentar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-comments">
                    
            </div>
        </article>
    );
}