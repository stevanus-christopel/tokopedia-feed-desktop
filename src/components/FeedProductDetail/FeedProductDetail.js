import React, { Component } from 'react';
import './FeedProductDetail.css';

import ButtonShare from '../ButtonShare';
import FeedProductDetailItems from './../FeedProductDetailItems';

import getImage from '../../lib/utils.js';


var FeedProductDetail = React.createClass({  
  render: function() {

    return (
      <div className='feed-product-detail'>
        <div className='feed-product-detail__header'>
          <div className='feed-product-detail__header-information'>
            <div className='feed-product-detail__seller-photo'>
              <img alt='' src={getImage('tokopedia-avatar-square.png')}/>
            </div>
            <div className='feed-product-detail__seller-activity'>
              <span className='fw-600'>Nana Shop Ekstraordinari </span>
              ubah <span className='fw-600'>2 produk</span>
              <div className='feed-product-detail__seller-activity--time'>Kemarin pukul 15.23</div>
            </div>
            <div className='feed-product-detail__seller-share'></div>
          </div>
          <div className='row-fluid clearfix feed-product-detail__button-container'>
            <button className="btn btn-action pull-left feed-product-detail__btn-open-store">Kunjungi Toko</button>
            <ButtonShare />
            
          </div>
        </div>
        
        <div className='feed-product-detail__content'>
          <FeedProductDetailItems 
            cashback ={true}
            grosir ={true}
            preorder ={true}
            refund ={true}
            rating ={3}
          />
        </div>

      </div>
    );
  }
})

export default FeedProductDetail;
