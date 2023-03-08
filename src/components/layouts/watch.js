import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import {Global_context} from '../../context/global_context.js';

import ComponentNavTop from '../partials/nav_top.js';
import ComponentHeaderVideoSelected from '../partials/header_video_selected.js';
import ComponentHeaderComments from "../partials/header_comments.js";
import ComponentListComments from "../partials/list_comments.js";
import ComponentNavCategoriesVideosRelated from '../partials/nav_categories_videos_related.js';
import ComponentListVideosRelated from '../partials/list_videos_related.js';

import { Schema_video_watch } from '../../schema/video.js';
import Schema_channel from '../../schema/channel.js';
import Schema_comments from '../../schema/comment.js';

import Service_videos from '../../service/videos/index.js';
import Service_channels from '../../service/channels/index.js';
import Service_playlists from "../../service/playlists/index.js";
import Service_comments from '../../service/comments/index.js';
import Schema_categorie from "../../schema/categorie.js";

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
            let search_video_selected = await Service_videos.get_all_id(id_video);
            let id_channel;
            for(let video of search_video_selected.data.items){
                setVideo_selected(Schema_video_watch.push(video));
                load_channel_video_selected(video.snippet.channelId);
                load_comments_video_selected(id_video);
                id_channel = video.snippet.channelId;
            }
            load_categories(id_channel);
        } 
        const load_channel_video_selected = async (id_video) => {
            let search_channel = await Service_channels.get_id(id_video);
            for(let channel of search_channel.data.items){
                setChannel_video_selected(Schema_channel.push(channel));
            }
        }
        const load_categories = async (channel_id) => {
            let new_categories = [], no_repeat;
            let search_list_id_playlist = await Service_channels.get_details(channel_id);
            
            new_categories.push(new Schema_categorie("0","Todos","selected"));

            for(let item of search_list_id_playlist.data.items){
                if(item.contentDetails !== undefined && item.contentDetails.playlists !== undefined){
                    const new_categorie_playlist = await Service_playlists.get_datails_playlits(item.contentDetails.playlists[0]);
                    if(no_repeat != new_categorie_playlist.data.items[0].snippet.channelTitle){
                        new_categories.push(Schema_categorie.push_categorie_playlist(new_categorie_playlist));
                    }
                    no_repeat = new_categorie_playlist.data.items[0].snippet.channelTitle                
                }
            }
            new_categories.push(new Schema_categorie("0","Relacionados","no-selected"));
            setCategories(new_categories);
        }
        const load_comments_video_selected = async (id_video) => {
            let search_comments = await Service_comments.get_video_id(id_video);
            let comments = [], replies_comment = [];
            for(let comment of search_comments.data.items){
                if(comment.snippet.totalReplyCount > 0){
                    for(let repli_comment of comment.replies.comments){
                        replies_comment.push(Schema_comments.push_replies(repli_comment,undefined,undefined));
                    }
                }
                let replies_count = (comment.snippet.totalReplyCount==0)? undefined : (comment.snippet.totalReplyCount>1)? comment.snippet.totalReplyCount+" respuestas" : comment.snippet.totalReplyCount+" respuesta";
                comments.push(Schema_comments.push_general(comment,replies_count,replies_comment));
                replies_comment = [];
            }
            setComments_video_selected(comments);
        }
        load_video_selected(id);
    },[]);

    let capture_id_categorie = (id) => {
        setCategorie_selected((id==0)? undefined : id);
    }

    return (
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
    );
}