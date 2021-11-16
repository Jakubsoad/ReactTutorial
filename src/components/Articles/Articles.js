import React from "react";
import Article from "./Article/Article";


const Articles = props => {

    const articles = props.articles.map((article, index) => {
        return(
            <Article
                title={article.title}
                content={article.content}
                deleteArticle={() => props.deleteArticle(index)}
                key={article.id}
            />
        );
    });

    return(
        <div>
            { articles }
        </div>
    );
}

export default Articles;