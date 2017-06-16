import React, { Component } from 'react';
import './FeedOfficialStore.css';
import getImage from '../../lib/utils.js';

var FeedOfficialStore = React.createClass({
  render: function() {
    return (
      <div className='feed-official-store mb-20'>
				<h1 className='fw-600 fs-16 lh-16 feed-official-store__title'>Official Store</h1>
				<div className='row-fluid feed-official-store__showcase'>
					<div className='span4 feed-official-store__items'>
						<a href={this.props.feed.content.official_store[0].shop_defaultv3_url}>
							<img src={this.props.feed.content.official_store[0].microsite_url} className='feed-official-store__items-image'/>
						</a>
					</div>
					<div className='span4 feed-official-store__items'>
						<a href={this.props.feed.content.official_store[1].shop_defaultv3_url}>
							<img src={this.props.feed.content.official_store[1].microsite_url} className='feed-official-store__items-image'/>
						</a>
					</div>
					<div className='span4 feed-official-store__items'>
						<a href={this.props.feed.content.official_store[2].shop_defaultv3_url}>
							<img src={this.props.feed.content.official_store[2].microsite_url} className='feed-official-store__items-image'/>
						</a>
					</div>
				</div>

				<div className='row-fluid feed-official-store__showcase'>
					<div className='span4 feed-official-store__items'>
						<a href={this.props.feed.content.official_store[2].shop_defaultv3_url}>
							<img src={this.props.feed.content.official_store[3].microsite_url} className='feed-official-store__items-image'/>
						</a>
					</div>
					<div className='span4 feed-official-store__items'>
						<a href={this.props.feed.content.official_store[2].shop_defaultv3_url}>
							<img src={this.props.feed.content.official_store[3].microsite_url} className='feed-official-store__items-image'/>
						</a>
					</div>
					<div className='span4 feed-official-store__items'>
						<a href={this.props.feed.content.official_store[2].shop_defaultv3_url}>
							<img src={this.props.feed.content.official_store[3].microsite_url} className='feed-official-store__items-image'/>
						</a>
					</div>
				</div>

				<div className='ta-center row-fluid feed-official-store__link-more'>
					<a href="https://www.tokopedia.com/official-store">Lihat Semua</a>
				</div>
      </div>
    );
  }
})

export default FeedOfficialStore;
