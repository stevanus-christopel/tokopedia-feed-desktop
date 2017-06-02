import React, { Component } from 'react';
import './FeedTopAdsShop.css';
import getImage from '../../lib/utils.js';

var FeedTopAdsShop = React.createClass({
  render: function() {
    return (
        <div className='mb-20 feed-topads-shop'>
            <div className='fs-12 pb-10 feed-topads-shop__header'>
              <div className='pb-10 feed-topads-shop__text-promoted'>Promoted <img alt='' src={getImage('icon-info.png')} /></div>
              
              <div className='va-middle inline-block feed-topads-shop__seller-photo'>
                <img src={getImage('tokopedia-avatar-square.png')} />
              </div>
              <div className='va-middle feed-topads-shop__seller-activity'>
                <span className='fw-600'>Makeup Forever </span>
                <div className='fs-11 feed-topads-shop__seller-activity--time'>Bukan Produk Biasa</div>
              </div>
              <div className='feed-topads-shop__seller-share'>
                <button className='btn'>
                  <img alt='' src={getImage('icon-plus.png')} />
                   Favoritkan
                </button>
              </div>
            </div>

            <div className='feed-topads-shop__content'>
              <div className='row-fluid'>

                <div className='span6 feed-topads-shop__items'>
                  <img src={getImage('tas-1.jpg')} className='feed-topads-shop__image feed-topads-shop__image--big'/>
                </div>

                <div className='span6 feed-topads-shop__showcases'>

                  <div className='pb-5 row-fluid'>
                    <div className='span6 feed-topads-shop__items'>
                      <img src={getImage('tas-2.jpg')} className='feed-topads-shop__image'/>
                    </div>
                    <div className='span6 feed-topads-shop__items'>
                      <img src={getImage('tas-3.jpg')} className='feed-topads-shop__image'/>
                    </div>
                  </div>

                  <div className='row-fluid'>
                    <div className='span6 feed-topads-shop__items'>
                      <img src={getImage('tas-4.jpg')} className='feed-topads-shop__image'/>
                    </div>
                    <div className='span6 feed-topads-shop__items'>
                      <img src={getImage('tas-5.jpg')} className='feed-topads-shop__image'/>
                    </div>
                  </div>

                </div>

              </div>
            </div>
        </div>
    );
  }
})

export default FeedTopAdsShop;
