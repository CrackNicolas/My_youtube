export default function ComponentNavCategoriesVideosRelated({categories_playlists,selected_categorie}){
    return (
        <article className="nav-categories-two">
            <button className="prev-two" title="Anterior">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <article className="categories">
                {
                    categories_playlists.map((categorie,index) => {
                        return (
                            <a onClick={() => selected_categorie(categorie.id)} className="" title={categorie.title} key={index}>
                                {categorie.title}
                            </a>
                        )
                    })
                }
            </article>
            <button className="next-two" title="Siguiente">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </article>
    )
}