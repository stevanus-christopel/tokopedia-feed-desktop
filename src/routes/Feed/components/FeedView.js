import React, { Component } from 'react';
import '../FeedView.css';
import getImage from '../../../lib/utils.js';

import FeedEmpty from '../../../components/FeedEmpty'
import FeedSearchShop from '../../../components/FeedSearchShop'
import FeedProduct from '../../../components/FeedProduct'
import FeedHotList from '../../../components/FeedHotList'
import FeedOfficialStore from '../../../components/FeedOfficialStore'
import FeedOfficialStoreProduct from '../../../components/FeedOfficialStoreProduct'
import FeedMarketingPromo from '../../../components/FeedMarketingPromo'
import FeedInspiration from '../../../components/FeedInspiration'
import FeedTopAdsProduct from '../../../components/FeedTopAdsProduct'
import FeedSellerStory from '../../../components/FeedSellerStory'
import FeedTokopediaStory from '../../../components/FeedTokopediaStory'

var FeedView = React.createClass({
  render: function() {
    return (
      <div className='feed'>
        <div className='feed__main-content'>
          <FeedEmpty />
          <FeedProduct productCount={2} />
          <FeedProduct productCount={3} />
          <FeedOfficialStoreProduct />
          <FeedMarketingPromo />
          <FeedProduct productCount={4} />
          <FeedProduct productCount={5} />
          <FeedProduct productCount={6} />
          <FeedSearchShop />
          <FeedProduct productCount={7} />
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
})

export default FeedView;
