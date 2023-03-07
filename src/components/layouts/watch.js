import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ComponentHeaderVideoSelected from '../partials/header_video_selected.js';
import ComponentHeaderComments from "../partials/header_comments.js";
import ComponentListComments from "../partials/list_comments.js";
import ComponentListVideosRelated from '../partials/list_videos_related.js';

import Schema_video_presentation, { Schema_video_watch } from '../../schema/video.js';
import Schema_channel from '../../schema/channel.js';
import Schema_comments from '../../schema/comment.js';

import Service_videos from '../../service/videos/index.js';
import Service_channels from '../../service/channels/index.js';
import Service_comments from '../../service/comments/index.js';
import Service_categories from '../../service/categories/index.js';
import Service_playlists from '../../service/playlists/index.js';

export default function ComponentWatch(){
    let {id} = useParams();

    const [video_selected, setVideo_selected] = useState({});
    const [channel_video_selected, setChannel_video_selected] = useState({});
    const [comments_video_selected, setComments_video_selected] = useState([]);

    const [categories,setCategories] = useState([]);
    const [categorie_selected,setCategorie_selected] = useState();

    const [playlists_channel_video_selected,setPlaylists_channel_video_selected] = useState([]);

    useEffect(() => {
        const load_video_selected = async (id_video) => {
            let search_video_selected = await Service_videos.get_all_id(id_video);
            for(let video of search_video_selected.data.items){
                setVideo_selected(Schema_video_watch.push(video));
                load_channel_video_selected(video.snippet.channelId);
                load_playlist(video.snippet.channelId);
                load_comments_video_selected(id_video);
            }
        } 
        const load_channel_video_selected = async (id_video) => {
            let search_channel = await Service_channels.get_id(id_video);
            for(let channel of search_channel.data.items){
                setChannel_video_selected(Schema_channel.push(channel));
            }
        }
        const load_playlist = async (channel_id) => {
            let search_playlists = await Service_playlists.get_all(channel_id);
            let promises = [];
            let new_playlist = [];
            if(search_playlists.data.items.length > 0){
                let search_id_playlists = await Service_playlists.get_all_id(search_playlists.data.items[0].id);
                for(let playlist_item of search_id_playlists.data.items){
                    const datails_playlist = Service_videos.get_all_id_datails(playlist_item.contentDetails.videoId);
                    promises.push(datails_playlist);
                }

                const result_videos_playlist = await Promise.all(promises);

                for(let result of result_videos_playlist){
                    for(let video of result.data.items){
                        let search_channel = await Service_channels.get_id(video.snippet.channelId);
                        let channel = Schema_channel.push(search_channel.data.items[0]);
                        new_playlist.push(Schema_video_presentation.push(video,channel));
                    }  
                }
            }
            setPlaylists_channel_video_selected(new_playlist);
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

    useEffect(() => {
        const load_categories = async () => {
            let new_categories = await Service_categories.get_all(categorie_selected);
            setCategories(new_categories);
        }
        load_categories();
    },[categorie_selected]);

    return (
        <section className="section-view-video">
            <section className="view_videos">
                <ComponentHeaderVideoSelected video={video_selected} channel={channel_video_selected}/>      
                <article className="comments">
                    <ComponentHeaderComments comments_count={video_selected.comments_count}/>
                    <ComponentListComments comments={comments_video_selected}/>
                </article>
            </section>
            <section className="views-videos-related">
                <ComponentListVideosRelated categories={categories} videos={playlists_channel_video_selected} />
            </section>
        </section>
    );
}