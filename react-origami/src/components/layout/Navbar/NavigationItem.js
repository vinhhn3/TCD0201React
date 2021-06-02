import React, { Component } from "react";


export class NavigationItem extends Component {
    render() {
    const { nav_link } = this.props.link;

        return (
                    <li class="listItem">
                        <a href="#">{nav_link}</a>
                    </li>
        )
    }
}
export default NavigationItem;
