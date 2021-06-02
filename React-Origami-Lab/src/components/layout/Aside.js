import React, { Component } from 'react'
import Link from './Link';

export class Aside extends Component {
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
            <aside className="Aside" style={{marginLeft:'10px'}}>
                {this.state.items.map((link) => (
                    <Link key={link.title} item={link} />
                ))}
            </aside>
        )
    }
}


export default Aside;