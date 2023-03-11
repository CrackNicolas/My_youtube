export default function ComponentNavOptionsNotification({get_style}){
    return (
        <div style={get_style("notifications-outline")} className="icon-notification">
            <div className="header">
                <p>Notificaciones</p>
                <p title="Configuracion">
                    <ion-icon name="settings-outline"></ion-icon>
                </p>
            </div>
            <div className="line-nav-options"></div>
            <div className="items-notification">
                <div className="item-notification">
                    <p>.</p>
                    <p>
                        <img src="/images/my_perfil.jpg" alt=""></img>
                    </p>
                    <p>
                        Pedsdads   dad as ds ad sa ds ad sad sa d asd a sd sad as
                        <p>
                            Hace 7 dias
                        </p>
                    </p>
                    <p>
                        <img src="/images/my_perfil.jpg" alt=""></img>
                    </p>
                    <p>
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </p>
                </div>
                <div className="item-notification">
                    <p>.</p>
                    <p>
                        <img src="/images/my_perfil.jpg" alt=""></img>
                    </p>
                    <p>
                        Pedsdads   dad as ds ad sa ds ad sad sa d asd a sd sad as
                        <p>
                            Hace 7 diaz
                        </p>
                    </p>
                    <p>
                        <img src="/images/my_perfil.jpg" alt=""></img>
                    </p>
                    <p>
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </p>
                </div>
            </div>
        </div>
    )
}