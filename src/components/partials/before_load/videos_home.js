import '../../../styles/partials/before_load/videos_home.css';

export default function ComponentVideosLoad(){
    let videos = [1,2,3,4,5,6,7,8,9];
    return (
        <section className="videos-load">
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