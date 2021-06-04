import axios from 'axios';
import React, { Component } from 'react';

class Register extends Component {
    state={
        username: '',
        password: '',
        rePassword: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:9999/api/user/register',{
                username: this.state.username,
                password:  this.state.password
            })
            .then(res=>{
                // console.log(res)
                alert('Register success')
            })
            .catch(err => {
                console.log(err)
            });
      };
    render() {
        const { username, password, rePassword } = this.state;
        return (
            <div className="Register">
                <h1>Register page</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-control">
                        <label>Username</label>
                        <input 
                            type="username"
                            name="username"
                            onChange={this.handleChange}
                            value={username}
                        />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={password}
                        />
                    </div>
                    <div className="form-control">
                        <label>Re-password</label>
                        <input 
                            type="password"
                            name="rePassword"
                            onChange={this.handleChange}
                            value={rePassword}
                        />
                    </div>
                    <div className="form-control">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
