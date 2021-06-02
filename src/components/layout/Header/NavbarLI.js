import React from 'react';
import PropTypes from 'prop-types';
import '../../../App.css';
import { Link } from 'react-router-dom';

NavbarLI.propTypes = {
    links: PropTypes.array,
};

NavbarLI.defaultProps = {
    links: []
}

function NavbarLI(props) {

    const { links } = props;

    return (
        links.map(link => (

            <Link className="listItem" key={link.id} to={link.to}>
                {link.title}
            </Link>
        ))
    );
}

export default NavbarLI;