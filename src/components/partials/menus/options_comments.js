import '../../../styles/partials/menus/options_comments.css';

export default function ComponentNavOptionsComments({get_style,index}){
    return (
        <div className="nav_filter_comments" style={get_style(index)}>
            <div className="option">
                Mejores comentarios
            </div>
            <div className="option">
                Más recientes primero
            </div>
        </div>
    )
}