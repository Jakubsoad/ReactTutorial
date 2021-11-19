import React, { Component } from "react";
import styles from './Employee.module.css';

class Employee extends Component {

    render() {
        return (
            <div className={styles.Employee}>
                User <b>{this.props.name}</b>
            </div>
        );
    }
}

export default Employee;
