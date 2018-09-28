import React from 'react';
import PropTypes from 'prop-types';

const Name = ({name}) => {
    return (
        <h1>{`Hello ${name}!`}</h1>
    )
}

Name.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Name;