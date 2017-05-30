import React, { Component } from 'react';
import './FeedHotlist.css';
import getImage from '../../lib/utils.js';

var FeedHotlist = React.createClass({
  render: function() {
    return (
      <div>
				<div className='feed-hot-lists-full'>
					<div className='row-fluid'>
						<img src='http://placehold.it/315x100'/>
					</div>

					<div className='row-fluid feed-hot-lists-showcases'>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src="http://placehold.it/157.5x157.5"/>
						</div>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src="http://placehold.it/157.5x157.5"/>
						</div>
					</div>

					<div className='row-fluid feed-hot-lists-showcases'>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src="http://placehold.it/157.5x157.5"/>
						</div>
						<div className='span6 m-0 feed-hot-lists__items'>
							<img src="http://placehold.it/157.5x157.5"/>
						</div>
					</div>
				</div>

				<div className='row-fluid'>
					<img src='http://placehold.it/319x100' className='pt-20'/>
				</div>

				<div className='row-fluid'>
					<img src='http://placehold.it/319x100' className='pt-20'/>
				</div>
      </div>
    );
  }
})

export default FeedHotlist;
