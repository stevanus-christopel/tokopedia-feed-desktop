import React, { Component } from 'react';
import { FeedQuery } from '../../../queries'
import '../FeedView.css';
import getImage from '../../../lib/utils.js';

import FeedEmpty from '../../../components/FeedEmpty'
import FeedSearchShop from '../../../components/FeedSearchShop'
import FeedProduct from '../../../components/FeedProduct'
import FeedHotList from '../../../components/FeedHotList'
import FeedOfficialStore from '../../../components/FeedOfficialStore'
import FeedOfficialStoreProduct from '../../../components/FeedOfficialStoreProduct'
import FeedMarketingPromo from '../../../components/FeedMarketingPromo'
import FeedTopAdsShop from '../../../components/FeedTopAdsShop'
import FeedInspiration from '../../../components/FeedInspiration'
import FeedTopAdsProduct from '../../../components/FeedTopAdsProduct'
import FeedSellerStory from '../../../components/FeedSellerStory'
import FeedTokopediaStory from '../../../components/FeedTokopediaStory'

var FeedView = React.createClass({
  componentDidMount: function(){
    /*fetch('/graphql', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: FeedQuery
        }),
        credentials: 'include'
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })*/
  },
  render: function() {
    return (
      <div className='feed'>
        <div className='feed__main-content'>
          <FeedEmpty />
          <FeedTopAdsShop />
          <FeedProduct productCount={1} />
          <FeedProduct productCount={2} />
          <FeedOfficialStoreProduct />
          <FeedProduct productCount={3} />
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
