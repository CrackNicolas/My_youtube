import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {Video_view} from '../../schema/video.js';
import Videos from '../../service/videos/index.js';

import Comments from '../partials/comments.js';
import ViewVideoFavorite from '../partials/view_video_favorites.js';

export default function Watch(){
    let {id} = useParams();

    const [video_selected,setVideo_selected] = useState();

    useEffect(() => {

        const load_video_selected = async () => {
            let search_video_selected = await Videos.get_all_id(id);

            let new_video;
            search_video_selected.data.items.find(video => {
                new_video = Video_view.push(video)
            })
            setVideo_selected(new_video)
        } 

        load_video_selected();
    },[]);

    return (
        <section className="section-view-video">
        </section>
    );
}