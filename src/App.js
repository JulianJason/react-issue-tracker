import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Header } from "./components/index";
import { Dashboard } from "./containers/Dashboard/Dashboard";
import { AnalyticsDashboard } from "./containers/AnalyticsDashboard/AnalyticsDashboard";

const Home = () => (
    <div>
        <h2> Home </h2>
    </div>
);


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
              <Route path ="/" exact component={Home} />
              <Route path="/analytics" component={AnalyticsDashboard} />
              <Route path="/explore" component={Dashboard} />
          </Switch>
      </div>
    );
  }
}

export default App;
