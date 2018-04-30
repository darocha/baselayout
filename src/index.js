import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import '@progress/kendo-theme-default/dist/all.css';

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} >
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
