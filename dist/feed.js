import React, { Component } from 'react';
import FeedView from './components/FeedView';

export default FeedView;
import React, { Component } from 'react';
import './FeedView.css';

class FeedView extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
          <h1>Hello</h1>
          <p className='feed__title'>This is feed plus page.. Still on progress.</p>
      </div>
    );
  }
}

export default FeedView;
