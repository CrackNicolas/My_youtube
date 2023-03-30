import ComponentVideosLoadShorts from '../before_load/videos_shorts';

import '../../../styles/partials/videos/hashtag_shorts.css';

export default function ComponentVideosHashtagShorts({videos,name}){
  const get_view_count = (view) => {
    return view.replace(" de visitas","");
  }

  return (
    <section className="videos-hashtag">
      { (videos.length===0)? <ComponentVideosLoadShorts/> : "" }
      {
        videos.map((video,index) => {
          return (
            <a href={"/shorts/"+name+"/"+video.id} className="video" key={index}>
              <video style={{ background: "transparent url('"+video.url_imagen+"') 50% 50% / cover no-repeat" }}></video>
              <p>{get_view_count(video.view_count)} visualizaciones</p>
            </a>
          )
        })
      }
    </section>
  )
}