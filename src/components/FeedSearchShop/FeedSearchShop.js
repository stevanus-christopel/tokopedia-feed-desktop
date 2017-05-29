import React, { Component } from 'react';
import './FeedSearchShop.css';

import searchShop from './assets/search-shop.png'

var FeedSearchShop = React.createClass({
  render: function() {
    return (
      <div className='feed-search-shop'>
        <div className='feed-search-shop__image'>
            <img alt='' src={searchShop} />
        </div>
        <div className='feed-search-shop__text'>
            <h5 className='fs-14 fw-600'>Mau lihat update produk lebih banyak?</h5>
            <p className='fs-12'>Segera favoritkan toko yang Anda sukai.</p>
            <button type="button" className='btn btn-action'>Cari Toko</button>
        </div>
      </div>
    );
  }
})

export default FeedSearchShop;
