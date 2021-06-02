import React, { Component } from 'react'

export class footerItem extends Component {
    render() {
        const {footer_link} = this.props.item;

        return (
                <li className="listItem">
                <a href="!">
                    {footer_link}
                </a>
            </li>
        )
    }
}

export default footerItem