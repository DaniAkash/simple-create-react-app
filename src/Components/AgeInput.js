import React from 'react';
import PropTypes from 'prop-types';

const AgeInput = ({age, onInputChange}) => {

    const changeAge = e => {
        onInputChange('age', e);
    };

    return (
        <div>
            <input value={age} type="number" onChange={changeAge}/>
        </div>
    )
};

AgeInput.propTypes = {
    age: PropTypes.number.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default AgeInput;