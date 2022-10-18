import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm';
import { Component } from 'react';
class App extends Component{
  render(){
    return(
      <div>
        <PostForm />
      </div>
    )
  }
}

export default App;
