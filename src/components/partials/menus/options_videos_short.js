import '../../../styles/partials/menus/options_videos_short.css';

export default function ComponentNavOptionsVideoShort({get_style_option,index}){
    return (
        <div className="nav-options" style={get_style_option(index)}>
            <div className="option">
                <ion-icon name="reorder-four-outline"></ion-icon>
                <p>Descripción</p>
            </div>
            <div className="option">
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>No recomendarme este canal</p>
            </div>
            <div className="option">
                <ion-icon name="flag-outline"></ion-icon>
                <p>Denunciar</p>
            </div>
            <div className="option">
                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                <p>Enviar sugerencias</p>
            </div>
        </div>
    );
}