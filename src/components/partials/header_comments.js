import React from "react"

export default function ComponentHeaderComments({comments_count}){
    return (
        <React.Fragment>
            <div className="top">
                {comments_count} comentarios
                <button className="order">
                    <ion-icon name="list-outline"></ion-icon>
                    Ordenar por
                </button>
            </div>
            <div className="body">
                <div className="add-comment">
                    <img src="/images/my_perfil.jpg" alt="Imagen de perfil del autor de la cuenta youtube"/>
                    <textarea type="text" placeholder="Añade un comentario..."></textarea>
                    <div className="push-comment">
                        <ion-icon name="happy-outline"></ion-icon>
                        <div className="buttons">
                            <button className="close" title="Cancelar" name="Cancelar">Cancelar</button>
                            <button className="add" title="Comentar" name="Comentar">Comentar</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}