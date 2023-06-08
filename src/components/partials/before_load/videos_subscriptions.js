import '../../../styles/partials/before_load/videos_subscriptions.css';

export default function ComponentVideosLoadSubscriptions(){
    let videos = [1,2,3,4,5,6,7,8,9,10];
    return (
        <section className="videos-load-subscriptions">
            {
                videos.map((index) => {
                    return (
                        <article key={index} className="video">
                            <div className="header">
                                <div className="icon"></div>
                                <div className="title"></div>
                            </div>
                            <div className="description"></div>
                        </article>
                    )
                })
            }
        </section>
    )
}