import React, { Component } from 'react';
import './FeedView.css';
import FeedOfficialStore from './../../FeedOfficialStoreProduct'

import FeedEmpty from './FeedEmpty'
import FeedProduct from './FeedProduct'

class FeedView extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='feed'>
        <div className='feed__main-content'>
          <FeedEmpty />
          <FeedProduct />
          <FeedOfficialStore />
        </div>
        <div className='feed__right-sidebar'>
        </div>
      </div>
    );
  }
}

export default FeedView;
