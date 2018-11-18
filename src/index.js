// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "./store/configureStore";
import { BrowserRouter as Router  } from 'react-router-dom';

// component imports
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MockAPI from "./services/MockAPI";

// configure redux saga store
const store= configureStore();

// Clear and populate localStorage with mock data. Used so that the localStorage will be clean between sessions.
MockAPI.seedBackend();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
