import React, { Component } from 'react';
import logo from'.././logo.png';
import {Link} from "react-router-dom"
class Navigation extends Component {
    
    render() {
        const navbar = this.props.dataNav
        return (
            <nav className='Navigation'>
                <ul >
                    <li className="listItem"> <img src={logo} alt="logo"/></li>
                    {navbar && navbar.map(item=>{
                        return <li className="listItem" key={item.id}> <Link to={item.link}>{item.name}</Link></li>
                    })}
                    
                    
                </ul>
            </nav>
        );
    }
}
export default Navigation;
