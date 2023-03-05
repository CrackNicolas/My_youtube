import React from 'react'

export default function ComponentNavCategories({categories,categorie_selected}){
  
  let load_categorie = (id) => {
    categorie_selected(id);
  }
  
  return (
      <React.Fragment>
        <button className="prev" title="Anterior">
            <ion-icon className="icon-prev" name="chevron-back-outline"></ion-icon>
        </button>
        <nav className="nav-categories">
          {
            categories.map((categorie,index) => {
              return (
                <a onClick={() => load_categorie(categorie.id)} className="categori" id={categorie.selected} title={categorie.title} key={index}>
                  {categorie.title}
                </a>
              )
            })
          }
        </nav>
        <button className="next" title="Siguiente">
            <ion-icon className="icon-next" name="chevron-forward-outline"></ion-icon>
        </button>
      </React.Fragment>
    )
}