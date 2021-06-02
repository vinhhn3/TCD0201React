import React, { Component } from 'react';
import img from '.././blue-origami-bird-flipped.png';

class Footer extends Component {
    render() {
        const navbar = this.props.dataNav
        return (
            <footer className='Footer'>
                <ul >
                    {navbar && navbar.map(item => {
                        return <li className="listItem" key={item.id}> <a href={item.link}>{item.name}</a></li>
                    })}
                    <li className="listItem"><img src={img} alt="img" /></li>

                </ul>
            </footer>
        );
    }
}

export default Footer;
