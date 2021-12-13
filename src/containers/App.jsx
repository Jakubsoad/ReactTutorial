import React from 'react';
import axios from 'axios';

import './App.css';

import Employees from '../components/Employees/Empoloyees'
import EmployeeDetails from "../components/Employees/Employee/EmployeeDetails/EmployeeDetails";

class App extends React.Component {

    state = {
        employees: [],
        selectedEmployee: null,
    }

    componentDidMount() {
        axios.get('https://dummy.restapiexample.com/api/v1/employees', null).then(response => {
            const firstTenEmployees = response.data.data.slice(0, 10);
            this.setState({employees: firstTenEmployees});
        });
    }

    showSelectedEmployeeHandler = (id) => {
        axios.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`, null).then(response => {
            this.setState({selectedEmployee: response.data.data});
        });
    }

    render() {

        let selectedEmployee = null;

        if (this.state.selectedEmployee !== null) {
            selectedEmployee = <EmployeeDetails name={this.state.selectedEmployee.employee_name} salary={this.state.selectedEmployee.employee_salary} age={this.state.selectedEmployee.employee_age}/>
        }

        return (
            <div className='App'>
                {selectedEmployee}
                <h1>Employees</h1>
                <Employees employees={this.state.employees} showSelectedEmployee={this.showSelectedEmployeeHandler}/>
            </div>
        );
    }
}

export default App;
