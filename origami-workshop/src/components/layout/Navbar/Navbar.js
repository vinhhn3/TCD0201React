import "../../../App.css";
import React, {useState} from "react";
import bird from "../../../img/white-origami-bird.png"
import Item from "./Item"

function Navbar(props){

    const [items] = useState([
        {
            id: "1",
            name: "aaaaaa"
        },
        {
            id: "2",
            name: "#"
        },
        {
            id: "3",
            name: "#"
        },
        {
            id: "4",
            name: "#"
        },
        {
            id: "5",
            name: "#"
        },
        {
            id: "6",
            name: "#"
        },
        {
            id: "7",
            name: "#"
        },
        {
            id: "8",
            name: "#"
        },
        {
            id: "9",
            name: "#"
        },
        {
            id: "10",
            name: "#"
        },
    ]);
    return(
        <nav className="Navigation">
            <ul>
                <li className="listItem">
                    <img src={bird} alt="Origami bird" style={{width: '80.5%'}}/>
                </li>
                <Item items={items}/>
            </ul>
        </nav>
    )
}
export default Navbar;


