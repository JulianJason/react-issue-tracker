// libraries
import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

// root-level components
import Header  from "./containers/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";



// start of app class
class App extends Component {

  render() {
    return (
        <div className="App">
          <Header />
          <Dashboard />
        </div>
    );
  }
}

export default App;
