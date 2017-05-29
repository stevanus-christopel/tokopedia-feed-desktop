import React, { Component } from 'react';
import './FeedOfficialStore.css';

class FeedOfficialStore extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='feed-official-store mb-20'>
				<h1 className='fw-600 fs-16 lh-16 feed-official-store__title'>Official Store</h1>
				<div className='row-fluid feed-official-store__showcase'>
					<div className='span4 feed-official-store__items'>
						<img src='http://placehold.it/170x170' className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src='http://placehold.it/170x170' className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src='http://placehold.it/170x170' className='feed-official-store__items-image'/>
					</div>
				</div>

				<div className='row-fluid feed-official-store__showcase'>
					<div className='span4 feed-official-store__items'>
						<img src='http://placehold.it/170x170' className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src='http://placehold.it/170x170' className='feed-official-store__items-image'/>
					</div>
					<div className='span4 feed-official-store__items'>
						<img src='http://placehold.it/170x170' className='feed-official-store__items-image'/>
					</div>
				</div>

				<div className='ta-center row-fluid feed-official-store__link-more'>
					<a href="#">Lihat Semua</a>
				</div>
      </div>
    );
  }
}

export default FeedOfficialStore;
