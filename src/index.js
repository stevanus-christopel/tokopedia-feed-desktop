import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Feed from './routes/Feed';
import FeedDetailView from './routes/FeedDetailView';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/detail" component={FeedDetailView} />
    </Switch>
  </Router>,
  document.getElementById('feed-root')
);

registerServiceWorker();
