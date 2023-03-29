import '../../../styles/partials/menus/options_video_selected.css';

export default function ComponentNavOptionsVideoSelected({get_style_option}){
    return (
        <div className="options" style={get_style_option()}>
            <div className="option">
                <ion-icon name="download-outline"></ion-icon>
                <p>Descargar</p>
            </div>
            <div className="option">
                <ion-icon name="add-outline"></ion-icon>
                <p>Guardar</p>
            </div>
            <div className="option">
                <ion-icon name="flag-outline"></ion-icon>
                <p>Denunciar</p>
            </div>
            <div className="option">
                <ion-icon name="keypad-outline"></ion-icon>
                <p>Mostrar transcripción</p>
            </div>
        </div>
    );
}