import React, { Component } from "react";
import styles from './Employees.module.css';
import Employee from "./Employee/Employee";

class Empoloyees extends Component {

    render() {

        const employees = this.props.employees.map((employee, index) => {
            return (
                <Employee name={employee.name} />
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