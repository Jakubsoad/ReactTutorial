import React, { Component } from "react";
import Article from "./Article/Article";


class Articles extends Component {

    static getDerivedStatesFromProps(props, state) {
        //JTD
        console.log('Articles get derived states from props');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //JTD
        console.log('articles update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //JTD
        console.log('Articles get snapshot before update');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //JTD
        console.log('component did update');
    }

    render() {
        //JTD
        console.log('articles render');

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