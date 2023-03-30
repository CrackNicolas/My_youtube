import ComponentNavOptionsVideo from '../menus/options_videos_home.js';
import ComponentVideosLoad from '../before_load/videos_home.js';

import '../../../styles/partials/videos/hashtag_shorts.css';

export default function ComponentVideosHashtagShorts({videos}){
  return (
    <section className="videos-hashtag">
      { (videos.length===0)? <ComponentVideosLoad/> : "" }
      {
        videos.map((video,index) => {
          return (
            <a href={("/watch/"+video.id)} key={index}>
              <article className="video">
                
              </article>
            </a>
          )
        })
      }
    </section>
  )
}