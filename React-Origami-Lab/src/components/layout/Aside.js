import React, { Component } from 'react'

export class Aside extends Component {
    render() {
        const title = this.props.titles;
        return (
            <aside className="Aside" style={{marginLeft:'10px'}}>
                {title.map((item) => (
                    <li className="listItem" key={item.id}> <a href={item.link}>{item.title}</a></li>
                ))}
            </aside>
        )
    }
}


export default Aside;