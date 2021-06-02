import "./workshop-styles.css";
import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Aside from "./components/layout/Aside";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

function App(props) {

    const [title] = useState([
        { id: 1, title: 'Going to 1 ' },
        { id: 2, title: 'Going to 2 ' },
        { id: 3, title: 'Going to 3 ' },
        { id: 4, title: 'Going to 4 ' },
        { id: 5, title: 'Going to 5 ' },
        { id: 6, title: 'Going to 6 ' },
        { id: 7, title: 'Going to 7 ' },
        { id: 8, title: 'Going to 8 ' },
        { id: 9, title: 'Going to 9 ' },
        { id: 10, title: 'Going to 10 ' }
    ]);


    return (
        <div className='App'>
            <Navbar titles={title}/>
            <div className='Container'>
                <Aside titles={title} />
                <Main />
            </div>
            <Footer titles={title} />
        </div>
    );
}

export default App;
