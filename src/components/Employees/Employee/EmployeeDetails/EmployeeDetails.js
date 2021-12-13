import React, { Component } from "react";
import styles from './EmployeeDetails.module.css';

class EmployeeDetails extends Component {

    render() {
        return(
            <div className={styles.EmployeeDetails}>
                <div className={styles.EmployeeDetailsDiv}>
                    Name: <b>{this.props.name}</b>
                </div>
                <div className={styles.EmployeeDetailsDiv}>
                    Salary: <b>{this.props.salary}</b>
                </div>
                <div className={styles.EmployeeDetailsDiv}>
                    Age: <b>{this.props.age}</b>
                </div>
            </div>
        )
    }

}

export default EmployeeDetails;