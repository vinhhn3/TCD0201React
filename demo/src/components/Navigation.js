import React, { Component } from 'react';
import logo from'.././logo.png';
class Navigation extends Component {
    
    render() {
        const navbar = this.props.dataNav
        return (
            <nav className='Navigation'>
                <ul >
                    <li className="listItem"> <img src={logo} alt="logo"/></li>
                    {navbar && navbar.map(item=>{
                        return <li className="listItem" key={item.id}> <a href={item.link}>{item.name}</a></li>
                    })}
                    
                    
                </ul>
            </nav>
        );
    }
}
export default Navigation;
