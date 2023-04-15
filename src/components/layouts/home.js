import React, { useContext } from 'react'

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavCategories from '../partials/menus/categories_home.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentVideosLayouts from '../partials/videos/home.js';
import ComponentSinInternet from './sin_internet.js';

//<ComponentVideosLayouts videos={context_global.videos}/>

import {Global_context} from '../../context/global_context.js';
export default function ComponentHome(){
  const context_global = useContext(Global_context);

  return (
    (context_global.internet)? 
      <React.Fragment>
        <ComponentNavTop search_query={context_global.search_query} user={context_global.user} style={{visibility : "visible"}}/>
        <ComponentNavCategories categorie_selected={context_global.capture_id_categorie} categories={context_global.categories}/>
        <ComponentNavLeft capture_icono_nav_left={context_global.capture_id_categorie} item_selected="0"/>
        
      </React.Fragment>
    :
      <ComponentSinInternet/>
  )
}