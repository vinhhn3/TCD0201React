import axios from 'axios';
import React, { Component } from 'react';

class Login extends Component {
    state={
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:9999/api/user/login',{
                username: this.state.username,
                password:  this.state.password
            },{withCredentials: true})
            .then(res=>{
                console.log(res)
                // alert('Login success')
            })
            .catch(err => {
                console.log(err)
            });
        
      };
    render() {
        const { username, password} = this.state;
        return (
            <div className="Login">
                <h1>Login page</h1>
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
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
