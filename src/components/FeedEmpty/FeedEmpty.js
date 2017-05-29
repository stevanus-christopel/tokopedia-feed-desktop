import React, { Component } from 'react';
import './FeedEmpty.css';

import emptyState from './assets/empty-state.png'

class FeedEmpty extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='feed-empty'>
        <div className='feed-empty__image'>
            <img alt='' src={emptyState} />
        </div>
        <div className='feed-empty__text'>
            <h5 className='fs-14 fw-600'>Oops, feed masih kosong</h5>
            <p className='fs-12'>Segera favoritkan toko yang Anda sukai untuk mendapatkan update produk terbaru disini.</p>
            <button type="button" className='btn btn-action'>Cari Toko</button>
        </div>
      </div>
    );
  }
}

export default FeedEmpty;
