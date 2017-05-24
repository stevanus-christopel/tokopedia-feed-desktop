import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Feed from './routes/Feed';

ReactDOM.render(
  <Router>
    <Route path="/" component={Feed} />
  </Router>,
  document.getElementById('feed-root')
);

registerServiceWorker();
