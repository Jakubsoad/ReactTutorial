import React from "react";
import Articles from "../components/Articles/Articles";
import Header from "../components/Header/Header";
import Article from "../components/Articles/Article/Article";

import './App.css';
import '../components/Articles/Article/Article.css';

class App extends React.Component {

    state = {
        articles: [
            {
                id: 'Article1',
                title: 'Test title1',
                content: 'Test content 1'
            },
            {
                id: 'Article2',
                title: 'Test title2',
                content: 'Test content 2'
            },
            {
                id: 'Article3',
                title: 'Test title3',
                content: 'Test content 3'
            },
            {
                id: 'Article4',
                title: 'Test title4',
                content: 'Test content 4'
            }
        ],
        showArticles: true
    };

    toggleArticlesHandlers = () => {
        console.log('test');
        const doesShow = this.state.showArticles;
        this.setState({showArticles: !doesShow});
    };

    deleteArticle = (index) => {
        const articles = [...this.state.articles];
        articles.splice(index, 1);
        this.setState({articles: articles});
    };

    render() {

        let articles = null;
        if (this.state.showArticles) {
            articles = <Articles articles={this.state.articles} deleteArticle={this.deleteArticle}/>;
        }

        return (
            <div className='App'>
                <Header showArticles={this.state.showArticles} toggleArticles={this.toggleArticlesHandlers}/>
                {articles}
            </div>
        );
    }
}

export default App;
