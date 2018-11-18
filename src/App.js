// libraries
import React, { Component } from 'react';
import './App.css';

// root-level components
import { Header } from "./components/index";
import { Dashboard } from "./containers/Dashboard/Dashboard";
import { LoginModal } from "./components";



// start of app class
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalShown: false
        }
    }
    showLoginModal = () => {
        this.setState({ isLoginModalShown: true });
    };

    hideLoginModal = () => {
        this.setState({ isLoginModalShown: false });
    };

  render() {
    return (
        <div className="App">
          <Header showLoginModal={this.showLoginModal}/>
          <Dashboard />
            {this.state.isLoginModalShown ? <LoginModal hideModal={this.hideLoginModal} /> : null}
        </div>
    );
  }
}

export default App;
