import React,{useState} from 'react';
import "../../App.css";
import axios from 'axios';



function Register(props) {
    //state
    const[account,setAccount] = useState([
        {
            username: "",
            password: "",
        }
    ])

    const [rePassword, setRePassword] = useState([
        {
            rePassword: "",
        }
    ])

    let status = false;

    //execute Register task
    const executeRegister = (account) =>{
        axios.post("Http://localhost:9999/api/user/register", account)
            .then(res => console.log(res.data));    
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

    //validate rePassword onchange
    const rePasswordOnChange = (e) => {
        setRePassword({
            rePassword: e.target.value,
        })
    }
    
    //onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        executeRegister(account);
    }


    return (
        <div className="Register">
            <h1>Register Page</h1>
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
                    <label>Re-password</label>
                    <input
                        className="input" 
                        type="password"
                        name="rePassword"
                        placeholder="Confirm password"
                        onChange={rePasswordOnChange}
                        value={rePassword.rePassword}></input>
                </div>
                {rePassword.rePassword === account.password ? 
                    (
                        status = false
                    ):(
                        status = true
                    )
                }
                {status ? (
                    <span className="Register">Confirm password does not match</span>
                ):("")}
                <div>
                    <button
                        disabled={status} 
                        type="submit"
                        value="Submit"
                        >Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;    