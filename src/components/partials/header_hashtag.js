import { useEffect, useState } from "react"

export default function ComponentHeaderHashtag({videos,name_hashtag}){
    const [count_videos,setCount_videos] = useState(0);
    const [count_channels,setCount_channels] = useState(0);

    useEffect(() => {
        const calc_count_videos = () => {
            setCount_videos((videos.length>1)? videos.length+" videos" : videos.length+" video");
        }
        const calc_count_channels = () => {
            let channels = 0, name_channel = "";
            for(let video of videos){
                if(video.channel.title != name_channel){
                    channels++;
                    name_channel = video.channel.title;
                }
            }
            setCount_channels((channels==1)? (channels+" canal") : (channels+" canales") );
        }
        calc_count_videos();
        calc_count_channels();
    },[videos]);
    
    return (
        <section className="header-hashtag">
            <p>#{name_hashtag}</p>
            <article className="details">
                <p>{count_videos}</p>
                <p>{count_channels}</p>
            </article>
            <article className="categories">
                <a href="">Todo</a>
                <a href="">Shorts</a>
            </article>
        </section>
    )
}