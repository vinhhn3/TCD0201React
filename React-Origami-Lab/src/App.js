import "./workshop-styles.css";
import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Aside from "./components/layout/Aside";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

function App(props) {

    const [titles] = useState([
        { id: 1, title: 'Going to 1 ', link: '#'},
        { id: 2, title: 'Going to 2 ', link: '#' },
        { id: 3, title: 'Going to 3 ', link: '#' },
        { id: 4, title: 'Going to 4 ', link: '#' },
        { id: 5, title: 'Going to 5 ', link: '#' },
        { id: 6, title: 'Going to 6 ', link: '#' },
        { id: 7, title: 'Going to 7 ', link: '#' },
        { id: 8, title: 'Going to 8 ', link: '#' },
        { id: 9, title: 'Going to 9 ', link: '#' },
        { id: 10, title: 'Going to 10 ', link: '#' }
    ]);


    return (
        <div className='App'>
            <Navbar titles={titles}/>
            <div className='Container'>
                <Aside titles={titles} />
                <Main />
            </div>
            <Footer titles={titles} />
        </div>
    );
}

export default App;
