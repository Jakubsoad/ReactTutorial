import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            React.createElement('div', {className: 'App'},
                React.createElement('h1', {className: 'red-color'}, 'Hello world!')
            )
        );
    }
}

export default App;
