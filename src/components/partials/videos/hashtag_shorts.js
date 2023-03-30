import ComponentNavOptionsVideo from '../menus/options_videos_home.js';
import ComponentVideosLoad from '../before_load/videos_home.js';

import '../../../styles/partials/videos/hashtag_shorts.css';

import {get_url_player_short} from '../../../logic/functions.js';

export default function ComponentVideosHashtagShorts({videos}){
  return (
    <section className="videos-hashtag">
      { (videos.length===0)? <ComponentVideosLoad/> : "" }
      {
        videos.map((video,index) => {
          return (
            <a className="video" key={index}>
              <video style={{ background: "transparent url('"+video.url_imagen+"') 50% 50% / cover no-repeat" }}>
                <source src="" type="video/mp4"/>
              </video>
            </a>
          )
        })
      }
    </section>
  )
}