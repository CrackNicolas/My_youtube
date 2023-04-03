import '../../../styles/partials/lists/manage_subscriptions.css';

export default function ComponentListSubscriptions({channels}){
    return (
        <section className="list-subscriptions">
            {
                (channels!=undefined)?
                    channels.map((channel,index) => {
                        return (
                            <article className="subscription" key={index}>
                                <img src={channel.logo} alt={channel.title}/>
                                <div className="description">
                                    <p>{channel.title}</p>
                                    <p>{channel.subscriptions} .{channel.coun_videos}</p>
                                    <p>{channel.description}</p>
                                </div>
                                <div className="button">
                                    <ion-icon name="notifications-outline"></ion-icon>
                                    <span>Suscrito</span>
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                </div>
                            </article>
                        )
                    })
                : 
                    ""
            }
        </section>
    );
}