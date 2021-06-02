import React, { Component } from 'react'
import FooterItem from "./FooterItem";

export class Footer extends Component {
    state = {
        items: [
            {
                footer_link: 'Going to 1'
            },
            {
                footer_link: 'Going to 2'
            },
            {
                footer_link: 'Going to 3'
            },
            {
                footer_link: 'Going to 4'
            },
            {
                footer_link: 'Going to 5'
            },
            {
                footer_link: 'Going to 6'
            },
            {
                footer_link: 'Going to 7'
            },
            {
                footer_link: 'Going to 8'
            },
            {
                footer_link: 'Going to 9'
            },
            {
                footer_link: 'Going to 10'
            },
            {
                footer_link: 'Going to 11'
            },
        ],
    }
    render() {
            return (
                <footer className="Footer">
                   <ul>
                        {this.state.items.map((item) => (
                            <FooterItem key={item.footer_link} item={item} />
                        ))}
                        <img src="/blue-origami-bird-flipped.png" className="logoFooter" alt="logo"/>

                    </ul>  
                </footer>
            )
        }
    }

export default Footer