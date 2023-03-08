import React, { useContext } from 'react'

import ComponentNavTop from '../partials/nav_top.js';
import ComponentNavCategories from '../partials/nav_categories.js';
import ComponentNavLeft from '../partials/nav_left.js';
import ComponentVideosLayouts from '../partials/videos.js';

import {Global_context} from '../../context/global_context.js';

export default function ComponentHome(){
  const context_global = useContext(Global_context);

  return (
    <React.Fragment>
      <ComponentNavTop search_query={context_global.search_query}/>
      <ComponentNavCategories categorie_selected={context_global.capture_id_categorie} categories={context_global.categories}/>
      <ComponentNavLeft/>
      <ComponentVideosLayouts videos={context_global.videos}/>
    </React.Fragment>
  )
}