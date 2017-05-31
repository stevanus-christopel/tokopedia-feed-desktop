import React, { Component } from 'react';
import './FeedHotlist.css';
import getImage from '../../lib/utils.js';

var FeedHotlist = React.createClass({
  render: function() {
    return (
      <div>
				<div className='feed-hot-lists-full'>
					<div className='row-fluid feed-hot-lists__top-banner'>
						<img src={getImage('ramadhan-hotlist.png')}/>
					</div>

					<div className='row-fluid feed-hot-lists-showcases'>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src={getImage('sunglasses-hl.png')}/>
						</div>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src={getImage('makeup-hl.png')}/>
						</div>
					</div>

					<div className='row-fluid feed-hot-lists-showcases'>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src={getImage('pashmina-hl.png')}/>
						</div>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src={getImage('aksesoris-hl.png')}/>
						</div>
					</div>
				</div>

				<div className='row-fluid feed-hot-lists__top-banner'>
					<img src={getImage('kongkow-hotlist.png')} className='pt-20'/>
				</div>

				<div className='row-fluid feed-hot-lists__top-banner'>
					<img src={getImage('tampil-hotlist.png')} className='pt-20'/>
				</div>
      </div>
    );
  }
})

export default FeedHotlist;
