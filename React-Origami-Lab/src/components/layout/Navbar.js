import React, { Component } from 'react';
import logo from '../../img/white-origami-bird.png'

export class Navbar extends Component {

    render() {
        const title = this.props.titles;
        return (
            <nav className="Navigation">
                <ul>
                    <img src={logo} style={{width: "14vh"}} alt="prop" />
                    {title.map((item) => (
                        <li className="listItem" key={item.id}> <a href={item.link}>{item.title}</a></li>
                    ))}
                </ul>
            </nav>
        )
    }
}



export default Navbar;