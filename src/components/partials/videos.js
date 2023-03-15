import React, { useState } from 'react'

import { get_url_player_presentation } from '../../logic/functions.js';
import ComponentNavOptionsVideo from './nav_options_video';

export default function ComponentVideosLayouts({videos}){
  let set_time;
  const [option_selected, setOption_selected] = useState();
  const [key_video_selected,setKey_video_selected] = useState();

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
  const play = (id_video,index) => {
    return (key_video_selected==index)? get_url_player_presentation(id_video) : "";
  }
  const mouse_out = () => {
    clearTimeout(set_time);
    setKey_video_selected(undefined);
  }
  const mouse_over = (key) => {
    set_time = setTimeout(() => {
      setKey_video_selected(key)
    }, 1700);
  }

  return (
    <section className="videos">
      {
        videos.map((video,index) => {
          return (
            <a href={("/watch/"+video.id)} key={index}>
              <article className="video">
                {
                  (index == key_video_selected)?
                    <iframe src={play(video.id,index)} className="imagen_frame" allow='autoplay *' onMouseOver={() => mouse_over(index)} onMouseOut={() => mouse_out()} >
                      <img src={video.url_imagen} alt={video.title}/>
                      <div className="duration">
                          <span>
                              {video.duration}
                          </span>
                      </div>
                    </iframe>
                  :
                    <div className="imagen" onMouseOver={() => mouse_over(index)} onMouseOut={() => mouse_out()}>
                      <img src={video.url_imagen} alt={video.title}/>
                      <div className="duration">
                          <span>
                              {video.duration}
                          </span>
                      </div>
                    </div>
                }
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