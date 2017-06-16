import React, { Component } from 'react';
import './FeedOfficialStoreProduct.css';
import getImage from '../../lib/utils.js';

var FeedOfficialStoreProduct = React.createClass({
	render: function() {
		const colorStyle = {
			backgroundColor: this.props.feed.content.official_store[0].feed_hexa_color
		}
		return (
			<div>
				<div className='feed-official-store-product__banner-image-container'>
					<img className='feed-official-store-product__banner-image'
					src={this.props.feed.content.official_store[0].mobile_img_url} alt=""/>
				</div>
				<div className='pt-0 mb-20 feed-official-store-product mb-20' 
				style={ colorStyle } >
					<div className='feed-official-store-product__frame'>
						<div className='feed-official-store-product__content'>					
							<div className='row-fluid feed-official-store-product__row'>
								<div className='span4 feed-official-store-product__items'>
									<div className='feed-official-store-product__items-details'>
										<img src={this.props.feed.content.official_store[0].products[0].data.image_url} className='feed-official-store-product__image'/>
										<div className='feed-official-store-product__details'>
											<div className='fs-12 fw-600 lh-17 feed-official-store-product__items--name'>
												<div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
												{this.props.feed.content.official_store[0].products[0].data.name}
												</div>
											</div>
											<div className='pb-20 feed-official-store-product__items--price'>
												<label className='fs-12 fw-600 orange-red'>{this.props.feed.content.official_store[0].products[0].data.price}</label>
											</div>
										</div>
									</div>
									<div className='feed-official-store-product__items--store'>
										<div className='span3 feed-official-store-product__image-container-store'>
											<img src={this.props.feed.content.official_store[0].products[0].brand_logo} className='feed-official-store-product__image-store'/>
										</div>
										<div className='span8 pt-15 feed-official-store-product__text'>
											<label className='fs-11 text-black07'> {this.props.feed.content.official_store[0].products[0].data.shop.name}</label>
										</div>
									</div>
								</div>

								<div className='span4 feed-official-store-product__items'>
									<div className='feed-official-store-product__items-details'>
										<img src={this.props.feed.content.official_store[0].products[1].data.image_url} className='feed-official-store-product__image'/>
										<div className='feed-official-store-product__details'>
											<div className='fs-12 fw-600 lh-17 feed-official-store-product__items--name'>
												{this.props.feed.content.official_store[0].products[1].data.name}
											</div>
											<div className='pb-20 feed-official-store-product__items--price'>
												<label className='fs-12 fw-600 orange-red'>{this.props.feed.content.official_store[0].products[1].data.price}</label>
											</div>
										</div>
									</div>
									<div className='feed-official-store-product__items--store'>
										<div className='span3 feed-official-store-product__image-container-store'>
											<img src={this.props.feed.content.official_store[0].products[1].brand_logo} className='feed-official-store-product__image-store'/>
										</div>
										<div className='span8 pt-15 feed-official-store-product__text'>
											<label className='fs-11 text-black07'> {this.props.feed.content.official_store[0].products[1].data.shop.name}</label>
										</div>
									</div>
								</div>

								<div className='span4 feed-official-store-product__items'>
									<div className='feed-official-store-product__items-details'>
										<img src={this.props.feed.content.official_store[0].products[2].data.image_url} className='feed-official-store-product__image'/>
										<div className='feed-official-store-product__details'>
											<div className='fs-12 fw-600 lh-17 feed-official-store-product__items--name'>
												{this.props.feed.content.official_store[0].products[2].data.name}
											</div>
											<div className='pb-20 feed-official-store-product__items--price'>
												<label className='fs-12 fw-600 orange-red'>{this.props.feed.content.official_store[0].products[2].data.price}</label>
											</div>
										</div>
									</div>
									<div className='feed-official-store-product__items--store'>
										<div className='span3 feed-official-store-product__image-container-store'>
											<img src={this.props.feed.content.official_store[0].products[2].brand_logo} className='feed-official-store-product__image-store'/>
										</div>
										<div className='span8 pt-15 feed-official-store-product__text'>
											<label className='fs-11 text-black07'> {this.props.feed.content.official_store[0].products[2].data.shop.name}</label>
										</div>
									</div>
								</div>	
							</div>
								


							<div className='row-fluid feed-official-store-product__row'>
								<div className='span4 feed-official-store-product__items'>
									<div className='feed-official-store-product__items-details'>
										<img src={this.props.feed.content.official_store[0].products[3].data.image_url} className='feed-official-store-product__image'/>
										<div className='feed-official-store-product__details'>
											<div className='fs-12 fw-600 lh-17 feed-official-store-product__items--name'>
												<div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
												{this.props.feed.content.official_store[0].products[3].data.name}
												</div>
											</div>
												<div className='pb-20 feed-official-store-product__items--price'>
													<label className='fs-12 fw-600 orange-red'>{this.props.feed.content.official_store[0].products[3].data.price}</label>
												</div>
										</div>
									</div>
									<div className='feed-official-store-product__items--store'>
										<div className='span3 feed-official-store-product__image-container-store'>
											<img src={this.props.feed.content.official_store[0].products[3].brand_logo} className='feed-official-store-product__image-store'/>
										</div>
										<div className='span8 pt-15 feed-official-store-product__text'>
											<label className='fs-11 text-black07'> {this.props.feed.content.official_store[0].products[3].data.shop.name}</label>
										</div>
									</div>
								</div>

								<div className='span4 feed-official-store-product__items'>
									<div className='feed-official-store-product__items-details'>
										<img src={this.props.feed.content.official_store[0].products[3].data.image_url} className='feed-official-store-product__image'/>
										<div className='feed-official-store-product__details'>
											<div className='fs-12 fw-600 lh-17 feed-official-store-product__items--name'>
												{this.props.feed.content.official_store[0].products[3].data.name}
											</div>
											<div className='pb-20 feed-official-store-product__items--price'>
												<label className='fs-12 fw-600 orange-red'>{this.props.feed.content.official_store[0].products[3].data.price}</label>
											</div>
										</div>
									</div>
									<div className='feed-official-store-product__items--store'>
										<div className='span3 feed-official-store-product__image-container-store'>
											<img src={this.props.feed.content.official_store[0].products[3].brand_logo} className='feed-official-store-product__image-store'/>
										</div>
										<div className='span8 pt-15 feed-official-store-product__text'>
											<label className='fs-11 text-black07'> {this.props.feed.content.official_store[0].products[3].data.shop.name}</label>
										</div>
									</div>
								</div>

								<div className='span4 feed-official-store-product__items'>
									<div className='feed-official-store-product__items-details'>
										<img src={this.props.feed.content.official_store[0].products[3].data.image_url} className='feed-official-store-product__image'/>
										<div className='feed-official-store-product__details'>
											<div className='fs-12 fw-600 lh-17 feed-official-store-product__items--name'>
												{this.props.feed.content.official_store[0].products[3].data.name}
											</div>
											<div className='pb-20 feed-official-store-product__items--price'>
												<label className='fs-12 fw-600 orange-red'>{this.props.feed.content.official_store[0].products[3].data.price}</label>
											</div>
										</div>
									</div>
									<div className='feed-official-store-product__items--store'>
										<div className='span3 feed-official-store-product__image-container-store'>
											<img src={this.props.feed.content.official_store[0].products[3].brand_logo} className='feed-official-store-product__image-store'/>
										</div>
										<div className='span8 pt-15 feed-official-store-product__text'>
											<label className='fs-11 text-black07'> {this.props.feed.content.official_store[0].products[3].data.shop.name}</label>
										</div>
									</div>
								</div>
							</div>

							<div className='ta-center row-fluid feed-official-store-product__link-more'>
								<a href="https://www.tokopedia.com/official-store">Lihat Semua</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
})

export default FeedOfficialStoreProduct;
