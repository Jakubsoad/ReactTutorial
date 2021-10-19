import React from 'react';
import './App.css';
import User from './User/User';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <h1 className='red-color'>Hello world!</h1>
                <p>Just a paragraph</p>
                <User username='Mike' role='admin'/>
                <User username='Paul' role='guest'/>
            </div>
        );
    }
}

export default App;
