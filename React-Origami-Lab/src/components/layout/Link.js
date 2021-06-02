import React, { Component } from 'react'

export class Link extends Component {
    render() {
        const {title} = this.props.item;

        return (
            <li className="listItem">
                <a href="#">
                    {title}
                </a>
            </li>
        )
    }
}

export default Link