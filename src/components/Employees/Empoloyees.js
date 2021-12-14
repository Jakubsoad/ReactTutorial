import React, { Component } from "react";
import styles from './Employees.module.css';
import Employee from "./Employee/Employee";

class Empoloyees extends Component {

    render() {

        const employees = this.props.employees.map((employee, index) => {
            return (
                <Employee name={employee.employee_name} age={employee.employee_age} key={employee.id} showSelectedEmployee={this.props.showSelectedEmployee} id={employee.id}/>
            );
        });

        return (
            <div className={styles.Employees}>
                {employees}
            </div>
        );
    }
}

export default Empoloyees;
