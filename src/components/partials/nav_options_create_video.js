export default function ComponentNavOptionsCreateVideo({get_style_icon_video_options}){
    return (
        <div className="options" style={get_style_icon_video_options()}>
            <div className="option">
                <ion-icon name="videocam-outline"></ion-icon>
                <p>Subir video</p>
            </div>
            <div className="option">
                <ion-icon name="radio-outline"></ion-icon>
                <p>Emitir en directo</p>
            </div>
        </div>
    );
}