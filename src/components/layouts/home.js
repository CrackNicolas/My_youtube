import { Fragment, useContext } from 'react'

import ComponentNavTop from '../partials/menus/top.js';
import ComponentNavCategories from '../partials/menus/categories_home.js';
import ComponentNavLeft from '../partials/menus/left.js';
import ComponentVideosLayouts from '../partials/videos/home.js';
import ComponentSinInternet from './sin_internet.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentHome(){
  const context_global = useContext(Global_context);

  return (
    (context_global.internet)? 
      <Fragment>
        <ComponentNavTop search_query={context_global.search_query} channel={context_global.channel} style={{visibility : "visible"}}/>
        <ComponentNavCategories categorie_selected={context_global.capture_id_categorie} categories={context_global.categories}/>
        <ComponentNavLeft capture_icono_nav_left={context_global.capture_id_categorie} item_selected="0"/>
        <ComponentVideosLayouts videos={context_global.videos} loading={context_global.loading}/>
      </Fragment>
    :
      <ComponentSinInternet/>
  )
}