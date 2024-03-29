import '../../../styles/partials/menus/options_videos_home.css';

import { Global_context } from '../../../context/global_context';
import { useContext } from 'react';

export default function ComponentNavOptionsVideo({videos,get_style_option,index}){
    const context_global = useContext(Global_context);

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
            <div className="line-nav-options"></div>
            <div className="option">
              <ion-icon name="ban-outline"></ion-icon>
              <p>No me interesa</p>
            </div>
            <div className="option">
              <ion-icon name="remove-circle-outline"></ion-icon>
              <p>No recomendarme este canal</p>
            </div>
            <div className="option" onClick={(e) => context_global.add_video_see_later(e,videos[index])}>
              <ion-icon name="flag-outline"></ion-icon>
              <p>Denunciar</p>
            </div>
        </div>
    );
}