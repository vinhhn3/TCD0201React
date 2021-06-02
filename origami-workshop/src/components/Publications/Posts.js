import React,{useState} from 'react';
import "../../App.css"
import Post from "./Post"

function Main(Props) {

    const [posts] = useState([
        {
            id: "1",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
        {
            id: "2",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
        {
            id: "3",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
        {
            id: "4",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
        {
            id: "5",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
        {
            id: "6",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
    ]);
    return(
        <div className="Posts">
            <Post posts={posts}/>
        </div>
    )
}
export default Main;