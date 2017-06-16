import React, { Component } from 'react';
import './FeedHotList.css';
import getImage from '../../lib/utils.js';

var FeedHotList = React.createClass({
  render: function() {
    return (
      <div className='feed-hot-list'>
				<h3 className='feed-hot-list__title'>Stylish Daily Outfit <hr /></h3>
				<div className='feed-hot-list__image'>
					<img src={getImage('hl-1.jpg')}/>
				</div>
				<div className='feed-hot-list__image'>
					<img src={getImage('hl-2.jpg')}/>
				</div>
				<div className='feed-hot-list__image'>
					<img src={getImage('hl-3.jpg')}/>
				</div>
				<div className='feed-hot-list__image'>
					<img src={getImage('hl-4.jpg')}/>
				</div>
      </div>
    );
  }
})

export default FeedHotList;
