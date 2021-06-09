import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import img from '.././blue-origami-bird.png';


class ProfileView extends Component {

    state = {
        data:[],
        token: null
    }

    componentDidMount() {
        const token=Cookies.get("x-auth-token")

        this.setState({ loading: true, token:token });

        axios
            .get('http://localhost:9999/auth',{withCredentials: true})
            .then(res => {
                this.setState({ data: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    handleLogout=()=>{
        axios
            .post('http://localhost:9999/api/user/logout',{
                token:this.state.token
            },{withCredentials: true})
            .then(res => {
                console.log(res)
                this.setState({token:null,data:[]})
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const {token,data}=this.state
        console.log(data)
        return (
            <div>
                <div className="Profile">
                    <img src={img} alt="img"></img>
                    <div className="personal-info">
                        <p>
                            <span>Username:</span> {data.username}
                        </p>
                        <p><span>Post:</span> {data.posts}</p>
                    </div>
                </div>
                {token ?(<button onClick={() => { this.handleLogout() }}>logout</button>):(<div/>)}
            </div>
        );
    }
}

export default ProfileView;
