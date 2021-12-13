import React, { Component } from "react";
import Article from "./Article/Article";


class Articles extends Component {

    static getDerivedStatesFromProps(props, state) {
        return state;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {

        const articles = this.props.articles.map((article, index) => {
            return (
                <Article
                    title={article.title}
                    content={article.content}
                    deleteArticle={() => this.props.deleteArticle(index)}
                    key={article.id}
                />
            );
        });

        return (
            <div>
                {articles}
            </div>
        );
    }
}

export default Articles;