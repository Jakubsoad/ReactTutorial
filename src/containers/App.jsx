import React from 'react';
import './App.css';
import Employees from '../components/Employees/Empoloyees'
import axios from 'axios';

class App extends React.Component {

    componentDidMount() {
        axios.get('https://dummy.restapiexample.com/api/v1/employees', null).then(response => {
            this.setState = response.data.data;
        });
    }

    render() {

        return (
            <div className='App'>
                <h1>Employees</h1>
                <Employees employees={this.state.employees} />
            </div>
        );
    }
}

export default App;
