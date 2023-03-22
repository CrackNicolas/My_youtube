export default function ComponentNavOptionsVideoSearch({get_style_option,index}){
    return (
        <div className="options" style={get_style_option(index)}>
            <div className="option">
                <ion-icon name="add-outline"></ion-icon>
                <p>Añadir a la cola</p>
            </div>
            <div className="option">
                <ion-icon name="time-outline"></ion-icon>
                <p>Guardar para ver más tarde</p>
            </div>
            <div className="option">
                <ion-icon name="duplicate-outline"></ion-icon>
                <p>Añadir a la lista de reproducción</p>
            </div>
            <div className="option">
                <ion-icon name="download-outline"></ion-icon>
                <p>Descargar</p>
            </div>
            <div className="option">
                <ion-icon name="arrow-redo-outline"></ion-icon>
                <p>Compartir</p>
            </div>
            <div className="line"></div>
            <div className="option">
                <ion-icon name="flag-outline"></ion-icon>
                <p>Denunciar</p>
            </div>
        </div>
    )
}