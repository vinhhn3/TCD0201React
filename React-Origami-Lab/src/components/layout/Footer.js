import React, { Component } from 'react'
import logo2 from '../../img/blue-origami-bird-flipped.png'

export class Footer extends Component {
    render() {
        const title = this.props.titles;
        return (
            <footer className="Footer">
                <ul>
                    {title.map((item) => (
                        <li className="listItem" key={item.id}> <a href={item.link}>{item.title}</a></li>
                    ))}
                    <img src={logo2} style={{width: "14vh"}} alt="prop" />
                </ul>
            </footer>
        )
    }
}

export default Footer