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
  getParameterByName: function (name, url) {
    var self = this;
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  componentDidMount: function(){
    var obj = {"limit": 3,"userID": 5510345,"cursor": ""};
    this.fetchData(obj);
  },
  fetchData: function(obj){
    var self = this;
    let header = new Headers({
        'Content-Type': 'application/jsonp',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*'
    });
    return fetch('http://localhost:3000/graphql', {
        method: 'post',
        mode: 'cors',
        headers: header,
        body: JSON.stringify({
          query: FeedQuery,
          variable: obj
        }),
        credentials: 'include'
      })
      .then(response => response.json())
      .then(response => {
        console.log('hello')
      })
  },
  render: function() {
    return (
      <div className='feed'>
        <div className='feed__main-content'>
          {
            this.getParameterByName('p') === 'empty' ?
            <div>
              <FeedEmpty />
              <FeedTopAdsShop />
              <FeedTopAdsShop />
              <FeedTopAdsShop />
            </div> :
            this.getParameterByName('p') === 'less' ?
            <div>
              <FeedSearchShop />
              <FeedTopAdsShop />
              <FeedProduct productCount={1} />
              <FeedProduct productCount={2} />
              <FeedOfficialStoreProduct />
              <FeedTopAdsShop />
              <FeedTopAdsShop />
            </div> :
            <div>
              <FeedProduct productCount={1} />
              <FeedProduct productCount={2} />
              <FeedOfficialStoreProduct />
              <FeedProduct productCount={3} />
              <FeedMarketingPromo />
              <FeedProduct productCount={4} />
              <FeedProduct productCount={5} />
              <FeedProduct productCount={6} />
              <FeedProduct productCount={7} />
              <FeedOfficialStore />
              <FeedInspiration />
              <FeedTopAdsProduct />
            </div>
          }
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
