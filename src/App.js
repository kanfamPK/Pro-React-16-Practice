import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Khan",
      key1: "january"
    }
  }
  randomNum = ()=>{
    let a = Math.random();
    this.setState((state,props)=>{
      return({key1: a});
    });
  }
  // randomNum(){
  //   let a = Math.random();
  //   this.setState((state,props)=>{
  //     return({key1: a});
  //   });
  // }

  render() {
    return (
      <div className="App">
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s Todo List
        </h4>
        <p className="font-weight-bold">
          This is state's key1 : {this.state.key1}
        </p>
        <button className="bg-danger p-3 text-white" onClick={this.randomNum}>
          Click to change state's key1
        </button>
      </div>
    )
  }
}

export default App;
