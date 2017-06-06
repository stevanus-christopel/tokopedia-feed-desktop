import React, { Component } from 'react';
import './FeedProductDetailItem.css';

import ButtonWishlist from '../ButtonWishlist';

import getImage from '../../lib/utils.js';

const MAX_PRODUCT_RATING = 5;

var FeedProductDetailItem = React.createClass({
	getInitialState: function() {
    return {
      image: this.props.image,
      productName: this.props.productName,
      productPrice: this.props.productPrice,
      cashback: this.props.cashback,
      grosir: this.props.grosir,
      preorder: this.props.preorder,
      refund: this.props.refund,
			rating: this.props.rating,
    };
  },

	renderStars: function() {
		let products = []
		const target = document.querySelectorAll('.feed-product-detail-items__product-rating');
		
		for(let i=0; i<this.props.rating; i++) {
			products.push(<img className='feed-product-detail-items__product-rating-stars' key={'on-'+i} src={getImage('rating-on.png')} />);
		}
		for(let i=0; i<(MAX_PRODUCT_RATING - this.props.rating); i++) {
			products.push(<img className='feed-product-detail-items__product-rating-stars' key={'off-'+i} src={getImage('rating-off.png')} />);
		}

		return products
	},
  
  render: function() {
		const isCashback = this.props.cashback == true;
		const isGrosir = this.props.grosir == true;
		const isPreOrderAble = this.props.preorder == true;
		const isRefundAble = this.props.refund == true;
		
    return (
      <div className='feed-product-detail-frame'>
        <div className='row-fluid relative p-10 feed-product-detail-items'>
            <div className='pull-left mr-15 feed-product-detail-items__image-container'>
              <ButtonWishlist checked={false} />
              <img src={getImage(this.props.image)} className='feed-product-detail-items__image'/>
            </div>
            <div className='feed-product-detail-items__detail-container'>
              <h2 className='fw-600 lh-18 fs-13 mb-5 feed-product-detail-items__product-name'>{this.props.productName}</h2>
              <h2 className='fw-600 lh-18 fs-13 mb-5 orange-red feed-product-detail-items__product-price'>Rp. {this.props.productPrice}</h2>
              <div className='mb-5 feed-product-detail-items__product-rating'>
                {this.renderStars()}
              </div>
              <div className='mb-5 feed-product-detail__product-options'>
                {isCashback? <span className='fs-10 lh-12 feed-product-detail-items__product-options--green'>Cashback 14%</span> : ''}
                {isGrosir? <span className='fs-10 lh-12 ml-5 feed-product-detail-items__product-options--white'>Grosir</span> : ''}
                {isPreOrderAble? <span className='fs-10 lh-12 ml-5 feed-product-detail-items__product-options--white'>PO</span> : ''}
                {isRefundAble? <span className='ml-5'><img src={getImage('refund.png')} className='feed-product-detail-items__product-options--refund'/></span> : ''}
              </div>
            </div>
          </div>
      </div>
    );
  }
})

export default FeedProductDetailItem;