import React from 'react';

import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Importatnt Tiitle",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero ex alias provident molestiae ab suscipit consequatur? Corrupti, eaque. Necessitatibus!",
    },
    {
        id: 2,
        title: "Importatnt Tiitle nr 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero ex alias provident molestiae ab suscipit consequatur? Corrupti, eaque. Necessitatibus!",
    },
    {
        id: 3,
        title: "Importatnt Tiitle nr 3",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero ex alias provident molestiae ab suscipit consequatur? Corrupti, eaque. Necessitatibus!",
    },

]

const HomePage = () => {

    const artLIst = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <>
            {artLIst}
        </>
    );
}

export default HomePage;