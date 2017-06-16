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
	},
  render: function() {
    return (
      <div className='mb-20 feed-marketing-promo'>

				<div className='feed-marketing-promo__toast-container ta-center'>
					<div className='fs-12 inline-block'>Kode anda telah disalin</div>
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
					{
						this.props.feed.content.promotions.map(function(promo) {
							return (
							<div className='row-fluid feed-marketing-promo__content-items' key={ promo.id }>
								<div className='feed-marketing-promo__content-container'>
									<div className='feed-marketing-promo__content-frame'>
										<div className='feed-marketing-promo__content-list'>
											<a href={promo.url}>
												<img src={ promo.feature_image } className='feed-marketing-promo__content-image'/>
											</a>
											<div className='row-fluid'>
												<div className='pull-left feed-marketing-promo__content-details'>
													<div className='fs-13 lh-20 fw-normal m-0 pb-10 feed-marketing-promo__content-title'
													dangerouslySetInnerHTML={{__html: promo.description}}>
													</div>
													<h3 className='fs-12 fw-normal feed-marketing-promo__content-promo mb-0'><span>Periode: </span>
													{  promo.periode }</h3>
												</div>
												{ promo.code.length != 0 &&
													<div className='pull-left pl-10 feed-marketing-promo__code-container mb-10'>
														<span className='fs-12 fw-normal feed-marketing-promo__code-label'>Kode :</span>
														<div className='ta-center feed-marketing-promo__code-box'>
															<span className='fs-13 fw-600 feed-marketing-promo__code-text'>{ promo.code }</span>
														</div>
														<button className='btn btn-action ml-5 feed-marketing-promo__btn-save-promo'
														onClick={() => this.copyPromoCode()}>Salin</button>
													</div>
												}
											</div>
										</div>
									</div>
								</div>
							</div>)
						}, this)
					}
					
        </div>

				<a href="https://www.tokopedia.com/promo/">
					<div className='ta-center p-10 feed-marketing-promo__footer'>
						Lihat semua promo
					</div>
				</a>
				
      </div>
    );
  }
})

export default FeedMarketingPromo;
