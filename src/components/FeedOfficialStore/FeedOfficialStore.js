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
						<img src={getImage('lg-logo.png')} className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src={getImage('garnier-logo.png')} className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src={getImage('garmin-logo.png')} className='feed-official-store__items-image'/>
					</div>
				</div>

				<div className='row-fluid feed-official-store__showcase'>
					<div className='span4 feed-official-store__items'>
						<img src={getImage('microsoft-logo.png')} className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src={getImage('momnbab-logo.png')} className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src={getImage('makarizo-logo.png')} className='feed-official-store__items-image'/>
					</div>
				</div>

				<div className='ta-center row-fluid feed-official-store__link-more'>
					<a href="#">Lihat Semua</a>
				</div>
      </div>
    );
  }
})

export default FeedOfficialStore;
