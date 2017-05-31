import React, { Component } from 'react';
import './FeedTokopediaStory.css';
import getImage from '../../lib/utils.js';

var FeedTokopediaStory = React.createClass({
  render: function() {
    return (
      <div className='feed-tokopedia-story'>
        <div className='feed-tokopedia-story__header'>
          Seputar Tokopedia
        </div>
        <div className='feed-tokopedia-story__card'>
            <div className='feed-tokopedia-story__image'>
                <img alt='' src={getImage('seputar-toped.png')} />
            </div>
            <div className='feed-tokopedia-story__text'>
                <div className='feed-tokopedia-story__text-left'>
                Saat Generasi Bangsa Bergerak Menuju Perubahan yang Fantastik Gemilang Cahaya
                </div>
                <div className='feed-tokopedia-story__text-right'></div>
            </div>
        </div>
      </div>
    );
  }
})

export default FeedTokopediaStory;
