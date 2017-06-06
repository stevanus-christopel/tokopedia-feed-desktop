import React, { Component } from 'react';
import './FeedTopAdsShop.css';
import getImage from '../../lib/utils.js';

var FeedTopAdsShop = React.createClass({
  getInitialState: function() {
    return {
      isShowPopOver: false
    }
  },
  togglePopOver: function() {
    if(!this.state.isShowPopover) {
      document.onclick = this.togglePopover;
    } else {
      document.onclick = null;
    }

    this.setState({
      isShowPopover: !this.state.isShowPopover
    });
  },

  render: function() {
    return (
        <div className='mb-20 feed-topads-shop'>
            <div className='fs-12 pb-10 feed-topads-shop__header'>
              <div className='pb-10 feed-topads-shop__text-promoted'>Promoted 
                <img className='feed-topads-shop__image-promoted' src={this.state.isShowPopover? getImage('icon-info-ijo.png') : getImage('icon-info.png') } onClick={() => this.togglePopOver()}/>
                {
                  this.state.isShowPopover === true &&
                  <div className='p-20 feed-topads-shop__popover'>
                    <img className='feed-topads-shop__popover--arrow' alt='' src={getImage('arrow-left.png')} />
                    <h2 className='fs-13 fw-normal mb-15 feed-topads-shop__popover-text'>Promosi oleh TopAds yang muncul berdasarkan minat Anda.</h2>
                    <div className='feed-topads-shop__popover-image-container'>
                      <img src={getImage('announcement.png')} className='feed-topads-shop__popover-image'/>
                    </div>
                    <button className='btn btn-action fw-normal feed-topads-shop__popover-button'>Baca Selengkapnya</button>
                  </div>
                }
              </div>
              
              <div className='va-middle inline-block feed-topads-shop__seller-photo'>
                <img src={getImage('tokopedia-avatar-square.png')} />
              </div>
              <div className='va-middle feed-topads-shop__seller-activity'>
                <span className='fw-600'>Makeup Forever </span>
                <div className='fs-11 feed-topads-shop__seller-activity--time'>Bukan Produk Biasa</div>
              </div>
              <div className='feed-topads-shop__seller-favorite'>
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
