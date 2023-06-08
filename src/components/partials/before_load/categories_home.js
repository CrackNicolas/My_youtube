import '../../../styles/partials/before_load/categories_home.css';

export default function ComponentCategoriesHomeLoad(){
    let categories = [1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <nav className="nav-categories-load">
            {
                categories.map((categori,index) => {
                    return (
                        <a key={index} className="categori-load"></a>
                    )
                })
            }
        </nav>
    )
}