import '../../../styles/partials/before_load/videos_shorts.css';

export default function ComponentVideosLoadShorts(){
    let videos = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <section className="videos-load-shorts">
            {
                videos.map((index) => {
                    return (
                        <article key={index} className="video">
                            <div className="image"></div>
                            <div className="cont-functions">
                                <div className="functions">
                                    <div className="function"></div>
                                    <p></p>
                                    <div className="function"></div>
                                    <p></p>
                                    <div className="function"></div>
                                    <p></p>
                                    <div className="function"></div>
                                    <p></p>
                                    <div className="function"></div>
                                    <div className="function"></div>
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    )
}