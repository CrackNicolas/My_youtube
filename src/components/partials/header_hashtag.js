import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function ComponentHeaderHashtag({videos,name_hashtag}){
    const [count_videos,setCount_videos] = useState(0);
    const [count_channels,setCount_channels] = useState(0);
    const [style,setStyle] = useState({});

    useEffect(() => {
        const hidden_header_hashtag = () => {
            let ubicacion_actual = window.pageYOffset;
            if(ubicacion_actual == 0){
                setStyle({
                    position: "relative",
                    top: "85px"
                })
            }else{
                setStyle({
                    position: "fixed",
                    top: "-30px"
                })
            }
        }
        window.addEventListener('scroll',hidden_header_hashtag);
    },[window.pageYOffset]);


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
        <section className="header-hashtag" style={style}>
            <p>#{name_hashtag}</p>
            <article className="details">
                <p>{count_videos}</p>
                <p>{count_channels}</p>
            </article>
            <article className="categories">
                <Link to={name_hashtag}>Todo</Link>
                <Link to={(name_hashtag+"/shorts")}>Shorts</Link>
            </article>
        </section>
    )
}