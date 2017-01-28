import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';
import './css/custom.css';
import './app';

import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

const store = applyMiddleware(thunk)(createStore)(reducer);
const rootEl = document.getElementById('root');

import Browse from './components/browse';
import Search from './views/search';
import Home from './components/home';
import SearchResults from './views/searchResults';

const renderApp = () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/browse" component={Browse} />
          <Route path="/search" component={Search} />
          <Route path="/searchResults" component={SearchResults} />
        </Route>
      </Router>
    </Provider>,
    rootEl
  );
};

renderApp();
