//**Esto va cuando el usuario ya ha iniciado sesion**/

{
    (name_selected_icon!=undefined)?
        <div className="load-icons">
            <div></div>
            <div></div>
            <div></div>
        </div>
    :
        <div className="icons">
            <div className="create-video">
                <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="videocam-outline")? "videocam":"videocam-outline" } title="Crear"></ion-icon>
            </div>
            <ComponentNavOptionsCreateVideo get_style={get_style}/>
            <div className="notification">
                <ion-icon onClick={(e) => visibility_options(e)} name={(name_selected_icon==="notifications-outline")? "notifications":"notifications-outline" } title="Notificaciones"></ion-icon>
            </div>
            <img className="perfil" src="/images/my_perfil.jpg" alt="Perfil del autor"/>                
            <ComponentNavOptionsNotification get_style={get_style}/>
        </div>
}