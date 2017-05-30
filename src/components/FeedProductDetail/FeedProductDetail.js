import React, { Component } from 'react';
import './FeedProductDetail.css';
import getImage from '../../lib/utils.js';

var FeedProductDetail = React.createClass({
  render: function() {
    return (
      <div className='feed-product-detail'>
        <div className='feed-product-detail__header'>
          <div className='feed-product-detail__seller-photo'>
            <img alt='' src={getImage('tokopedia-avatar-square.png')}/>
          </div>
          <div className='feed-product-detail__seller-activity'>
            <span className='fw-600'>Nana Shop Ekstraordinari </span>
            ubah <span className='fw-600'>2 produk</span>
            <div className='feed-product-detail__seller-activity--time'>3 jam</div>
          </div>
          <div className='feed-product-detail__seller-share'></div>
        </div>
      </div>
    );
  }
})

export default FeedProductDetail;
