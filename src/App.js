import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inputs from './components/inputs'

class App extends Component {
  componentDidMount() {
    // const { getBills } = this.props;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to bills application</h1>
        </header>
        <Inputs name={'Add top up'}/>
      </div>
    );
  }
}

export default App;
