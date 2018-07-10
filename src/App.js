import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddPayment from './pages/addPayment'
import JoinGroup from './pages/joinGroup'
import CreateGroup from './pages/createGroup'
import Home from './pages/home'
import Welcome from './pages/welcomeTo'
import LandingPage from './pages/landing';
import GroupCreated from './pages/groupCreated';
import PendingPayments from './pages/pendingPayments';
import NotFound from './components/notFound'
import { db } from './firebase'
import AppHeader from './components/appHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <Router >
        <div className="App">
        <AppHeader title={'Welcome to bills application'}/>
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
