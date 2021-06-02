import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

FooterLI.propTypes = {
    links: PropTypes.array
};

FooterLI.defaultProps = {
    links: [],
}

function FooterLI(props) {

    const { links } = props;

    return (
        links.map(link => (
            <Link className="listItem" key={link.id} to={link.to}>
                {link.title}
            </Link>
        ))
    );
}

export default FooterLI;