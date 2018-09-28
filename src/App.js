import React, {Component} from 'react';
import Name from './Components/Name';
import logo from './logo.svg';
import './App.css';
import NameInput from './Components/NameInput';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
    };

    // code here...
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Name name={this.state.name}/>
        <NameInput/>
      </div>
    )
  }
}

export default App;
