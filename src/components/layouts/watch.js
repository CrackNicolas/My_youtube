import { useEffect, useState, useContext, Fragment } from "react";
import { useMediaQuery } from 'react-responsive'
import { useParams } from "react-router-dom";

import {Global_context} from '../../context/global_context.js';

import ComponentSinInternet from './sin_internet.js';
import ComponentNavTop from '../partials/menus/top.js';
import ComponentHeaderVideoSelected from '../partials/headers/video_selected_home.js';
import ComponentHeaderComments from "../partials/headers/comments.js";
import ComponentListComments from "../partials/lists/comments_home.js";
import ComponentNavCategoriesVideosRelated from '../partials/menus/categories_videos_related.js';
import ComponentListVideosRelated from '../partials/lists/videos_related_home.js';

import {Load_video} from "../../controllers/videos.js";
import Load_channel from "../../controllers/channel.js";
import {Load_categories_playlist} from "../../controllers/categories.js";
import Load_comments from "../../controllers/comments.js";

import '../../styles/layouts/watch.css';

export default function ComponentWatch(){
    const context_global = useContext(Global_context);

    let {id} = useParams();

    const [video_selected, setVideo_selected] = useState({});
    const [channel_video_selected, setChannel_video_selected] = useState({});
    const [comments_video_selected, setComments_video_selected] = useState([]);

    const [categories,setCategories] = useState([]);
    const [categorie_selected,setCategorie_selected] = useState();

    useEffect(() => {
        const load_video_selected = async (id_video) => {
            let video = await Load_video(id_video);
            setVideo_selected(video);
            load_channel_video_selected(video.channel_id);
            load_categories(video.channel_id);
            load_comments_video_selected(id_video);
            window.document.title = video.title;
        } 
        const load_channel_video_selected = async (id_video) => {
            let search_channel = await Load_channel(id_video);
            setChannel_video_selected(search_channel);
        }
        const load_categories = async (channel_id) => {
            let new_categories = await Load_categories_playlist(channel_id);
            setCategories(new_categories);
        }
        const load_comments_video_selected = async (id_video) => {
            let comments = await Load_comments(id_video);
            setComments_video_selected(comments);
        }
        load_video_selected(id);
    },[]);

    let capture_id_categorie = (id) => {
        setCategorie_selected((id==0)? undefined : id);
    } 

    const isMobile = useMediaQuery({query: '(max-width: 600px)'})

    return (
        (context_global.internet)? 
            <Fragment>
                <ComponentNavTop search_query={context_global.search_query} channel={context_global.channel} style={(isMobile)? { visibility : "hidden"} : { visibility : "visible"}}/>
                <section className="section-view-video">
                    <section className="view_videos">
                        <ComponentHeaderVideoSelected video={video_selected} channel={channel_video_selected}/>      
                        <section className="views-videos-related-two">
                            <ComponentNavCategoriesVideosRelated categories_playlists={categories} selected_categorie={capture_id_categorie} />
                            <ComponentListVideosRelated id_playlist={categorie_selected}/>
                        </section>
                        <article className="comments">
                            <ComponentHeaderComments comments_count={video_selected.comments_count} channel={context_global.channel}/>
                            <ComponentListComments comments={comments_video_selected} icono="chevron"/>
                        </article>
                    </section>
                    <section className="views-videos-related">
                        <ComponentNavCategoriesVideosRelated categories_playlists={categories} selected_categorie={capture_id_categorie} />
                        <ComponentListVideosRelated id_playlist={categorie_selected}/>
                    </section>
                </section>
            </Fragment>
        :
            <ComponentSinInternet/>
    );
}