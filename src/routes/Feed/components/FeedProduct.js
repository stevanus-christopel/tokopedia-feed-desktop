import React, { Component } from 'react';
import './FeedView.css';

import tokopediaAvatar from '../assets/tokopedia-avatar-square.png'

class FeedProduct extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='feed-product'>
          <div className='feed-product__header'>
            <div className='feed-product__seller-photo'>
              <img alt='' src={ tokopediaAvatar } />
            </div>
            <div className='feed-product__seller-activity'>
              <span className='fw-600'>Nana Shop Ekstraordinari </span>
              ubah <span className='fw-600'>1 produk</span>
              <br />
              <span className='feed-product__seller-activity--time'>3 jam</span>
            </div>
            <div className='feed-product__seller-share'></div>
          </div>
      </div>
    );
  }
}

export default FeedProduct;
