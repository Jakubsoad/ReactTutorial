import React from 'react';
import './App.css';
import Employees from '../components/Employees/Empoloyees'
import axios from 'axios';

class App extends React.Component {

    state = {
        employees: []
    }

    componentDidMount() {
        axios.get('https://dummy.restapiexample.com/api/v1/employees', null).then(response => {
            const firstTenEmployees = response.data.data.slice(0, 10);
            this.setState({employees: firstTenEmployees});
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
