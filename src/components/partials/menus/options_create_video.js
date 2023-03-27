export default function ComponentNavOptionsCreateVideo({get_style}){
    return (
        <div className="options" style={get_style("videocam-outline")}>
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