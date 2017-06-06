import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Feed from './routes/Feed';
import FeedDetail from './routes/FeedDetail';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={FeedDetail} />
      <Route path="/detail" component={FeedDetail} />
    </Switch>
  </Router>,
  document.getElementById('feed-root')
);

registerServiceWorker();
