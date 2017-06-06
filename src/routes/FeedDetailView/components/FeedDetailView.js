import React, { Component } from 'react';
import '../FeedDetailView.css';
import getImage from '../../../lib/utils.js';

import FeedHotList from '../../../components/FeedHotList'
import FeedProductDetail from '../../../components/FeedProductDetail'

var FeedDetailView = React.createClass({
  render: function() {
    return (
      <div className='feed-detail'>
        <div className='mr-40 feed-detail__left-sidebar'>
          <a href='javascript:window.history.back()'>
            <img className='feed-detail__back-icon' src={getImage('arrow-hijau.png')} alt="" /> 
            <span className="fs-12 va-middle green">Kembali ke Feed</span>
          </a>
        </div>
        <div className='feed-detail__main-content'>
          <FeedProductDetail />
        </div>
        <div className='feed-detail__right-sidebar'>
          <FeedHotList />
        </div>
      </div>
    );
  }
})

export default FeedDetailView;
