import React, { Component } from 'react';
import './FeedTopAdsProduct.css';
import getImage from '../../lib/utils.js';

import ButtonWishlist from '../ButtonWishlist';

var FeedTopAdsProduct = React.createClass({
  getInitialState: function() {
    return {
      isShowPopOver: false,
      isShowWishlist1: false,
      isShowWishlist2: false,
      isShowWishlist3: false,
      isShowWishlist4: false,
      isShowWishlist5: false,
      isShowWishlist6: false
    };
  },
  showWishlist: function(elementNumber) {
    switch(elementNumber){
      case 1:
        this.setState({
          isShowWishlist1: true
        });
        break;
      case 2:
        this.setState({
          isShowWishlist2: true
        });
        break;
      case 3:
        this.setState({
          isShowWishlist3: true
        });
        break;
      case 4:
        this.setState({
          isShowWishlist4: true
        });
        break;
      case 5:
        this.setState({
          isShowWishlist5: true
        });
        break;
      case 6:
        this.setState({
          isShowWishlist6: true
        });
        break;
    }
  },
  hideWishlist: function(elementNumber) {
    switch(elementNumber){
      case 1:
        this.setState({
          isShowWishlist1: false
        });
        break;
      case 2:
        this.setState({
          isShowWishlist2: false
        });
        break;
      case 3:
        this.setState({
          isShowWishlist3: false
        });
        break;
      case 4:
        this.setState({
          isShowWishlist4: false
        });
        break;
      case 5:
        this.setState({
          isShowWishlist5: false
        });
        break;
      case 6:
        this.setState({
          isShowWishlist6: false
        });
        break;
    }
  },
  togglePopOver: function() {
    if(!this.state.isShowPopOver) {
      document.onclick = this.togglePopOver;
    } else {
      document.onclick = null;
    }

    this.setState({
      isShowPopover: !this.state.isShowPopover
    });
  },
  render: function() {
    return (
        <div className='feed-topads-product'>
            <div className='feed-topads-product__header'>
              <div className='fs-12 feed-topads-shop__text-promoted' onClick={() => this.togglePopOver()}>Promoted 
                <img className='feed-topads-product__image-promoted' src={this.state.isShowPopover? getImage('icon-info-ijo.png') : getImage('icon-info.png') } />
                {
                  this.state.isShowPopover === true &&
                  <div className='p-20 relative feed-topads-product__popover'>
                    <img className='feed-topads-product__popover--arrow' alt='' src={getImage('arrow-left.png')} />
                    <h2 className='fs-13 fw-normal mb-15 feed-topads-product__popover-text'>Promosi oleh TopAds yang muncul berdasarkan minat Anda.</h2>
                    <div className='feed-topads-product__popover-image-container'>
                      <img src={getImage('announcement.png')} className='feed-topads-product__popover-image'/>
                    </div>
                    <button className='btn btn-action fw-normal feed-topads-product__popover-button'>Baca Selengkapnya</button>
                  </div>
                }
              </div>
            </div>

            <div className='feed-topads-product__content'>					
                <div className='row-fluid'>
                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'
                    onMouseEnter={() => this.showWishlist(1)}
                    onMouseLeave={() => this.hideWishlist(1)}>
                    { this.state.isShowWishlist1 && <ButtonWishlist checked={false} />}
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

                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'
                    onMouseEnter={() => this.showWishlist(2)}
                    onMouseLeave={() => this.hideWishlist(2)}>
                    { this.state.isShowWishlist2 && <ButtonWishlist checked={false} />}
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

                    <div className='span4 feed-topads-product__items feed-topads-product__items--border-bottom'
                    onMouseEnter={() => this.showWishlist(3)}
                    onMouseLeave={() => this.hideWishlist(3)}>
                    { this.state.isShowWishlist3 && <ButtonWishlist checked={false} />}
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
                    <div className='span4 feed-topads-product__items'
                    onMouseEnter={() => this.showWishlist(4)}
                    onMouseLeave={() => this.hideWishlist(4)}>
                    { this.state.isShowWishlist4 && <ButtonWishlist checked={true} />}
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

                    <div className='span4 feed-topads-product__items'
                    onMouseEnter={() => this.showWishlist(5)}
                    onMouseLeave={() => this.hideWishlist(5)}>
                    { this.state.isShowWishlist5 && <ButtonWishlist checked={false} />}
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

                    <div className='span4 feed-topads-product__items'
                    onMouseEnter={() => this.showWishlist(6)}
                    onMouseLeave={() => this.hideWishlist(6)}>
                    { this.state.isShowWishlist6 && <ButtonWishlist checked={false} />}
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
