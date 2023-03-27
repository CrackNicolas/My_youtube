import {useState} from "react";

import ComponentNavOptionsComments from '../menus/options_comments.js';

import '../../../styles/partials/lists/comments_shorts.css';

export default function ComponentListCommentsShorts({video,get_style_option,index,visibility_option}){
    const [options_selected,setOptions_selected] = useState(false);
    
    const options_order_comments = () => {
        setOptions_selected(!options_selected);
    }
    const get_style = () => {
        return (options_selected)? {visibility: "visible"} : {visibility: "hidden"};
    }

    return (
        <section className="comments-shorts" style={get_style_option(index)}>
            <article className="header">
                <div className="name">
                    <p>Comentarios</p>
                    <span>{video.comments_count}</span>
                </div>
                <div className="icons">
                    <ion-icon onClick={() => options_order_comments()} name={(options_selected)? "options":"options-outline"}></ion-icon>
                    <ion-icon onClick={(e) => visibility_option(e,"2")} name="close-outline"></ion-icon>
                </div>
            </article>
            <ComponentNavOptionsComments get_style={get_style}/>
        </section>
    )
}