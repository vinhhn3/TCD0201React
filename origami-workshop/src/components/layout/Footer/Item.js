import React from 'react';
import PropTypes from 'prop-types';
import "../../../App.css";

Item.propTypes = {
    items: PropTypes.array
};

Item.defaultProps = {
    items: []
}

function Item(props) {
    const {items} = props;
    return (
        items.map((item) =>(
            <li key={item.id} className="listItem">
                <a src="#">{item.name}</a>
            </li>
        ))
    );
};


export default Item;