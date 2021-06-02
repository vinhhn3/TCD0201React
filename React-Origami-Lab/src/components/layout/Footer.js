import React, { Component } from 'react'
import logo2 from '../img/blue-origami-bird-flipped.png'
import Link from './Link'

export class Footer extends Component {
    state = {
        items: [
            {
                title: 'Going to 1'
            },
            {
                title: 'Going to 2'
            },
            {
                title: 'Going to 3'
            },
            {
                title: 'Going to 4'
            },
            {
                title: 'Going to 5'
            },
            {
                title: 'Going to 6'
            },
            {
                title: 'Going to 7'
            },
            {
                title: 'Going to 8'
            },
            {
                title: 'Going to 9'
            },
            {
                title: 'Going to 10'
            },
        ],
    }
    render() {
        return (
            <footer className="Footer">
                <ul>
                    {this.state.items.map((item) => (
                        <Link key={item.title} item={item} />
                    ))}
                    <img src={logo2} style={{width: "14vh"}} alt="prop" />
                </ul>
            </footer>
        )
    }
}

export default Footer