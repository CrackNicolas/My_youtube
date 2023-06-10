import '../../../styles/partials/videos/playlist.css';

export default function ComponentVideosPlaylist(){
    return (
        <section className='playlist'>
            <article className='presentation'>
                <img src=""/>
                <span>Ver más tarde</span>
                <span>Alejo Beltran</span>
                <div>
                    <span>6 videos</span>
                    <span>0 visualizaciones</span>
                    <span>Actualizada hoy</span>
                </div>
                <div>
                    <a href="">
                        <ion-icon name="play"></ion-icon>
                        <span>Reproducir todo</span>
                    </a>
                    <a href="">
                        <ion-icon name="shuffle-outline"></ion-icon>
                        <span>Aleatorio</span>
                    </a>
                </div>
            </article>
            <article className='list'>

            </article>
        </section>
    )
}