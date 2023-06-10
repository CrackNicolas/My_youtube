import '../../../styles/partials/videos/subscriptions.css';

import ComponentVideosLoadSubscriptions from '../before_load/videos_subscriptions';
import ComponentVideo from './video';

export default function ComponentVideosSubscriptions({videos}){
    return (
        <section className="subscriptions">
            <article className="header">
                <span>Esta semana</span>
                <div className="iconos">
                    <a href="/feed/channels">Gestionar</a>
                    <ion-icon name="grid"></ion-icon>
                    <ion-icon name="list-outline"></ion-icon>
                </div>
            </article>
            { ( (videos == undefined) || (videos.length==0) ) && <ComponentVideosLoadSubscriptions/> }
            { 
                (videos!=undefined) &&
                    <article className="videos">
                        {
                            videos.map((video,index) => {
                                return (
                                    <ComponentVideo video={video} index={index}/>  
                                )
                            })
                        }
                    </article>
            }
        </section>
    )
}