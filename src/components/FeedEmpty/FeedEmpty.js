import React, { Component } from 'react';
import './FeedEmpty.css';
import getImage from '../../lib/utils.js';

var FeedEmpty = React.createClass({
  searchShop: function() {
    window.location = '/fav-shop.pl';
  },
  render: function() {
    return (
      <div className='feed-empty'>
        <div className='feed-empty__image'>
            <img alt='' src={getImage('empty-state.png')} />
        </div>
        <div className='feed-empty__text'>
            <h5 className='fs-14 fw-600'>Oops, feed masih kosong</h5>
            <p className='fs-12'>Segera favoritkan toko yang Anda sukai untuk mendapatkan update produk terbaru disini.</p>
            <button type="button" onClick={() => this.searchShop()} className='btn btn-action'>Cari Toko</button>
        </div>
      </div>
    );
  }
})

export default FeedEmpty;