import React, { Component } from 'react';
import './App.css';

import { Header, Footer } from "./components/index";
import { Dashboard } from "./containers/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard/>
          <Footer />
      </div>
    );
  }
}

export default App;
