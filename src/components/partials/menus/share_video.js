import '../../../styles/partials/menus/share_video.css';

export default function ComponentShareVideo({get_style_option,index,visibility_option}){
    return (
        <article className="share-video" style={get_style_option(index)}>
            <div className="header">
                <p>Compartir</p>
                <p>
                    <ion-icon onClick={(e) => visibility_option(e,index)} name="close-outline"></ion-icon>
                </p>
            </div>
            <div className="slider">
                <a href="https://api.whatsapp.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                    <p>WhatsApp</p>
                </a>
                <a href="https://www.facebook.com/" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                    <p>Facebook</p>
                </a>
                <a href="https://twitter.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </div>
                    <p>Twitter</p>
                </a>
                <a href="https://gmail.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="mail-sharp"></ion-icon>
                    </div>
                    <p>Correo</p>
                </a>
                <a href="https://www.linkedin.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                    <p>Linkedln</p>
                </a>
                <a href="https://www.instagram.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <p>Instagram</p>
                </a>
                <a href="https://ar.pinterest.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                    <p>Pinterest</p>
                </a>
                <a href="https://www.tumblr.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-tumblr"></ion-icon>
                    </div>
                    <p>Tumblr</p>
                </a>
                <a href="https://www.reddit.com" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-reddit"></ion-icon>
                    </div>
                    <p>Reddit</p>
                </a>
                <a href="https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%2F%2Fyoutube.com%2Fshorts%2FsR3UNym3mwI%253Ffeature%253Dshare&display=widget" className='item'>
                    <div className="imagen">
                        <ion-icon name="logo-vk"></ion-icon>
                    </div>
                    <p>Vk</p>
                </a>
            </div>
            <div className="url">
                <p>
                    {"http://localhost:3000/shorts/"+index}
                </p>
                <a>Copiar</a>
            </div>
        </article>
    )
}