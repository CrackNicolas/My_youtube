import React from 'react'

export default function ComponentVideosLayouts({videos}){

  let watch_video = (id) => {
    return "/watch/"+id;
  }

  return (
    <section className="videos">
      {
        videos.map((video,index) => {
          return (
            <a href={watch_video(video.id)} key={index}>
              <article className="video">
                <div className="imagen">
                    <img src={video.url_imagen} alt={video.id}/>
                    <div className="duration">
                        <span>
                            {video.duration}
                        </span>
                    </div>
                </div>
                <div className="icon-autor">
                  <img src={video.channel.logo} alt={video.title}/>
                  <p>{video.title}</p>
                  <ion-icon name="ellipsis-vertical"></ion-icon>
                </div>
                <div className="name-autor">
                  <p>{video.channel.title}</p>
                  {
                    video.license===true ? <ion-icon name="checkmark-circle"></ion-icon> : ""
                  }
                </div>
                <div className="visualizaciones">
                  <p>{video.view_count} .{video.time_elapsed}</p>
                </div>
              </article>
            </a>
          )
        })
      }
    </section>
  )
}