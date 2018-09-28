import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {

    static propTypes = {
        updateName: PropTypes.func.isRequired,
    }

    constructor() {
        super();

    }

    changeNameInput = e => {
        this.props.onInputChange('name', e);
    }

    render() {

        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Your Name..." 
                    value={this.props.name} 
                    onChange={this.changeNameInput} 
                />
            </div>
        )
    }
}

export default NameInput;