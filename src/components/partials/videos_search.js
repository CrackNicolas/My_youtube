import React, {useState} from "react";

export default function ComponentSearchVideos({videos}){
    const [option_selected, setOption_selected] = useState();

    let watch_video = (id) => {
        return "/watch/"+id;
    }

    const visibility_option = (e,index) => {
        e.preventDefault();
        setOption_selected( (index===option_selected)? undefined : index);
    }
    const get_style_option = (index) => {
        return (option_selected===index)? { visibility: "visible" } : { visibility: "hidden" };
    }
    const get_style_icon_option = (index) => {
        return (option_selected===index)? { animation: "animate_click_icon_options 0.2s" } : { };
    }

    return (
        <section className="search-videos">
            <section className="filter">
                <button title="Abre los filtros de búsqueda">
                    <ion-icon name="options-outline"></ion-icon>
                    <p>Filtros</p>
                </button>
            </section>
            <section className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <a href={watch_video(video.id)} className="video" key={index}>
                                <div className="imagen">
                                    <img src={video.url_imagen} alt={video.title}/>
                                    <div className="content-icons">
                                        <div className="icons">
                                            <ion-icon name="timer-outline"></ion-icon>
                                            <ion-icon name="play-outline"></ion-icon>
                                        </div>
                                    </div>
                                    <div className="icon-player">
                                        <ion-icon name="play-sharp"></ion-icon>
                                    </div>
                                    <div className="duration">
                                        <span>
                                            {video.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="description">
                                    <p className="title">{video.title}</p>
                                    <div className="visualizaciones">
                                        <p>{video.view_count} .{video.time_elapsed}</p>
                                    </div>
                                    <div className="icon-autor">
                                        <img src={video.channel.logo} alt={video.channel.title}/>
                                        <p>{video.title}</p>
                                    </div>
                                    <p className="description-video">
                                        {video.description}
                                    </p>
                                </div>
                                <div className="icon-options" onClick={(e) => visibility_option(e,index)}>
                                    <ion-icon style={get_style_icon_option(index)} name="ellipsis-vertical"></ion-icon>
                                </div>
                                <div className="options" style={get_style_option(index)}>
                                    <div className="option">
                                        <ion-icon name="add-outline"></ion-icon>
                                        <p>Añadir a la cola</p>
                                    </div>
                                    <div className="option">
                                        <ion-icon name="time-outline"></ion-icon>
                                        <p>Guardar para ver más tarde</p>
                                    </div>
                                    <div className="option">
                                        <ion-icon name="duplicate-outline"></ion-icon>
                                        <p>Añadir a la lista de reproducción</p>
                                    </div>
                                    <div className="option">
                                        <ion-icon name="download-outline"></ion-icon>
                                        <p>Descargar</p>
                                    </div>
                                    <div className="option">
                                        <ion-icon name="arrow-redo-outline"></ion-icon>
                                        <p>Compartir</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="option">
                                        <ion-icon name="flag-outline"></ion-icon>
                                        <p>Denunciar</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </section>
        </section>
    )
}