import React, {useEffect, useState} from 'react'

import { useLocation } from 'react-router-dom';

import ComponentNavTop from '../partials/nav_top.js';
import ComponentNavCategories from '../partials/nav_categories.js';
import ComponentNavLeft from '../partials/nav_left.js';
import ComponentVideosLayouts from '../partials/videos.js';

import Service_categories from '../../service/categories/index.js';
import Service_channels from '../../service/channels/index.js';
import Service_videos from '../../service/videos/index.js';

import Schema_channel from '../../schema/channel.js';
import Schema_video_presentation from '../../schema/video.js';

export default function ComponentHome(){
  let {search} = useLocation();
  let query = new URLSearchParams(search);
  let search_query = query.get("search_query");
  
  const [categories,setCategories] = useState([]);
  const [categorie_selected,setCategorie_selected] = useState();
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    const load_categories = async () => {
      let new_categories = await Service_categories.get_all(categorie_selected);
      setCategories(new_categories);
    }
    const load_videos = async () => {
      let new_videos = [], promises = [], channel;
      const videos_search = await Service_videos.get_all(search_query,categorie_selected,2);

      for(let video of videos_search.data.items){
        let new_channel = Service_channels.get_id(video.snippet.channelId);
        promises.push(new_channel);
      }
      const result_promises_channels = await Promise.all(promises);
      promises = [];

      if(videos_search.data.items[0].contentDetails == undefined){
        for(let video of videos_search.data.items){
          const new_video = Service_videos.get_all_id(video.id.videoId); 
          promises.push(new_video);
        }
        const result_promises_videos = await Promise.all(promises);
        
        for(let video of videos_search.data.items){
            result_promises_channels[new_videos.length].data.items.find(item => (
                channel = Schema_channel.push(video,item)
            ))
            result_promises_videos[new_videos.length].data.items.find(item => (
                new_videos.push(Schema_video_presentation.push(item,channel))
            ))
        }
      }else{
        for(let video of videos_search.data.items){
          result_promises_channels[new_videos.length].data.items.find(item => (
              channel = Schema_channel.push(video,item)
          ))
          new_videos.push(Schema_video_presentation.push(video,channel));
        }
      }
      setVideos(new_videos);
    }
    
    load_videos();
    load_categories();
  },[categorie_selected])

  let capture_id_categorie = (id) => {
    setCategorie_selected(id);
  }

  return (
    <React.Fragment>
      <ComponentNavTop search_query={search_query}/>
      <ComponentNavCategories categorie_selected={capture_id_categorie} categories={categories}/>
      <ComponentNavLeft/>
      <ComponentVideosLayouts videos={videos}/>
    </React.Fragment>
  )
}