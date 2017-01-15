import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import About from './About';
import Inbox from './Inbox';
import Inboxs from './Inboxs';




import './index.css';
import { Router, Route, hashHistory } from 'react-router';



ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/inbox" component={Inbox}/>
        <Route path="/inboxs/:id" component={Inboxs}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
