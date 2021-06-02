import React,{useState} from 'react';
import "../../../App.css"
import Item from "./Item"


function Aside(props) {
    
    const [items] = useState([
        {
            id: "1",
            name: "aaaaaa",
            link: "/",
        },
        {
            id: "2",
            name: "UploadFile",
            link: "/upload",
        },
        {
            id: "3",
            name: "Register",
            link: "/register",
        },
        {
            id: "4",
            name: "Login",
            link: "/login",
        },
        {
            id: "5",
            name: "#",
            link: "/",
        },
        {
            id: "6",
            name: "#",
            link: "/",
        },
        {
            id: "7",
            name: "#",
            link: "/",
        },
        {
            id: "8",
            name: "#",
            link: "/",
        },
        {
            id: "9",
            name: "#",
            link: "/",
        },
        {
            id: "10",
            name: "#",
            link: "/",
        },
    ])
    return (
        <aside className="Aside">
            <ul>
            <Item items={items}/>    
            </ul>
        </aside>
    );
}

export default Aside;