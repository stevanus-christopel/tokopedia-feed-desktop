import React, { Component } from 'react';
import './FeedSearchShop.css';
import getImage from '../../lib/utils.js';

var FeedSearchShop = React.createClass({
  searchShop: function() {
    window.location = '/fav-shop.pl';
  },
  render: function() {
    return (
      <div className='feed-search-shop'>
        <div className='feed-search-shop__image'>
            <img alt='' src={getImage('search-shop.png')} />
        </div>
        <div className='feed-search-shop__text'>
            <h5 className='fs-14 fw-600'>Mau lihat update produk lebih banyak?</h5>
            <p className='fs-12'>Segera favoritkan toko yang Anda sukai.</p>
            <button type="button" onClick={() => this.searchShop()} className='btn btn-action'>Cari Toko</button>
        </div>
      </div>
    );
  }
})

export default FeedSearchShop;
