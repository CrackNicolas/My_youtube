import React from "react";

export default function ComponentSearchVideos({videos}){
    return (
        <section className="search-videos">
            <section className="filter">
                Filter
            </section>
            <section className="videos">
                {
                    videos.map((video,index) => {
                        return (
                            <article className="video">
                                <div className="imagen">
                                    <img src={video.url_imagen} alt={video.title}/>
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
                            </article>
                        )
                    })
                }
            </section>
        </section>
    )
}