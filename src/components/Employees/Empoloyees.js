import React, { Component } from "react";
import styles from './Employees.module.css';
import Employee from "./Employee/Employee";

class Empoloyees extends Component {

    render() {

        const employees = this.props.employees.map((employee, index) => {
            //JTD
            console.log(employee);
            return (
                <Employee name={employee.employee_name} age={employee.employee_age} />
            );
        });

        return (
            <div className={styles.Empoloyees}>
                {employees}
            </div>
        );
    }
}

export default Empoloyees;