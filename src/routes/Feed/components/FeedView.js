import React, { Component } from 'react';
import './FeedView.css';

import FeedEmpty from './FeedEmpty'
import FeedProduct from './FeedProduct'
import FeedHotList from '../../FeedHotList'
import FeedOfficialStoreProduct from '../../FeedOfficialStoreProduct'
import FeedInspiration from '../../../components/FeedInspiration'

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
          <FeedOfficialStoreProduct />
          <FeedProduct />
          <FeedOfficialStoreProduct />
          <FeedInspiration />
        </div>
        <div className='feed__right-sidebar'>
          <FeedHotList />
        </div>
      </div>
    );
  }
}

export default FeedView;
