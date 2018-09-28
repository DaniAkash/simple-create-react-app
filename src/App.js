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

  updateName = name => {
    this.setState({
      name,
    });
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Name name={this.state.name}/>
        <NameInput updateName={this.updateName} />
      </div>
    )
  }
}

export default App;
