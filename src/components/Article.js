import React from 'react';
import '../style/Article.css';

const Article = ({ title, content }) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    );
}

export default Article;