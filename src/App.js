import React, {Component} from 'react';
import Name from './Components/Name';
import logo from './logo.svg';
import './App.css';
import NameInput from './Components/NameInput';
import Age from './Components/Age';
import AgeInput from './Components/AgeInput';
import BlogPosts from './Components/BlogPosts';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',    
      age: 0,
      blogPosts: [],
    };

  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      this.setState({
        blogPosts: data,
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getPosts();
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
        <BlogPosts posts={this.state.blogPosts}/>
      </div>
    )
  }
}

export default App;
