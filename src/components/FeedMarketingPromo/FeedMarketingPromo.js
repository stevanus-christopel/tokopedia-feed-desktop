import React, { Component } from 'react';
import './FeedMarketingPromo.css';
import getImage from '../../lib/utils.js';

const SLIDE_CONTAINER = document.getElementsByClassName('feed-marketing-promo__content');
const MARKETING_PROMO_TOAST_CONTAINER = document.getElementsByClassName('feed-marketing-promo__toast-container');

var FeedMarketingPromo = React.createClass({
	getInitialState: function() {
    return {
      isCopyCode: false,
    };
  },
	copyPromoCode: function() {
		MARKETING_PROMO_TOAST_CONTAINER[0].classList.add('show')
		setTimeout(() => {
			MARKETING_PROMO_TOAST_CONTAINER[0].classList.remove('show')
		}, 2000)
		console.log(MARKETING_PROMO_TOAST_CONTAINER[0].scrollWidth)
		console.log(MARKETING_PROMO_TOAST_CONTAINER[0].clientWidth)
	},
  render: function() {
    return (
      <div className='mb-20 feed-marketing-promo'>

				<div className='feed-marketing-promo__toast-container'>
					<div className='fs-12 inline-block'>Kode anda telah disalin</div>
					{/*<img className='pull-right feed-marketing-promo__toast-close' src={getImage('x.png')} />
					<div className='pull-right fs-12 lh-11 ml-50 bold inline-block'>Batalkan</div>*/}
				</div>
				
				<div className='p-10 feed-marketing-promo__header'>
          <div className='va-middle inline-block feed-marketing-promo__seller-photo'>
            <img src={getImage('tokopedia-avatar-square.png')} />
          </div>
          <div className='va-middle feed-marketing-promo__seller-activity'>
            <span className='fw-600'>Tokopedia </span>
            <div className='fs-11 feed-marketing-promo__seller-activity--time'>Promo</div>
          </div>
          <div className='feed-marketing-promo__seller-share'></div>
					<div className='feed-marketing-promo__arrow--left hidden'>
						<img src={getImage('arrow-promo.png')}/>
					</div>
					<div className='feed-marketing-promo__arrow--right'>
						<img src={getImage('group-32.png')}/>
					</div>
        </div>
				
				<div className='feed-marketing-promo__content'>
          <div className='row-fluid feed-marketing-promo__content-items'>
            <div className='feed-marketing-promo__content-container'>
							<div className='feed-marketing-promo__content-frame'>
								<div className='feed-marketing-promo__content-list'>
									<img src={getImage('promo-banner.jpg')} className='feed-marketing-promo__content-image'/>
									<div className='row-fluid'>
										<div className='pull-left feed-marketing-promo__content-details'>
											<div className='fs-13 lh-20 fw-normal m-0 pb-10 feed-marketing-promo__content-title'>Beli paket data XL di Tokopedia assad lebih sdsi hemat, diskon hingga 41%</div>
											<h3 className='fs-12 fw-normal feed-marketing-promo__content-promo'><span>Periode: </span>25 Januari 2017</h3>
										</div>
										<div className='pull-left pl-10 feed-marketing-promo__code-container'>
											<span className='fs-12 fw-normal feed-marketing-promo__code-label'>Kode :</span>
											<div className='ta-center feed-marketing-promo__code-box'>
												<span className='fs-13 fw-600 feed-marketing-promo__code-text'>XLPROMO41A</span>
											</div>
											<button className='btn btn-action ml-5 feed-marketing-promo__btn-save-promo' onClick={() => this.copyPromoCode()}>Salin</button>
										</div>
									</div>
								</div>
							</div>
						</div>
          </div>


					<div className='row-fluid feed-marketing-promo__content-items'>
            <div className='feed-marketing-promo__content-container'>
							<div className='feed-marketing-promo__content-frame'>
								<div className='feed-marketing-promo__content-list'>
									<img src={getImage('banner-149.jpg')} className='feed-marketing-promo__content-image'/>
									<div className='row-fluid'>
										<div className='pull-left feed-marketing-promo__content-details'>
											<div className='fs-13 lh-20 fw-normal m-0 pb-10 feed-marketing-promo__content-title'>Beli paket data XL di Tokopedia assad lebih sdsi hemat, diskon hingga 41%</div>
											<h3 className='fs-12 fw-normal feed-marketing-promo__content-promo'><span>Periode: </span>25 Januari 2017</h3>
										</div>
										<div className='pull-left pl-10 feed-marketing-promo__code-container'>
											<span className='fs-12 fw-normal feed-marketing-promo__code-label'>Kode :</span>
											<div className='ta-center feed-marketing-promo__code-box'>
												<span className='fs-13 fw-600 feed-marketing-promo__code-text'>XLPROMO41A</span>
											</div>
											<button className='btn btn-action ml-5 feed-marketing-promo__btn-save-promo' onClick={() => this.copyPromoCode()}>Salin</button>
										</div>
									</div>
								</div>
							</div>
						</div>
          </div>

					<div className='row-fluid feed-marketing-promo__content-items'>
            <div className='feed-marketing-promo__content-container'>
							<div className='feed-marketing-promo__content-frame'>
								<div className='feed-marketing-promo__content-list'>
									<img src={getImage('promo-banner.jpg')} className='feed-marketing-promo__content-image'/>
									<div className='row-fluid'>
										<div className='pull-left feed-marketing-promo__content-details'>
											<div className='fs-13 lh-20 fw-normal m-0 pb-10 feed-marketing-promo__content-title'>Beli paket data XL di Tokopedia assad lebih sdsi hemat, diskon hingga 41%</div>
											<h3 className='fs-12 fw-normal feed-marketing-promo__content-promo'><span>Periode: </span>25 Januari 2017</h3>
										</div>
										<div className='pull-left pl-10 feed-marketing-promo__code-container'>
											<span className='fs-12 fw-normal feed-marketing-promo__code-label'>Kode :</span>
											<div className='ta-center feed-marketing-promo__code-box'>
												<span className='fs-13 fw-600 feed-marketing-promo__code-text'>XLPROMO41A</span>
											</div>
											<button className='btn btn-action ml-5 feed-marketing-promo__btn-save-promo' onClick={() => this.copyPromoCode()}>Salin</button>
										</div>
									</div>
								</div>
							</div>
						</div>
          </div>


        </div>

				<div className='ta-center p-10 feed-marketing-promo__footer'>
					<a href="#">Lihat semua promo</a>
				</div>
				
      </div>
    );
  }
})

export default FeedMarketingPromo;
