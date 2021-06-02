import React, {useState} from 'react';
import "../../App.css";
import axios from 'axios';


function Login(props) {
    //state
    const[account,setAccount] = useState([
        {
            username: "",
            password: "",
        }
    ])

    //execute Register task
    const executeRegister = (account) =>{
        axios.post("Http://localhost:9999/api/user/login", account, {withCredentials: true})
            .then(res => console.log(res)); 
    }

    //user name onchange event listen
    const userNameOnChange = (e) =>{
        setAccount({
            username: e.target.value, 
            password: account.password
        })
    }

    //password on change
    const PasswordOnChange = (e) =>{
        setAccount({
            username: account.username,
            password: e.target.value
        })
    }

    //onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        executeRegister(account);
    }

    return (
        <div className="Login">
            <h1>Login page</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Enter your username"
                        onChange={userNameOnChange}
                        value={account.username}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        className="input" 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={PasswordOnChange}
                        value={account.password}></input>
                </div>
                <div>
                    <button
                        type="submit"
                        value="Submit"
                        >Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;