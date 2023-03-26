import React from "react";

export default function ComponentNavOptionsComments({get_style}){
    return (
        <div className="nav_filter_comments" style={get_style()}>
            <div className="option">
                Mejores comentarios
            </div>
            <div className="option">
                Más recientes primero
            </div>
        </div>
    )
}