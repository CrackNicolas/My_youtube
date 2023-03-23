import React from "react";

export default function ComponentSearchSuggestions({suggestion_selected,style,list_suggestions}){
    return (
        <section className="search-suggestions" style={style}>
            <p className="message">
                Videos relacionados con tu búsqueda
            </p>
            {
                list_suggestions.map((seggestion,index) => {
                    return (
                        <a href={("/results/?search_query="+seggestion)} onClick={() => suggestion_selected(seggestion)} key={index}>
                            <ion-icon name="search-outline"></ion-icon>
                            <p>{seggestion}</p>
                        </a>
                    )
                })
            }
            <p className="denunciar">
                <i>Denunciar predicciones de búsqueda</i>
            </p>
        </section>
    )
}