import React, { useState } from "react";

import '../../../styles/partials/lists/comments_home.css';

export default function ComponentListComments({comments,icono}){
    const [replies_selecteds,setReplies_selecteds] = useState([]);
    const [options_selected,setOptions_selected] = useState();

    const check_icon_replie = (index) => {
        if(replies_selecteds.includes(index)){
            let new_select_comments = replies_selecteds.filter(item => item != index);
            setReplies_selecteds(new_select_comments);
        }else{
            setReplies_selecteds([...replies_selecteds,index]);
        }
    }
    const watch_replie_selected = (index) => {
        return (replies_selecteds.includes(index))? "watch_replies" : "replies";
    }
    const watch_icon_repli_selected = (index) => {
        return (replies_selecteds.includes(index))? {display : "none"} : {display : "block"};
    }
    const disguise_icon_repli_selected = (index) => {
        return (!replies_selecteds.includes(index))? {display : "none"} : {display : "block"};
    }
    
    const options_comment = (index) => {
        setOptions_selected((index===options_selected)? undefined : index);
    }
    const get_style = (index) => {
        return (index===options_selected)? {visibility: "visible"} : {visibility: "hidden"};
    }

    return (
        <div className="list-comments">
            {
                comments.map((comment,index) => {
                    return (
                        <div key={index}>
                            <div className="datails-comment">
                                <div className="icon">
                                    <img src={comment.logo} alt=""/>
                                </div>
                                <div className="description">
                                    <p>
                                        <strong>
                                            {comment.autor}
                                        </strong>
                                        {comment.time_elapsed}
                                    </p>
                                    <p>{comment.description}</p>
                                    <div className="btns-comment">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span>{comment.likes}</span>
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <button>Responder</button>
                                    </div>
                                </div>
                                <div className="option-comment">
                                    <ion-icon onClick={() => options_comment(index+1)} name="ellipsis-vertical-outline"></ion-icon>
                                </div>
                                <div className="options" style={get_style(index+1)}>
                                    <div className="option">
                                        <ion-icon name="flag-outline"></ion-icon>
                                        <p>Denunciar</p>
                                    </div>
                                </div>
                            </div>
                            {
                                comment.replies_count !== undefined?
                                    <React.Fragment>
                                        <button className="view-replies" onClick={() => check_icon_replie(index)}>
                                            <ion-icon style={ disguise_icon_repli_selected(index) } name={icono+"-up-outline"}></ion-icon>
                                            <ion-icon style={ watch_icon_repli_selected(index) } name={icono+"-down-outline"}></ion-icon>
                                            {comment.replies_count}
                                        </button>
                                        <div className={ watch_replie_selected(index) }>
                                            {
                                                comment.replies.map((replies,index) => {
                                                    return (
                                                        <div className="datails-comment-replies" key={index}>
                                                            <div className="icon">
                                                                <img src={replies.logo} alt=""/>
                                                            </div>
                                                            <div className="description">
                                                                <p><strong>{replies.autor}</strong>{replies.time_elapsed}</p>
                                                                <p>{replies.description}</p>
                                                                <div className="btns-comment">
                                                                    <ion-icon name="thumbs-up-outline"></ion-icon>
                                                                    <span>{replies.likes}</span>
                                                                    <ion-icon name="thumbs-down-outline"></ion-icon>
                                                                    <button>Responder</button>
                                                                </div>
                                                            </div>
                                                            <div className="option-comment">
                                                                <ion-icon onClick={() => options_comment(index-index*2)} name="ellipsis-vertical-outline"></ion-icon>
                                                            </div>
                                                            <div className="options" style={get_style(index-index*2)}>
                                                                <div className="option">
                                                                    <ion-icon name="flag-outline"></ion-icon>
                                                                    <p>Denunciar</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </React.Fragment>
                                : ""
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}