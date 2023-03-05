export default function ComponentListComments({comments}){
    return (
        <div className="list-comments">
            {
                comments.map((comment,index) => {
                    return (
                        <div className="datails-comment" key={index}>
                            <div className="icon">
                                <img src={comment.logo} alt="Logo de comentario"/>
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
                    )
                })
            }
        </div>
    );
}