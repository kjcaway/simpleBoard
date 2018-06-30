import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import { Menu, Home } from './containers';

import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
);
