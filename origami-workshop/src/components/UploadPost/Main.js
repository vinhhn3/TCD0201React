import React, {useState} from 'react';
import "../../App.css"
import PersonalPost from "./PersonalPost"
import UploadPost from "./UploadPost"
import axios from 'axios';

function Main(props) {

    const[personalList] = useState([
        {
            id:"1",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
        {
            id:"2",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },{
            id:"3",
            content: "aaaaaaaaaa",
            author: "bbbbbb",
        },
    ]);

    const executeUpload = (post)=> {
        axios.post("Http://localhost:9999/api/origami", post, {withCredentials:true})
            .then(res => console.log(res.data)); 
    }

    return (
        <div className="Input">
            <UploadPost executeUpload={executeUpload}/>
            <PersonalPost personalList={personalList}/>
        </div>
    );
}

export default Main;