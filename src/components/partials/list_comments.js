import React, { useState } from "react";

export default function ComponentListComments({comments}){
    const [replies_selected,setReplies_selected] = useState(undefined);

    const View_replies_comment = (e,index) => {
        setReplies_selected( (e.target.name == "chevron-down-outline")? index : undefined );
    }

    const View = (index) => {
        return (index==replies_selected)? "watch_replies" : "replies";
    }
    const View_icon_1 = () => {
        return (replies_selected==undefined)? {display : "none"} : {display : "block"};
    }
    const View_icon_2 = () => {
        return (replies_selected!=undefined)? {display : "none"} : {display : "block"};
    }

    
    return (
        <div className="list-comments">
            {
                comments.map((comment,index) => {
                    return (
                        <div key={index}>
                            <div className="datails-comment">
                                <div className="icon">
                                    <img src={comment.logo} alt="Logo del autor principal de comentario"/>
                                </div>
                                <div className="description">
                                    <p><strong>{comment.autor}</strong>{comment.time_elapsed}</p>
                                    <p>{comment.description}</p>
                                    <div className="btns-comment">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span>{comment.likes}</span>
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <button>Responder</button>
                                    </div>
                                </div>
                                <ion-icon className="option-comment" name="ellipsis-vertical-outline"></ion-icon>
                            </div>
                            {
                                comment.replies_count !== undefined ?
                                    <React.Fragment>
                                        <div className="view-replies">
                                            <ion-icon className="icon-disguise" style={View_icon_1()} onClick={(e) => View_replies_comment(e,index)} name="chevron-up-outline"></ion-icon>
                                            <ion-icon className="icon-view" style={View_icon_2()} onClick={(e) => View_replies_comment(e,index)} name="chevron-down-outline"></ion-icon>
                                            <a className="">
                                                {comment.replies_count}
                                            </a>
                                        </div>
                                        <div className={View(index)}>
                                            {
                                                comment.replies.map((replies,index) => {
                                                    return (
                                                        <div className="datails-comment-replies" key={index}>
                                                            <div className="icon">
                                                                <img src={replies.logo} alt="Logo del autor del comentario"/>
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
                                                            <ion-icon className="option-comment" name="ellipsis-vertical-outline"></ion-icon>
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