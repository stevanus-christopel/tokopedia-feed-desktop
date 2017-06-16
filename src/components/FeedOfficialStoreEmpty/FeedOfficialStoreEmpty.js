import React, { Component } from 'react';
import './FeedOfficialStoreEmpty.css';
import getImage from '../../lib/utils.js';

var FeedOfficialStoreEmpty = React.createClass({
  render: function() {
    return (
      <div className='feed-official-store-empty mb-20'>
        <div className='feed-official-store-empty__left'>
            <img src={getImage('off-store-icon.png')} alt='' />
        </div>
        <div className='feed-official-store-empty__right'>
            Sudah cek Official Store Tokopedia belum? <a href='https://www.tokopedia.com/official-store'>Lihat Sekarang</a>
        </div>
      </div>
    );
  }
})

export default FeedOfficialStoreEmpty;
