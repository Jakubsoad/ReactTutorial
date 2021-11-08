import React from 'react';

import Article from './Article/Article';

import './App.css';
import './Article/Article.css';

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
        const doesShow = this.state.showArticles;
        this.setState({showArticles: !doesShow});
    };

    deleteArticle = (index) => {
        const articles = [...this.state.articles];
        articles.splice(index, 1);
        this.setState({articles: articles});
    };

    render() {

        const buttonStyle = {
            backgroundColor: 'white',
            border: '2px solid #326647',
            color: 'black',
            padding: '10px 16px',
            textAlign: 'center',
            fontSize: '20px',
            cursor: 'pointer',
            margin: '10px 0'
        };

        let articles = null;

        if (this.state.showArticles) {
            articles = this.state.articles.map((article, index) => {
                return(
                    <Article
                        title={article.title}
                        content={article.content}
                        deleteArticle={() => this.deleteArticle(index)}
                        key={article.id}
                    />
                );
            });
        }

        return (
            <div className='App'>
                <button style={buttonStyle} onClick={this.toggleArticlesHandlers}>Toggle articles</button>
                { articles }
            </div>
        );
    }
}

export default App;
