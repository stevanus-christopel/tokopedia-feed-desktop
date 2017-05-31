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
                    <img src={getImage('ta-1.jpg')} className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Amarylis 'Snowflake'
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 45.000</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'>
                    <img src={getImage('ta-2.jpg')} className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Aloe Vera Jumbo
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 60.000</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'>
                    <img src={getImage('ta-3.jpg')} className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Acalypha Wilkesiana Blaze
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 45.000</label>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='row-fluid'>
                    <div className='span4 feed-topads-product__items'>
                    <img src={getImage('ta-4.jpg')} className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Srikaya Australia Jumbo 60cm
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 95.000</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items'>
                    <img src={getImage('ta-5.jpg')} className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Jambu Air Dalhari 60cm
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 75.000</label>
                        </div>
                    </div>
                    </div>

                    <div className='span4 feed-topads-product__items'>
                    <img src={getImage('ta-6.jpg')} className='feed-topads-product__image'/>
                    <div className='feed-topads-product__details'>
                        <div className='fs-12 fw-600 lh-17 feed-topads-product__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        Gowok (Kupa) 150cm
                        </div>
                        </div>
                        <div className='feed-topads-product__items--price'>
                        <label className='fs-12 fw-600 orange-red'>Rp 915.000</label>
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
