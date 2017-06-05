import React, { Component } from 'react';
import './FeedMarketingPromo.css';
import getImage from '../../lib/utils.js';

var marketingPromoContainer = document.getElementsByClassName('feed-marketing-promo__content')
var marketingPromoItems = document.getElementsByClassName('feed-marketing-promo__content-items')

const SLIDE_CONTAINER = document.getElementsByClassName('feed-marketing-promo__content');

var FeedMarketingPromo = React.createClass({
	
	// sideScroll: function(element, direction, speed, distance, step) {
	// 	var scrollAmount = 0;
  //   var slideTimer = setInterval(function(){
  //       if(direction == 'left'){
  //           element.scrollLeft -= step;
  //       } else {
	// 				console.log(element)
	// 				console.log(element.scrollLeft)
  //           element.scrollLeft += step;
  //       }
  //       scrollAmount += step;
  //       if(scrollAmount >= distance){
  //           window.clearInterval(slideTimer);
  //       }
  //   }, speed);
	// },
	// slide: function() {
	// 	console.log('kanan')
	// 	this.sideScroll(document.getElementsByClassName('feed-marketing-promo__content'), 'right', 25, 100, 10)
	// },
	// slideBack: function() {
	// 	this.sideScroll(document.getElementsByClassName('feed-marketing-promo__content'),'left',25,100,10);
	// },
	
  render: function() {
    return (
      <div className='mb-20 feed-marketing-promo'>
				
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
						<img src={getImage('group-32.png')}/>
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
										<div className='pull-left pt-15 pl-10 feed-marketing-promo__code-container'>
											<span className='fs-12 fw-normal'>Kode :</span>
											<div className='feed-marketing-promo__code-box'>
												<span className='fs-13 fw-600 feed-marketing-promo__code-text'>XLPROMO41A</span>
											</div>
										</div>
										<div className='pull-left feed-marketing-promo__btn-container'>
											<button className='btn btn-action feed-marketing-promo__btn-save-promo'>Salin</button>
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
										<div className='pull-left pt-20 pl-15 feed-marketing-promo__code-container'>
											<span className='fs-12 fw-normal'>Kode :</span>
											<div className='feed-marketing-promo__code-box'>
												<span className='fs-13 fw-600 feed-marketing-promo__code-text'>XLPROMO41A</span>
											</div>
										</div>
										<div className='pull-left feed-marketing-promo__btn-container'>
											<button className='btn btn-action feed-marketing-promo__btn-save-promo'>Salin</button>
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
