import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Feed from './routes/Feed';
import FeedDetail from './routes/FeedDetail';

const batchingNetworkInterface = createBatchingNetworkInterface({
  uri: 'https://4-feature-m-staging.tokopedia.com/graphql',
  batchInterval: 250,
  opts: {
    credentials: 'same-origin',
    mode: 'no-cors',
  },
})

const client = new ApolloClient({
  networkInterface: batchingNetworkInterface,
  queryDeduplication: true,
  shouldBatch: true,
  connectToDevTools: false,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/detail" component={FeedDetail} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('feed-root')
);

registerServiceWorker();
