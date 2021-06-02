import React, { Component } from 'react';

class Aside extends Component {
    render() {
        const navbar = this.props.dataNav
        return (
            <aside className="Aside">
                <ul>
                    {navbar && navbar.map(item => {
                        return <li className="listItem" key={item.id}> <a href={item.link}>{item.name}</a></li>
                    })}
                </ul>
            </aside>
        );
    }
}

export default Aside;
