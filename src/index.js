import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';
// import './css/custom.css';
// import './css/custom-2.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

const store = applyMiddleware()(createStore)(reducer);
const rootEl = document.getElementById('root');

import Users from './components/users';
import About from './components/about';
import Home from './components/home';

const renderApp = () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    </Provider>,
    rootEl
  );
};

renderApp();
