import React from 'react';

function Main({ children, heading }) {
    return (
        <div className="Main">
            <h1>
                {heading}
            </h1>{children}
        </div>
    )
}

export default Main;