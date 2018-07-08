import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import List from './components/list'
import { db } from './firebase'
import AddPayment from './pages/addPayment'
import CreateGroup from './pages/createGroup'
import NotFound from './components/notFound'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // const { getBills } = this.props;
    db.onceGetUsers().then(users => console.log(users.docs[0].data()))
  }

  render() {
    return (
      <Router >
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to bills application</h1>
        </header>
        <List items={[]}/>
        <Switch>
        <Route exact path="/" component={AddPayment} />
        <Route path="/createGroup" component={CreateGroup} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
