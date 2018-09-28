import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {

    static propTypes = {
        updateName: PropTypes.func.isRequired,
    }

    constructor() {
        super();

        this.state = {
            nameInputValue: "Ravi",
            otherValue: 1,
            someanothervalue: 2,
        };
    }

    changeNameInput = e => {
        this.setState({
            nameInputValue: e.target.value
        });
    }

    render() {

        const onButtonClick = () => {
            this.props.updateName(this.state.nameInputValue)
        };

        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Your Name..." 
                    value={this.state.nameInputValue} 
                    onChange={this.changeNameInput} 
                />
                <button onClick={onButtonClick}>submit</button>
            </div>
        )
    }
}

export default NameInput;