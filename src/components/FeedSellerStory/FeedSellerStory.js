import React, { Component } from 'react';
import './FeedSellerStory.css';
import getImage from '../../lib/utils.js';

var FeedSellerStory = React.createClass({
  render: function() {
    return (
      <div className='feed-seller-story'>
        <div className='feed-seller-story__header'>
          Kisah Sukses dari Penjual Tokopedia
        </div>
        <div className='feed-seller-story__image'>
            <img alt='' src='http://placehold.it/560x200' />
        </div>
        <div className='feed-seller-story__text'>
            <div className='feed-seller-story__text-left'>
              Peter Chandra Mantan Pegawai Migas Beralih Menjadi Penjual Air Minum di Petamburan.
            </div>
            <div className='feed-seller-story__text-right'></div>
        </div>
      </div>
    );
  }
})

export default FeedSellerStory;
