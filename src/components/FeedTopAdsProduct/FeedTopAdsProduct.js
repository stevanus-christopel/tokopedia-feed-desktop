import React, { Component } from 'react';
import './FeedTopAdsProduct.css';
import getImage from '../../lib/utils.js';

var FeedTopAdsProduct = React.createClass({
  render: function() {
    return (
        <div className='feed-topads-product'>
            <div className='feed-topads-product__header'>
                Promoted
                <img alt='' src={getImage('icon-info.png')} />
            </div>

            <div className='feed-topads-product__content'>					
                <div className='row-fluid'>
                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'>
                    <img src="http://placehold.it/300x300" className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Dr.Kevin Stylish and Comfortable Men Sne
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'>
                    <img src="http://placehold.it/300x300" className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Dr.Kevin Stylish and Comfortable Men Sne
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'>
                    <img src="http://placehold.it/300x300" className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Dr.Kevin Stylish and Comfortable Men Sne
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='row-fluid'>
                    <div className='span4 feed-topads-product__items'>
                    <img src="http://placehold.it/300x300" className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Dr.Kevin Stylish and Comfortable Men Sne
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items'>
                    <img src="http://placehold.it/300x300" className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Dr.Kevin Stylish and Comfortable Men Sne
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items'>
                    <img src="http://placehold.it/300x300" className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Dr.Kevin Stylish and Comfortable Men Sne
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
})

export default FeedTopAdsProduct;
