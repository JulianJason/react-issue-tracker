import React, { Component } from "react";

import styles from './App.scss';
import { Header, Footer} from '../../components/index';
import { Dashboard } from "../Dashboard/Dashboard";

class App extends Component {


    render() {
        return (
            <div className={styles.app}>
                <Header />
                <Dashboard />
                <Fooater />
            </div>
        )
    }
}

export default App;
