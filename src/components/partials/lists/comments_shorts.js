import React, {useEffect, useState} from "react";

import ComponentNavOptionsComments from '../menus/options_comments.js';
import ComponentListComments from "../lists/comments_home.js";
import ComponentAddComment from '../headers/add_comments.js';

import Load_comments from "../../../controllers/comments.js";

import '../../../styles/partials/lists/comments_shorts.css';

export default function ComponentListCommentsShorts({video,get_style_option,index,visibility_option}){
    const [options_selected,setOptions_selected] = useState(false);
    const [comments_video_selected, setComments_video_selected] = useState([]);

    useEffect(() => {
        const load_comments_video_selected = async (id_video) => {
            let comments = await Load_comments(id_video);
            setComments_video_selected(comments);
        }
        load_comments_video_selected(video.id);
    },[]);

    const options_order_comments = () => {
        setOptions_selected(!options_selected);
    }
    const get_style = () => {
        return (options_selected)? {visibility: "visible"} : {visibility: "hidden"};
    }
    const close = (e) => {
        visibility_option(e,"2");
        setOptions_selected(false);
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
                    <ion-icon onClick={(e) => close(e) } name="close-outline"></ion-icon>
                </div>
            </article>
            <ComponentNavOptionsComments get_style={get_style}/>
            <article className="comments">
                <ComponentAddComment icono={false}/>
                <ComponentListComments comments={comments_video_selected} icono="caret"/>
            </article>
        </section>
    )
}