import { useState, Fragment } from 'react'

import Schema_styles_nav_categories from '../../../styles/schema/styles_nav_categories.js';

import '../../../styles/partials/menus/categories_home.css';

export default function ComponentNavCategories({categories,categorie_selected}){
  const [styles, setStyles] = useState(Schema_styles_nav_categories.model);

  const scroll = (e) => {
    const slider_nav_categories = window.document.querySelector('.nav-categories')

    let coordinate_scroll = slider_nav_categories.scrollLeft;

    for(let i = 0 ; i < 12 ; i++){
      slider_nav_categories.scrollLeft = (e.target.name==="chevron-forward-outline")? (slider_nav_categories.scrollLeft + i) : (slider_nav_categories.scrollLeft - i);
    }
    if(e.target.name=="chevron-forward-outline"){
      setStyles(Schema_styles_nav_categories.format( (coordinate_scroll!==0 && slider_nav_categories.scrollLeft===coordinate_scroll)? 1 : 2))
    }
    if(e.target.name=="chevron-back-outline"){
      setStyles(Schema_styles_nav_categories.format( (slider_nav_categories.scrollLeft===0)? 3 : 4))
    }
  }

  return (
      <Fragment>
        {
          (categories.length>0)?
            <button className="prev" title="Anterior" style={styles.prev} onClick={(e) => scroll(e)}>
                <ion-icon className="icon-prev" style={styles.icon_prev} name="chevron-back-outline"></ion-icon>
            </button>
          : ""
        }
        <nav className="nav-categories" style={styles.scroll_x}>
          <a href="" className="categori explorar">
            <ion-icon name="compass-outline"></ion-icon>
            <span>Explorar</span>
          </a>
          <span className="delimiter"></span>
          {
            categories.map((categorie,index) => {
              return (
                <a onClick={() => categorie_selected(categorie.id)} className="categori" id={categorie.selected} title={categorie.title} key={index}>
                  {categorie.title}
                </a>
              )
            })
          }
        </nav>
        {
          (categories.length>0)?
            <button className="next" style={styles.next} title="Siguiente" onClick={(e) => scroll(e)}>
                <ion-icon className="icon-next" style={styles.icon_next} name="chevron-forward-outline"></ion-icon>
            </button>
          : ""
        }
      </Fragment>
    )
}