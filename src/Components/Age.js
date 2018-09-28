import React from 'react';
import PropTypes from 'prop-types';

const Age = ({age}) => {
    return (
        <h2>{`Age: ${age} years`}</h2>
    );
};

Age.propTypes = {
    age: PropTypes.number.isRequired,
};

export default Age;