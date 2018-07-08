import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import List from './components/list'
import { db } from './firebase'
import AddPayment from './pages/addPayment'
import JoinGroup from './pages/joinGroup'
import CreateGroup from './pages/createGroup'
import Home from './pages/home'
import Welcome from './pages/welcomeTo'
import NotFound from './components/notFound'
import GroupCreated from './pages/groupCreated';
import LandingPage from './pages/landing';
import PendingPayments from './pages/pendingPayments';

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
        <Route exact path="/" component={LandingPage} />
        <Route path="/createGroup" component={CreateGroup} />
        <Route path="/home" component={Home} />
        <Route path="/addPayment" component={AddPayment} />
        <Route path="/joinGroup" component={JoinGroup} />
        <Route path="/groupCreated" component={GroupCreated} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/pendingPayments" component={PendingPayments} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
