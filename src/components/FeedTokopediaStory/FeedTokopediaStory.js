import React, { Component } from 'react';
import './FeedTokopediaStory.css';

var FeedTokopediaStory = React.createClass({
  render: function() {
    return (
      <div className='feed-tokopedia-story'>
        <div className='feed-tokopedia-story__header'>
          Seputar Tokopedia
        </div>
        <div className='feed-tokopedia-story__card'>
            <div className='feed-tokopedia-story__image'>
                <img alt='' src='http://placehold.it/560x200' />
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
