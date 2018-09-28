import React, {Component} from 'react';
import Name from './Components/Name';
import logo from './logo.svg';
import './App.css';
import NameInput from './Components/NameInput';
import Age from './Components/Age';
import AgeInput from './Components/AgeInput';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',    
      age: 0,
    };

  }

  componentDidMount() {
    
  }

  onInputChange = (type, event) => {
    const newState = {...this.state};
    newState[type] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>

        <Name name={this.state.name}/>
        <Age age={this.state.age}/>

        <NameInput 
          onInputChange={this.onInputChange} 
          name={this.state.name} 
        />
        <AgeInput 
          onInputChange={this.onInputChange} 
          age={parseInt(this.state.age)}
        />
      </div>
    )
  }
}

export default App;
