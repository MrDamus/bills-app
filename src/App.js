import React, { Component } from 'react';
import './App.css';
import Inputs from './components/inputs'
import List from './components/list'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // const { getBills } = this.props;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to bills application</h1>
        </header>
        <Inputs name={'Add top up'}/>
        <List items={[]}/>
      </div>
    );
  }
}

export default App;
