import React, {useState} from "react";
import "../../../App.css";
import bird from "../../../img/blue-origami-bird-flipped.png"
import Item from "./Item"


function Footer(props) {
    const [items] = useState([
        {
            id: "1",
            name: "aaaaaa",
        },
        {
            id: "2",
            name: "aaaaaa",
        },
        {
            id: "31",
            name: "aaaaaa",
        },
        {
            id: "4",
            name: "aaaaaa",
        },
        {
            id: "5",
            name: "aaaaaa",
        },
        {
            id: "6",
            name: "aaaaaa",
        },
        {
            id: "7",
            name: "aaaaaa",
        },
        {
            id: "8",
            name: "aaaaaa",
        },
        {
            id: "9",
            name: "aaaaaa",
        },
    ]);
    return (
        <footer className="Footer">
            <ul>
                <Item items={items}/>
                <li className="listItem">
                    <img src={bird} alt="Origami bird" style={{width: '80.5%'}}/>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;