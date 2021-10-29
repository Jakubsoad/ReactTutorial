import React from 'react';
import './App.css';
import User from './User/User';
import Customer from './Customer/Customer'

class App extends React.Component {

    active = "active";
    disabled = "disabled";

    state = {
        username: 'Joe',
        role: 'user',
        active: 'false'
    };

    onCopyHandler = () => {
        //JTD
        console.log('on copy handler');
    };

    onMouseEnter = () => {
        //JTD
        console.log('mouse enter');
    };

    onMouseLeave = () => {
        //JTD
        console.log('mouse leave');
    };

    setUserDataHandler = () => {
        const username = document.getElementById('username').value;
        const role = document.getElementById('role').value;
        const active = document.getElementById('active').checked;

        this.setState({
            username: username,
            role: role,
            active: active
        });
    }

    render() {
        return (
            <div className='App'>
                <h1 className='red-color' onCopy={this.onCopyHandler} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Hello!</h1>

                <div className="form-container">
                    <label className="label">Username</label>
                    <input className="form-element" type="text" id="username"/>
                    <label className="label">Role</label>
                    <input className="form-element" type="text" id="role"/>
                    <label className="label">Active</label>
                    <input className="form-element" type="checkbox" id="active"/>
                    <button onClick={this.setUserDataHandler} className="form-button">Show User</button>
                </div>
                <User username={this.state.username} role={this.state.role}>{this.state.active ? this.active : this.disabled}</User>
                <Customer></Customer>
            </div>
        );
    }
}

export default App;
