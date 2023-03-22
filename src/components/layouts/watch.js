import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import {Global_context} from '../../context/global_context.js';

import ComponentSinInternet from './sin_internet.js';
import ComponentNavTop from '../partials/menus/nav_top.js';
import ComponentHeaderVideoSelected from '../partials/headers/header_video_selected.js';
import ComponentHeaderComments from "../partials/headers/header_comments.js";
import ComponentListComments from "../partials/lists/list_comments.js";
import ComponentNavCategoriesVideosRelated from '../partials/menus/nav_categories_videos_related.js';
import ComponentListVideosRelated from '../partials/lists/list_videos_related.js';

import {Load_video} from "../../controllers/videos.js";
import Load_channel from "../../controllers/channel.js";
import {Load_categories_playlist} from "../../controllers/categories.js";
import Load_comments from "../../controllers/comments.js";

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

    return (
        (context_global.internet)? 
            <React.Fragment>
                <ComponentNavTop search_query={context_global.search_query}/>
                <section className="section-view-video">
                    <section className="view_videos">
                        <ComponentHeaderVideoSelected video={video_selected} channel={channel_video_selected}/>      
                        <article className="comments">
                            <ComponentHeaderComments comments_count={video_selected.comments_count}/>
                            <ComponentListComments comments={comments_video_selected}/>
                        </article>
                    </section>
                    <section className="views-videos-related">
                        <ComponentNavCategoriesVideosRelated categories_playlists={categories} selected_categorie={capture_id_categorie} />
                        <ComponentListVideosRelated id_playlist={categorie_selected}/>
                    </section>
                </section>
            </React.Fragment>
        :
            <ComponentSinInternet/>
    );
}