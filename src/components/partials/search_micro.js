export default function ComponentSearchMicro({get_style, visibility_options}){
    return (
        <div style={get_style("mic-outline")} className="search-video-micro">
            <p>
                <ion-icon onClick={(e) => visibility_options(e)} name="close-outline"></ion-icon>
            </p>
            <p>
                Haz búsquedas por voz
            </p>
            <p>
                Para hacer búsquedas por voz, ve a la configuración del navegador y permite el acceso al micrófono.
            </p>
            <p>
                <ion-icon name="mic" title="Haz búsquedas por voz"></ion-icon>  
            </p>              
        </div>
    )
}