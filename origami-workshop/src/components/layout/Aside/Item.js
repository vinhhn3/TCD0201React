import React from 'react';
import PropTypes from 'prop-types';
import "../../../App.css";
import { Link } from "react-router-dom";

Item.propTypes = {
    items: PropTypes.array
};

Item.defaultProps = {
    items: []
};

function Item(props) {
    
    const {items} = props;
    return (
        items.map((item)=> (
            <li key={item.id} className="listItem">
                <Link to={item.link} class>{item.name}</Link>
            </li>
        ))
    );
}

export default Item;