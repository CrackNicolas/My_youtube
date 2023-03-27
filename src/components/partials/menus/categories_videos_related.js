import {useState} from 'react';

import Schema_styles_nav_categories_two from '../../../styles/schema/styles_nav_categories_two.js';

export default function ComponentNavCategoriesVideosRelated({categories_playlists,selected_categorie}){
    const [styles, setStyles] = useState(Schema_styles_nav_categories_two.model);
    const [playlist_selecteds, setPlaylist_selecteds] = useState(0);

    const scroll = (e) => {
        const slider_nav_categories = window.document.querySelector('.categories');
        
        let coordinate_scroll = slider_nav_categories.scrollLeft;
        for(let i = 0 ; i < 15 ; i++){
            slider_nav_categories.scrollLeft = (e.target.name==="chevron-forward-outline")? (slider_nav_categories.scrollLeft + i) : (slider_nav_categories.scrollLeft - i);
        }
        if(e.target.name=="chevron-forward-outline"){
            setStyles(Schema_styles_nav_categories_two.format( (coordinate_scroll!==0 && slider_nav_categories.scrollLeft=== coordinate_scroll)? 1 : 2))
        }
        if(e.target.name=="chevron-back-outline"){
            setStyles(Schema_styles_nav_categories_two.format( (slider_nav_categories.scrollLeft===0)? 3 : 4))
        }
    }

    const check_playlist = (id,index) => {
        setPlaylist_selecteds(index);
        selected_categorie(id);
    }
    const watch_playlist_selected = (index) => {
        return Schema_styles_nav_categories_two.selected_item_playlist( (playlist_selecteds == index)? 1 : 2);
    }

    return (
        <article className="nav-categories-two" style={styles.content_slider_nav_categories}>
            {
                (categories_playlists.length>0)?
                    <button className="prev-two" title="Anterior" style={styles.prev} onClick={(e) => scroll(e)}>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </button>
                : ""
            }
            <article className="categories">
                {
                    categories_playlists.map((categorie,index) => {
                        return (
                            <a className="categori" onClick={() => { check_playlist(categorie.id,index) } } style={watch_playlist_selected(index)} title={categorie.title} key={index}>
                                {categorie.title}
                            </a>
                        )
                    })
                }
            </article>
            {
                (categories_playlists.length>0)?
                    <button className="next-two" title="Siguiente" style={styles.next} onClick={(e) => scroll(e)}>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>
                : ""
            }
        </article>
    )
}