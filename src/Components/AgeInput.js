import React from 'react';

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

export default AgeInput;