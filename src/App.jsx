import React from 'react';
import './App.css';
import Article from './Article/Article';

class App extends React.Component {

    state = {
        articles: [
            {
                title: 'Test title1',
                content: 'Test content 1'
            },
            {
                title: 'Test title2',
                content: 'Test content 2'
            },
            {
                title: 'Test title3',
                content: 'Test content 3'
            },
            {
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

    render() {

        let articles = null;

        if (this.state.showArticles) {
            articles = this.state.articles.map(article => {
                return(<Article title={article.title} content={article.content}/>);
            });
        }

        return (
            <div className='App'>
                <button onClick={this.toggleArticlesHandlers}>Toggle articles</button>
                { articles }
            </div>
        );
    }
}

export default App;
