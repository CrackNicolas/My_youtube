import React, { useState } from 'react'

import ComponentNavOptionsVideo from './nav_options_video';

export default function ComponentVideosLayouts({videos}){
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
    <section className="videos">
      {
        videos.map((video,index) => {
          return (
            <a href={watch_video(video.id)} key={index}>
              <article className="video">
                <div className="imagen">
                    <img src={video.url_imagen} alt={video.title}/>
                    <div className="duration">
                        <span>
                            {video.duration}
                        </span>
                    </div>
                </div>
                <div className="icon-autor">
                  <img src={video.channel.logo} alt={video.channel.title}/>
                  <p>{video.title}</p>
                  <div className="icon-options" onClick={(e) => visibility_option(e,index)}>
                    <ion-icon style={get_style_icon_option(index)} name="ellipsis-vertical"></ion-icon>
                  </div>
                  <ComponentNavOptionsVideo get_style_option={get_style_option} index={index}/>
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