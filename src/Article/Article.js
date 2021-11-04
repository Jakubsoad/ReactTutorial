import React from "react";

const Article = props => {
    return(
        <div>
            <h2>{ props.title }</h2>
            <p>{ props.content }</p>
            <button onClick={ props.deleteArticle }>X</button>
            <br/><br/>
        </div>
    );
}

export default Article;