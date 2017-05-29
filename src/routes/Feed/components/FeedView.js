import React, { Component } from 'react';
import '../FeedView.css';

import FeedEmpty from '../../../components/FeedEmpty'
import FeedSearchShop from '../../../components/FeedSearchShop'
import FeedProduct from '../../../components/FeedProduct'
import FeedHotList from '../../../components/FeedHotList'
import FeedOfficialStore from '../../../components/FeedOfficialStore'
import FeedOfficialStoreProduct from '../../../components/FeedOfficialStoreProduct'
import FeedInspiration from '../../../components/FeedInspiration'
import FeedTopAdsProduct from '../../../components/FeedTopAdsProduct'
import FeedSellerStory from '../../../components/FeedSellerStory'
import FeedTokopediaStory from '../../../components/FeedTokopediaStory'

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
          <FeedSearchShop />
          <FeedOfficialStore />
          <FeedInspiration />
          <FeedTopAdsProduct />
          <FeedTokopediaStory />
          <FeedSellerStory />
        </div>
        <div className='feed__right-sidebar'>
          <FeedHotList />
        </div>
      </div>
    );
  }
}

export default FeedView;
