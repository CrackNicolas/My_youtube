import { useState, Fragment } from "react"

import ComponentNavOptionsComments from '../menus/options_comments.js';
import ComponentAddComment from '../headers/add_comments.js';

import '../../../styles/partials/headers/comments.css';

export default function ComponentHeaderComments({comments_count,channel}){
    const [options_selected,setOptions_selected] = useState(false);
    
    const options_order_comments = () => {
        setOptions_selected(!options_selected);
    }
    const get_style = () => {
        return (options_selected)? {display: "block"} : {display: "none"};
    }
    
    return (
        <Fragment>
            <div className="top">
                {comments_count} comentarios
                <button onClick={() => options_order_comments()} className="order" title="Ordenar los comentarios" name="Ordenar los comentarios">
                    <ion-icon name={(options_selected)? "options":"options-outline" }></ion-icon>
                    Ordenar por
                </button>
                <ComponentNavOptionsComments get_style={get_style}/>
            </div>
            <ComponentAddComment icono={true} channel={channel}/>
        </Fragment>
    )
}