import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

AsideLI.propTypes = {
    links: PropTypes.array,
};

AsideLI.defaultProps = {
    links: [],
}

function AsideLI(props) {

    const { links } = props;

    return (
        links.map(link => (
            <Link className="listItem" key={link.id} to={link.to}>
                {link.title}
            </Link>
        ))
    );
}

export default AsideLI;