import React, { Component } from 'react';
import './FeedProduct.css';

import tokopediaAvatar from './assets/tokopedia-avatar-square.png'

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
            ubah <span className='fw-600'>2 produk</span>
            <div className='feed-product__seller-activity--time'>3 jam</div>
          </div>
          <div className='feed-product__seller-share'></div>
        </div>

        <div className='feed-product__content'>					
          <div className='row-fluid'>
            <div className='span6 feed-product__items'>
              <img src="http://placehold.it/300x300" className='feed-product__image'/>
              <div className='feed-product__details'>
                <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-product__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                </div>
              </div>
            </div>

            <div className='span6 feed-product__items'>
              <img src="http://placehold.it/300x300" className='feed-product__image'/>
              <div className='feed-product__details'>
                <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-product__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedProduct;
