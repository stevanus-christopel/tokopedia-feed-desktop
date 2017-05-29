import React, { Component } from 'react';
import './FeedProductDetail.css';

import tokopediaAvatar from './assets/tokopedia-avatar-square.png'

class FeedProductDetail extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='feed-product-detail'>
        <div className='feed-product-detail__header'>
          <div className='feed-product-detail__seller-photo'>
            <img alt='' src={ tokopediaAvatar } />
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
}

export default FeedProductDetail;
