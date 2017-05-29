import React, { Component } from 'react';
import '../FeedDetailView.css';

import FeedHotList from '../../FeedHotList'
import FeedProductDetail from '../../../components/FeedProductDetail'

class FeedDetailView extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='feed-detail'>
        <div className='feed-detail__main-content'>
          <FeedProductDetail />
        </div>
        <div className='feed-detail__right-sidebar'>
          <FeedHotList />
        </div>
      </div>
    );
  }
}

export default FeedDetailView;
