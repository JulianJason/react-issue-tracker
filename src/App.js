import React, { Component } from 'react';
import './App.css';

import { Header } from "./components/index";
import { Dashboard } from "./containers/Dashboard/Dashboard";



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
